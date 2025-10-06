/* ============================================
   AUTHENTICATION SYSTEM
   Using Local Storage for prototype
   ============================================ */

// Safe base64 encoding for Unicode strings
function safeBtoa(str) {
  try {
    return btoa(unescape(encodeURIComponent(str)));
  } catch (e) {
    console.warn('btoa encoding failed, using fallback', e);
    const encoder = new TextEncoder();
    const data = encoder.encode(str);
    return btoa(String.fromCharCode(...data));
  }
}

function safeAtob(str) {
  try {
    return decodeURIComponent(escape(atob(str)));
  } catch (e) {
    console.warn('atob decoding failed, using fallback', e);
    const decoded = atob(str);
    const decoder = new TextDecoder();
    return decoder.decode(new Uint8Array([...decoded].map(c => c.charCodeAt(0))));
  }
}

// Current user state
let currentUser = null;
let currentProfile = null;

// Admin credentials
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'thittuoi2025';

// LocalStorage keys
const STORAGE_KEYS = {
  USERS: 'meat_app_users',
  CURRENT_USER: 'meat_app_current_user',
  DETECTION_HISTORY: 'meat_app_detection_history',
  SAVED_ARTICLES: 'meat_app_saved_articles',
  STORAGE_REMINDERS: 'meat_app_storage_reminders',
  SEARCH_QUERIES: 'meat_app_search_queries'
};

// ============================================
// LOCAL STORAGE HELPERS
// ============================================

function getFromStorage(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (e) {
    console.error('Error reading from storage:', e);
    return null;
  }
}

function saveToStorage(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error('Error saving to storage:', e);
    return false;
  }
}

function generateId() {
  return 'id_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

// ============================================
// AUTH STATE MANAGEMENT
// ============================================

function initializeAuth() {
  // Check for existing session
  const savedUser = getFromStorage(STORAGE_KEYS.CURRENT_USER);

  if (savedUser) {
    currentUser = savedUser;
    currentProfile = savedUser.profile;
    updateUIForAuthState(true);
  } else {
    updateUIForAuthState(false);
  }

  // Initialize storage if needed
  if (!getFromStorage(STORAGE_KEYS.USERS)) {
    saveToStorage(STORAGE_KEYS.USERS, []);
  }
  if (!getFromStorage(STORAGE_KEYS.DETECTION_HISTORY)) {
    saveToStorage(STORAGE_KEYS.DETECTION_HISTORY, []);
  }
  if (!getFromStorage(STORAGE_KEYS.SAVED_ARTICLES)) {
    saveToStorage(STORAGE_KEYS.SAVED_ARTICLES, []);
  }
  if (!getFromStorage(STORAGE_KEYS.STORAGE_REMINDERS)) {
    saveToStorage(STORAGE_KEYS.STORAGE_REMINDERS, []);
  }
  if (!getFromStorage(STORAGE_KEYS.SEARCH_QUERIES)) {
    saveToStorage(STORAGE_KEYS.SEARCH_QUERIES, []);
  }
}

// ============================================
// USER REGISTRATION
// ============================================

async function registerUser(username, password, displayName = '') {
  try {
    const users = getFromStorage(STORAGE_KEYS.USERS) || [];

    // Check if username already exists
    if (users.find(u => u.username === username)) {
      showToast('Tên đăng nhập đã tồn tại', 'error');
      return { error: 'Username already exists' };
    }

    // Determine role
    const role = (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) ? 'admin' : 'user';

    // Create new user
    const newUser = {
      id: generateId(),
      username,
      password: safeBtoa(password), // Simple encoding (not secure, just for prototype)
      display_name: displayName || username,
      role,
      created_at: new Date().toISOString()
    };

    users.push(newUser);
    saveToStorage(STORAGE_KEYS.USERS, users);

    // Auto login after registration
    const loginResult = await loginUser(username, password);
    return loginResult;
  } catch (error) {
    console.error('Registration error:', error);
    showToast('Lỗi khi đăng ký', 'error');
    return { error };
  }
}

// ============================================
// USER LOGIN
// ============================================

async function loginUser(username, password) {
  try {
    const users = getFromStorage(STORAGE_KEYS.USERS) || [];
    const encodedPassword = safeBtoa(password);

    const user = users.find(u => u.username === username && u.password === encodedPassword);

    if (!user) {
      showToast('Tên đăng nhập hoặc mật khẩu không đúng', 'error');
      return { error: 'Invalid credentials' };
    }

    // Set current user
    currentUser = {
      id: user.id,
      username: user.username
    };

    currentProfile = {
      id: user.id,
      username: user.username,
      display_name: user.display_name,
      role: user.role
    };

    // Save session
    saveToStorage(STORAGE_KEYS.CURRENT_USER, {
      id: user.id,
      username: user.username,
      profile: currentProfile
    });

    updateUIForAuthState(true);
    showToast('Đăng nhập thành công!', 'success');

    return { data: currentUser, error: null };
  } catch (error) {
    console.error('Login error:', error);
    showToast('Lỗi khi đăng nhập', 'error');
    return { error };
  }
}

// ============================================
// USER LOGOUT
// ============================================

async function logoutUser() {
  try {
    currentUser = null;
    currentProfile = null;
    localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
    updateUIForAuthState(false);
    showToast('Đã đăng xuất', 'success');
  } catch (error) {
    console.error('Logout error:', error);
  }
}

// ============================================
// SAVED ARTICLES
// ============================================

async function saveArticle(articleType, articleId, articleTitle) {
  if (!currentUser) {
    showToast('Vui lòng đăng nhập để lưu bài viết', 'error');
    return { error: 'Not authenticated' };
  }

  try {
    const savedArticles = getFromStorage(STORAGE_KEYS.SAVED_ARTICLES) || [];

    // Check if already saved
    const exists = savedArticles.find(
      a => a.user_id === currentUser.id &&
           a.article_type === articleType &&
           a.article_id === articleId
    );

    if (exists) {
      showToast('Bài viết đã được lưu trước đó', 'error');
      return { error: 'Already saved' };
    }

    const newArticle = {
      id: generateId(),
      user_id: currentUser.id,
      article_type: articleType,
      article_id: articleId,
      article_title: articleTitle,
      saved_at: new Date().toISOString()
    };

    savedArticles.push(newArticle);
    saveToStorage(STORAGE_KEYS.SAVED_ARTICLES, savedArticles);

    showToast('Đã lưu bài viết!', 'success');
    return { data: newArticle, error: null };
  } catch (error) {
    console.error('Error saving article:', error);
    showToast('Lỗi khi lưu bài viết', 'error');
    return { error };
  }
}

async function unsaveArticle(articleType, articleId) {
  if (!currentUser) return;

  try {
    let savedArticles = getFromStorage(STORAGE_KEYS.SAVED_ARTICLES) || [];

    savedArticles = savedArticles.filter(
      a => !(a.user_id === currentUser.id &&
             a.article_type === articleType &&
             a.article_id === articleId)
    );

    saveToStorage(STORAGE_KEYS.SAVED_ARTICLES, savedArticles);
    showToast('Đã bỏ lưu bài viết', 'success');
  } catch (error) {
    console.error('Error unsaving article:', error);
    showToast('Lỗi khi bỏ lưu', 'error');
  }
}

async function getSavedArticles() {
  if (!currentUser) return [];

  try {
    const savedArticles = getFromStorage(STORAGE_KEYS.SAVED_ARTICLES) || [];
    return savedArticles
      .filter(a => a.user_id === currentUser.id)
      .sort((a, b) => new Date(b.saved_at) - new Date(a.saved_at));
  } catch (error) {
    console.error('Error getting saved articles:', error);
    return [];
  }
}

async function isArticleSaved(articleType, articleId) {
  if (!currentUser) return false;

  try {
    const savedArticles = getFromStorage(STORAGE_KEYS.SAVED_ARTICLES) || [];
    return savedArticles.some(
      a => a.user_id === currentUser.id &&
           a.article_type === articleType &&
           a.article_id === articleId
    );
  } catch (error) {
    return false;
  }
}

// ============================================
// DETECTION HISTORY
// ============================================

async function saveDetectionHistory(meatType, freshnessLevel, imageUrl = '', resultData = {}) {
  try {
    const history = getFromStorage(STORAGE_KEYS.DETECTION_HISTORY) || [];

    const newDetection = {
      id: generateId(),
      user_id: currentUser?.id || null,
      meat_type: meatType,
      freshness_level: freshnessLevel,
      image_url: imageUrl,
      result_data: resultData,
      detected_at: new Date().toISOString()
    };

    history.push(newDetection);
    saveToStorage(STORAGE_KEYS.DETECTION_HISTORY, history);

    return { data: newDetection, error: null };
  } catch (error) {
    console.error('Error saving detection:', error);
    return { error };
  }
}

async function getDetectionHistory(limit = 20) {
  if (!currentUser) return [];

  try {
    const history = getFromStorage(STORAGE_KEYS.DETECTION_HISTORY) || [];
    return history
      .filter(h => h.user_id === currentUser.id)
      .sort((a, b) => new Date(b.detected_at) - new Date(a.detected_at))
      .slice(0, limit);
  } catch (error) {
    console.error('Error getting detection history:', error);
    return [];
  }
}

async function deleteDetectionHistory(historyId) {
  if (!currentUser) {
    showToast('Vui lòng đăng nhập', 'error');
    return { error: 'Not authenticated' };
  }

  try {
    const history = getFromStorage(STORAGE_KEYS.DETECTION_HISTORY) || [];
    const updatedHistory = history.filter(h => h.id !== historyId || h.user_id !== currentUser.id);
    saveToStorage(STORAGE_KEYS.DETECTION_HISTORY, updatedHistory);
    showToast('Đã xóa lịch sử', 'success');
    return { success: true };
  } catch (error) {
    console.error('Error deleting detection history:', error);
    showToast('Không thể xóa lịch sử', 'error');
    return { error: error.message };
  }
}

// ============================================
// STORAGE REMINDERS
// ============================================

async function saveStorageReminder(meatType, freshnessLevel, estimatedDays, notes = '') {
  if (!currentUser) {
    showToast('Vui lòng đăng nhập', 'error');
    return { error: 'Not authenticated' };
  }

  try {
    const reminders = getFromStorage(STORAGE_KEYS.STORAGE_REMINDERS) || [];

    const newReminder = {
      id: generateId(),
      user_id: currentUser.id,
      meat_type: meatType,
      freshness_level: freshnessLevel,
      storage_date: new Date().toISOString(),
      estimated_days: estimatedDays,
      notes: notes,
      reminder_sent: false,
      created_at: new Date().toISOString()
    };

    reminders.push(newReminder);
    saveToStorage(STORAGE_KEYS.STORAGE_REMINDERS, reminders);

    showToast('Đã lưu nhắc nhở!', 'success');
    return { data: newReminder, error: null };
  } catch (error) {
    console.error('Error saving reminder:', error);
    return { error };
  }
}

async function getStorageReminders() {
  if (!currentUser) return [];

  try {
    const reminders = getFromStorage(STORAGE_KEYS.STORAGE_REMINDERS) || [];
    return reminders
      .filter(r => r.user_id === currentUser.id)
      .sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  } catch (error) {
    console.error('Error getting reminders:', error);
    return [];
  }
}

// ============================================
// UI UPDATES
// ============================================

function updateUIForAuthState(isAuthenticated) {
  const userIcon = document.querySelector('.admin-icon');
  const navBtns = document.querySelectorAll('.nav__btn');

  if (isAuthenticated && currentProfile) {
    if (userIcon) {
      userIcon.textContent = currentProfile.role === 'admin' ? '⚙️' : '👤';
      userIcon.title = currentProfile.display_name || currentProfile.username;
    }
    updateNavigationForAuth(true);
  } else {
    if (userIcon) {
      userIcon.textContent = '👤';
      userIcon.title = 'Đăng nhập';
    }
    updateNavigationForAuth(false);
  }
}

function updateNavigationForAuth(isAuth) {
  // This will be called to update nav items based on auth state
}

// ============================================
// CHECK FUNCTIONS
// ============================================

function isAuthenticated() {
  return !!currentUser;
}

function isAdmin() {
  return currentProfile?.role === 'admin';
}

function getCurrentUser() {
  return currentUser;
}

function getCurrentProfile() {
  return currentProfile;
}

// ============================================
// EXPORTS
// ============================================

window.authSystem = {
  initialize: initializeAuth,
  register: registerUser,
  login: loginUser,
  logout: logoutUser,
  saveArticle,
  unsaveArticle,
  getSavedArticles,
  isArticleSaved,
  saveDetectionHistory,
  getDetectionHistory,
  deleteDetectionHistory,
  saveStorageReminder,
  getStorageReminders,
  isAuthenticated,
  isAdmin,
  getCurrentUser,
  getCurrentProfile,
  safeBtoa,
  safeAtob
};

// Auto-initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAuth);
} else {
  initializeAuth();
}
