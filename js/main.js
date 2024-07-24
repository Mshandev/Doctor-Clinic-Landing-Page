// Header scroll

let nav = document.querySelector(".navbar");
window.onscroll = function() {
  if (document.documentElement.scrollTop > 100) {
    nav.classList.add("header-scrolled");
  } else {
    nav.classList.remove("header-scrolled");
  }
};

// Navbar hide

let navLinks = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navLinks.forEach(function(link) {
  link.addEventListener("click", function() {
    navCollapse.classList.remove("show");
  });
});