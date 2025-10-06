// ============================================
// AUTH UI HANDLERS
// ============================================

function handleUserIconClick() {
  if (window.authSystem && window.authSystem.isAuthenticated()) {
    openProfileModal();
  } else {
    openAuthModal();
  }
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function switchAuthTab(tab) {
  document.querySelectorAll('.auth-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
  });

  document.getElementById('login-form').classList.toggle('active', tab === 'login');
  document.getElementById('register-form').classList.toggle('active', tab === 'register');
}

async function handleLogin(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  if (!window.authSystem) {
    showToast('Hệ thống auth chưa sẵn sàng', 'error');
    return;
  }

  showLoading();
  const result = await window.authSystem.login(username, password);
  hideLoading();

  if (result.error) {
    showToast('Sai tên đăng nhập hoặc mật khẩu', 'error');
  } else {
    closeAuthModal();
    showToast('Đăng nhập thành công! 🎉', 'success');
    setTimeout(updateUserIcon, 500);
  }
}

async function handleRegister(event) {
  event.preventDefault();

  const username = document.getElementById('register-username').value;
  const displayName = document.getElementById('register-displayname').value;
  const password = document.getElementById('register-password').value;
  const passwordConfirm = document.getElementById('register-password-confirm').value;

  if (password !== passwordConfirm) {
    showToast('Mật khẩu xác nhận không khớp', 'error');
    return;
  }

  if (!window.authSystem) {
    showToast('Hệ thống auth chưa sẵn sàng', 'error');
    return;
  }

  showLoading();
  const result = await window.authSystem.register(username, password, displayName);
  hideLoading();

  if (result.error) {
    showToast('Lỗi: ' + (result.error.message || 'Vui lòng thử lại'), 'error');
  } else {
    closeAuthModal();
    showToast('Đăng ký thành công! 🎉', 'success');
    setTimeout(updateUserIcon, 500);
  }
}

async function handleLogout() {
  if (!window.authSystem) return;

  await window.authSystem.logout();
  closeProfileModal();
  updateUserIcon();
}

// Profile Modal
async function openProfileModal() {
  if (!window.authSystem || !window.authSystem.isAuthenticated()) {
    openAuthModal();
    return;
  }

  const profile = window.authSystem.getCurrentProfile();
  if (!profile) return;

  document.getElementById('profile-display-name').textContent = profile.display_name || profile.username;
  document.getElementById('profile-username').textContent = '@' + profile.username;
  const roleEl = document.getElementById('profile-role');
  roleEl.textContent = profile.role === 'admin' ? 'Admin' : 'User';
  roleEl.className = 'profile-role' + (profile.role === 'admin' ? ' admin' : '');

  await loadUserHistory();
  await loadSavedArticles();

  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function switchProfileTab(tab) {
  document.querySelectorAll('.profile-tab').forEach(t => {
    t.classList.toggle('active', t.textContent.toLowerCase().includes(tab));
  });

  document.getElementById('profile-history').classList.toggle('active', tab === 'history');
  document.getElementById('profile-saved').classList.toggle('active', tab === 'saved');
}

async function loadUserHistory() {
  if (!window.authSystem) return;

  const history = await window.authSystem.getDetectionHistory(20);
  const listEl = document.getElementById('history-list');

  if (!history || history.length === 0) {
    listEl.innerHTML = '<p class="empty-state">Chưa có lịch sử kiểm tra</p>';
    return;
  }

  const meatTypes = { pork: '🐷 Thịt Heo', beef: '🐮 Thịt Bò', chicken: '🐔 Thịt Gà' };

  listEl.innerHTML = history.map(item => {
    const date = new Date(item.detected_at).toLocaleString('vi-VN');
    return '<div class="history-item">' +
      '<div class="history-item-header">' +
      '<span class="history-item-title">' + (meatTypes[item.meat_type] || item.meat_type) + '</span>' +
      '<span class="freshness-badge level-' + item.freshness_level + '">Độ tươi: ' + item.freshness_level + '/5</span>' +
      '</div>' +
      '<div class="history-item-meta"><span>📅 ' + date + '</span></div>' +
      '</div>';
  }).join('');
}

async function loadSavedArticles() {
  if (!window.authSystem) return;

  const saved = await window.authSystem.getSavedArticles();
  const listEl = document.getElementById('saved-list');

  if (!saved || saved.length === 0) {
    listEl.innerHTML = '<p class="empty-state">Chưa có bài viết đã lưu</p>';
    return;
  }

  listEl.innerHTML = saved.map(item => {
    const date = new Date(item.saved_at).toLocaleDateString('vi-VN');
    const typeIcon = item.article_type === 'blog' ? '📝' : '📖';
    const clickAction = item.article_type === 'blog'
      ? `showBlogPost('${item.article_id}')`
      : `showMeatDetail('${item.article_id}')`;

    return '<div class="saved-item">' +
      '<div class="saved-item-header" style="cursor: pointer;" onclick="' + clickAction + '; closeProfileModal();">' +
      '<span class="saved-item-title">' + typeIcon + ' ' + item.article_title + '</span>' +
      '</div>' +
      '<div style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">' +
      '<span class="saved-item-date">Đã lưu: ' + date + '</span>' +
      '<button class="btn btn--sm btn--outline" onclick="event.stopPropagation(); removeSavedArticle(\'' + item.article_type + '\', \'' + item.article_id + '\')">Xóa</button>' +
      '</div>' +
      '</div>';
  }).join('');
}

async function removeSavedArticle(type, id) {
  if (!window.authSystem) return;
  await window.authSystem.unsaveArticle(type, id);
  await loadSavedArticles();
}

function updateUserIcon() {
  const iconBtn = document.getElementById('user-icon-btn');
  const icon = document.getElementById('user-icon');

  if (!window.authSystem || !iconBtn || !icon) return;

  if (window.authSystem.isAuthenticated()) {
    const profile = window.authSystem.getCurrentProfile();
    if (profile) {
      if (profile.role === 'admin') {
        icon.textContent = '⚙️';
        iconBtn.classList.add('admin');
        iconBtn.classList.remove('authenticated');
        iconBtn.title = (profile.display_name || profile.username) + ' (Admin)';
      } else {
        icon.textContent = '👤';
        iconBtn.classList.add('authenticated');
        iconBtn.classList.remove('admin');
        iconBtn.title = profile.display_name || profile.username;
      }
    }
  } else {
    icon.textContent = '👤';
    iconBtn.classList.remove('authenticated', 'admin');
    iconBtn.title = 'Đăng nhập';
  }
}

setTimeout(updateUserIcon, 1000);
