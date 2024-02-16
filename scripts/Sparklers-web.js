// Toggle the menu
document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  const bars = document.querySelectorAll('.bar');

  menuIcon.addEventListener('click', function () {
    menu.classList.toggle('active');
    bars.forEach(bar => bar.classList.toggle('active'));
  });
});


