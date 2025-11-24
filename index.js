let homenu= document.querySelector('#header ul li a[href="#home"]');
homesection= document.getElementById('home');

let aboutmenu = document.querySelector('#header ul li a[href="#About"]');
aboutsection= document.getElementById('About');

 let menu = document.querySelector('#header ul li a[href="#menu"]');
menusection= document.getElementById('menu');
function homeScroll(event) {
  event.preventDefault();
  homesection.scrollIntoView({ behavior: "smooth" });
}
function aboutScroll(event) {
  event.preventDefault();
  aboutsection.scrollIntoView({ behavior: "smooth" });
}
function menuScroll(event) {
  event.preventDefault();
  menusection.scrollIntoView({ behavior: "smooth" });
}

homenu.onclick = homeScroll;
aboutmenu.onclick = aboutScroll;
menu.onclick = menuScroll;

// Custom Cursor
const cursorIn = document.querySelector('.cursor-in');
document.addEventListener('mousemove', (e) => {
  
  cursorIn.style.left = e.clientX + 'px';
  cursorIn.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
  cursorIn.classList.add('click');
});
setTimeout(() => {
  cursorIn.classList.remove('click');
}, 500);
// Preloader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 3000); // 5.2 detik sesuai durasi animasi
});