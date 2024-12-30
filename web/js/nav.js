document.addEventListener("DOMContentLoaded", function() {
  const toggleNav = document.getElementById('toggleNav');
  const abc = document.querySelector('.abc'); 
  const hiddenContent = document.getElementsByClassName('hidden')[0]; 
  let isVisible = false;

  // Xóa lớp 'abc' ban đầu nếu tồn tại
  if (abc) {
    abc.classList.remove('abc'); 
  }

  toggleNav.addEventListener('click', function() {
    if (hiddenContent) {
      if (isVisible) {
        hiddenContent.classList.add('hidden');
        toggleNav.textContent = 'Mở Menu';
        abc.classList.remove('abc'); 
      } else {
        hiddenContent.classList.remove('hidden');
        toggleNav.textContent = 'Đóng Menu';
        abc.classList.add('abc'); 
      }
      isVisible = !isVisible;
    }
  });
});

const toggleButtons = document.querySelectorAll('.toggle');

toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tinyMenu = button.nextElementSibling; // Lấy phần tử tiếp theo (tinyMenu)
    tinyMenu.classList.toggle('active'); // Thêm/xóa class 'active' để toggle
  });
});