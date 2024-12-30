document.addEventListener("DOMContentLoaded", function() {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const loginForm = document.querySelector('#loginForm');
    const loginButton = document.querySelector('.login-btn');
    const registerButton = document.querySelector('.register-btn');
    const logoutButton = document.getElementById('logoutBtn');
  
    // Kiểm tra xem người dùng đã đăng nhập chưa
    const user = JSON.parse(localStorage.getItem('user'));
  
    // Cập nhật giao diện dựa trên trạng thái đăng nhập
    if (user) {
      updateUiAfterLogin(user);
    } else {
      updateUiAfterLogout();
    }
  
    if (loginForm) {
      loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
  
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        const storedUser = JSON.parse(localStorage.getItem('user'));
  
        if (storedUser && storedUser.email === email && storedUser.password === password) {
          alert('Đăng nhập thành công!');
          updateUiAfterLogin(storedUser); 
          window.location.href = 'index.html';
        } else {
          alert('Email hoặc mật khẩu không chính xác.');
        }
      });
    }
  
    if (logoutButton) {
      logoutButton.addEventListener("click", () => {
        logout();
      });
    }
  
    function updateUiAfterLogin(user) {
      if (welcomeMessage) {
        const username = user.email.split('@')[0];
        welcomeMessage.textContent = `Xin chào, ${username}`;
      }
      if (loginButton) loginButton.style.display = 'none';
      if (registerButton) registerButton.style.display = 'none';
      if (logoutButton) logoutButton.style.display = 'inline-block';
    }
  
    function updateUiAfterLogout() {
      if (welcomeMessage) welcomeMessage.textContent = '';
      if (loginButton) loginButton.style.display = 'inline-block';
      if (registerButton) registerButton.style.display = 'inline-block';
      if (logoutButton) logoutButton.style.display = 'none';
    }
  });