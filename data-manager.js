class DataManager {
    constructor() {
        this.dictionary = null;
        this.blogs = null;
        this.users = null;
        this.savedItems = null;
        this.currentUser = null;
        this.initialized = false;
    }

    async initialize() {
        if (this.initialized) return;

        try {
            await Promise.all([
                this.loadDictionary(),
                this.loadBlogs(),
                this.loadUsers(),
                this.loadSavedItems()
            ]);

            this.loadCurrentUser();
            this.initialized = true;
            console.log('DataManager initialized successfully');
        } catch (error) {
            console.error('Failed to initialize DataManager:', error);
        }
    }

    async loadDictionary() {
        try {
            const response = await fetch('/data/dictionary.json');
            this.dictionary = await response.json();
        } catch (error) {
            console.error('Failed to load dictionary:', error);
            this.dictionary = {};
        }
    }

    async loadBlogs() {
        try {
            const response = await fetch('/data/blogs.json');
            this.blogs = await response.json();
        } catch (error) {
            console.error('Failed to load blogs:', error);
            this.blogs = { posts: [], categories: [], popularTags: [] };
        }
    }

    async loadUsers() {
        try {
            const response = await fetch('/data/users.json');
            this.users = await response.json();
        } catch (error) {
            console.error('Failed to load users:', error);
            this.users = { users: [], nextUserId: 1 };
        }
    }

    async loadSavedItems() {
        try {
            const response = await fetch('/data/saved-items.json');
            this.savedItems = await response.json();
        } catch (error) {
            console.error('Failed to load saved items:', error);
            this.savedItems = { savedMeats: [], savedBlogs: [], nextMeatId: 1, nextBlogSaveId: 1 };
        }
    }

    loadCurrentUser() {
        const userStr = localStorage.getItem('currentUser');
        if (userStr) {
            try {
                this.currentUser = JSON.parse(userStr);
            } catch (error) {
                console.error('Failed to parse current user:', error);
                this.currentUser = null;
            }
        }
    }

    saveCurrentUser() {
        if (this.currentUser) {
            localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
        } else {
            localStorage.removeItem('currentUser');
        }
    }

    getDictionary() {
        return this.dictionary || {};
    }

    getMeatTypes() {
        return this.dictionary || {};
    }

    getMeatType(type) {
        return this.dictionary?.[type] || null;
    }

    getBlogPosts() {
        return this.blogs?.posts || [];
    }

    getBlogPost(id) {
        return this.blogs?.posts?.find(post => post.id === id) || null;
    }

    getBlogCategories() {
        return this.blogs?.categories || [];
    }

    getPopularTags() {
        return this.blogs?.popularTags || [];
    }

    searchBlogs(query, category = '') {
        const posts = this.getBlogPosts();
        const lowerQuery = query.toLowerCase();

        return posts.filter(post => {
            const matchesQuery = !query ||
                post.title.toLowerCase().includes(lowerQuery) ||
                post.excerpt.toLowerCase().includes(lowerQuery) ||
                post.content.toLowerCase().includes(lowerQuery) ||
                post.tags.some(tag => tag.toLowerCase().includes(lowerQuery));

            const matchesCategory = !category || category === 'Tất cả' || post.category === category;

            return matchesQuery && matchesCategory;
        });
    }

    isAuthenticated() {
        return this.currentUser !== null;
    }

    getCurrentUser() {
        return this.currentUser;
    }

    async register(email, password, fullName) {
        const existingUser = this.users.users.find(u => u.email === email);
        if (existingUser) {
            throw new Error('Email đã được sử dụng');
        }

        const newUser = {
            id: `user-${String(this.users.nextUserId).padStart(6, '0')}`,
            email,
            password,
            fullName,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };

        this.users.users.push(newUser);
        this.users.nextUserId++;

        const userForStorage = { ...newUser };
        delete userForStorage.password;
        this.currentUser = userForStorage;
        this.saveCurrentUser();

        this.persistUsers();

        return userForStorage;
    }

    async login(email, password) {
        const user = this.users.users.find(u => u.email === email && u.password === password);

        if (!user) {
            throw new Error('Email hoặc mật khẩu không đúng');
        }

        user.lastLogin = new Date().toISOString();

        const userForStorage = { ...user };
        delete userForStorage.password;
        this.currentUser = userForStorage;
        this.saveCurrentUser();

        this.persistUsers();

        return userForStorage;
    }

    logout() {
        this.currentUser = null;
        this.saveCurrentUser();
    }

    getSavedMeats(userId = null) {
        const targetUserId = userId || this.currentUser?.id;
        if (!targetUserId) return [];

        return this.savedItems.savedMeats.filter(item => item.userId === targetUserId);
    }

    getSavedBlogs(userId = null) {
        const targetUserId = userId || this.currentUser?.id;
        if (!targetUserId) return [];

        const savedBlogIds = this.savedItems.savedBlogs
            .filter(item => item.userId === targetUserId)
            .map(item => item.blogId);

        return this.getBlogPosts().filter(post => savedBlogIds.includes(post.id));
    }

    saveMeat(meatData) {
        if (!this.currentUser) {
            throw new Error('Bạn cần đăng nhập để lưu kết quả');
        }

        const newSavedMeat = {
            id: `saved-meat-${String(this.savedItems.nextMeatId).padStart(3, '0')}`,
            userId: this.currentUser.id,
            meatType: meatData.meatType,
            freshnessLevel: meatData.freshnessLevel,
            imageUrl: meatData.imageUrl || '',
            confidence: meatData.confidence || 0,
            notes: meatData.notes || '',
            savedAt: new Date().toISOString()
        };

        this.savedItems.savedMeats.push(newSavedMeat);
        this.savedItems.nextMeatId++;

        this.persistSavedItems();

        return newSavedMeat;
    }

    saveBlog(blogId) {
        if (!this.currentUser) {
            throw new Error('Bạn cần đăng nhập để lưu bài viết');
        }

        const alreadySaved = this.savedItems.savedBlogs.find(
            item => item.userId === this.currentUser.id && item.blogId === blogId
        );

        if (alreadySaved) {
            throw new Error('Bài viết đã được lưu trước đó');
        }

        const newSavedBlog = {
            id: `saved-blog-${String(this.savedItems.nextBlogSaveId).padStart(3, '0')}`,
            userId: this.currentUser.id,
            blogId: blogId,
            savedAt: new Date().toISOString()
        };

        this.savedItems.savedBlogs.push(newSavedBlog);
        this.savedItems.nextBlogSaveId++;

        this.persistSavedItems();

        return newSavedBlog;
    }

    isBlogSaved(blogId) {
        if (!this.currentUser) return false;

        return this.savedItems.savedBlogs.some(
            item => item.userId === this.currentUser.id && item.blogId === blogId
        );
    }

    unsaveBlog(blogId) {
        if (!this.currentUser) {
            throw new Error('Bạn cần đăng nhập');
        }

        const index = this.savedItems.savedBlogs.findIndex(
            item => item.userId === this.currentUser.id && item.blogId === blogId
        );

        if (index !== -1) {
            this.savedItems.savedBlogs.splice(index, 1);
            this.persistSavedItems();
        }
    }

    deleteSavedMeat(meatId) {
        if (!this.currentUser) {
            throw new Error('Bạn cần đăng nhập');
        }

        const index = this.savedItems.savedMeats.findIndex(
            item => item.id === meatId && item.userId === this.currentUser.id
        );

        if (index !== -1) {
            this.savedItems.savedMeats.splice(index, 1);
            this.persistSavedItems();
        }
    }

    persistUsers() {
        localStorage.setItem('usersData', JSON.stringify(this.users));
    }

    persistSavedItems() {
        localStorage.setItem('savedItemsData', JSON.stringify(this.savedItems));
    }

    loadFromLocalStorage() {
        const usersData = localStorage.getItem('usersData');
        if (usersData) {
            try {
                this.users = JSON.parse(usersData);
            } catch (error) {
                console.error('Failed to parse users from localStorage:', error);
            }
        }

        const savedItemsData = localStorage.getItem('savedItemsData');
        if (savedItemsData) {
            try {
                this.savedItems = JSON.parse(savedItemsData);
            } catch (error) {
                console.error('Failed to parse saved items from localStorage:', error);
            }
        }
    }
}

const dataManager = new DataManager();
window.dataManager = dataManager;
