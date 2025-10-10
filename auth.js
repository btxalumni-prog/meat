let currentUser = null;
let currentProfile = null;

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'thittuoi2025';

function initializeAuth() {
    if (typeof dataManager !== 'undefined') {
        currentUser = dataManager.getCurrentUser();
        currentProfile = currentUser;
        updateAuthUI();
    }
}

async function handleLogin(email, password) {
    try {
        if (email === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
            currentUser = {
                id: 'admin',
                email: 'admin@thittuoi.com',
                fullName: 'Administrator',
                isAdmin: true
            };
            currentProfile = currentUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));

            showToast('Đăng nhập admin thành công!', 'success');
            updateAuthUI();
            closeAuthModal();
            return currentUser;
        }

        const user = await dataManager.login(email, password);
        currentUser = user;
        currentProfile = user;

        showToast('Đăng nhập thành công!', 'success');
        updateAuthUI();
        closeAuthModal();
        return user;
    } catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}

async function handleRegister(email, password, fullName) {
    try {
        const user = await dataManager.register(email, password, fullName);
        currentUser = user;
        currentProfile = user;

        showToast('Đăng ký thành công!', 'success');
        updateAuthUI();
        closeAuthModal();
        return user;
    } catch (error) {
        console.error('Registration failed:', error);
        throw error;
    }
}

function handleLogout() {
    if (dataManager) {
        dataManager.logout();
    }
    currentUser = null;
    currentProfile = null;

    showToast('Đăng xuất thành công', 'success');
    updateAuthUI();

    if (typeof showPage === 'function') {
        showPage('home');
    }
}

function isAuthenticated() {
    return currentUser !== null;
}

function getCurrentUser() {
    return currentUser;
}

function requireAuth() {
    if (!isAuthenticated()) {
        showToast('Vui lòng đăng nhập để sử dụng tính năng này', 'warning');
        if (typeof openAuthModal === 'function') {
            openAuthModal('login');
        }
        return false;
    }
    return true;
}

function updateAuthUI() {
    const authButtons = document.getElementById('auth-buttons');
    const userProfile = document.getElementById('user-profile');
    const userName = document.getElementById('user-name');

    if (!authButtons || !userProfile || !userName) return;

    if (isAuthenticated()) {
        authButtons.style.display = 'none';
        userProfile.style.display = 'flex';
        userName.textContent = currentUser.fullName || currentUser.email;
    } else {
        authButtons.style.display = 'flex';
        userProfile.style.display = 'none';
    }
}

function openAuthModal(mode = 'login') {
    const modal = document.getElementById('auth-modal');
    const loginForm = document.getElementById('login-form-container');
    const registerForm = document.getElementById('register-form-container');

    if (!modal || !loginForm || !registerForm) return;

    modal.classList.add('active');

    if (mode === 'login') {
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    } else {
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }
}

function closeAuthModal() {
    const modal = document.getElementById('auth-modal');
    if (modal) {
        modal.classList.remove('active');
    }

    const forms = document.querySelectorAll('.auth-form');
    forms.forEach(form => form.reset());
}

function switchAuthMode(mode) {
    openAuthModal(mode);
}

async function submitLogin(event) {
    event.preventDefault();

    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;

    if (!email || !password) {
        showToast('Vui lòng điền đầy đủ thông tin', 'warning');
        return;
    }

    try {
        await handleLogin(email, password);
    } catch (error) {
        showToast(error.message || 'Đăng nhập thất bại', 'error');
    }
}

async function submitRegister(event) {
    event.preventDefault();

    const fullName = document.getElementById('register-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;

    if (!fullName || !email || !password || !confirmPassword) {
        showToast('Vui lòng điền đầy đủ thông tin', 'warning');
        return;
    }

    if (password !== confirmPassword) {
        showToast('Mật khẩu xác nhận không khớp', 'error');
        return;
    }

    if (password.length < 6) {
        showToast('Mật khẩu phải có ít nhất 6 ký tự', 'warning');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showToast('Email không hợp lệ', 'warning');
        return;
    }

    try {
        await handleRegister(email, password, fullName);
    } catch (error) {
        showToast(error.message || 'Đăng ký thất bại', 'error');
    }
}

function showToast(message, type = 'info') {
    if (typeof window.showToast === 'function') {
        window.showToast(message, type);
        return;
    }

    console.log(`[${type.toUpperCase()}] ${message}`);
}

if (typeof window !== 'undefined') {
    window.initializeAuth = initializeAuth;
    window.handleLogin = handleLogin;
    window.handleRegister = handleRegister;
    window.handleLogout = handleLogout;
    window.isAuthenticated = isAuthenticated;
    window.getCurrentUser = getCurrentUser;
    window.requireAuth = requireAuth;
    window.updateAuthUI = updateAuthUI;
    window.openAuthModal = openAuthModal;
    window.closeAuthModal = closeAuthModal;
    window.switchAuthMode = switchAuthMode;
    window.submitLogin = submitLogin;
    window.submitRegister = submitRegister;
}

document.addEventListener('DOMContentLoaded', () => {
    if (dataManager && dataManager.initialized) {
        initializeAuth();
    } else if (dataManager) {
        dataManager.initialize().then(() => {
            initializeAuth();
        });
    }
});
