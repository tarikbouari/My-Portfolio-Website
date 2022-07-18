let navLink = document.querySelector(".nav-link");
let navbar = document.querySelector("#nav-bar");
let mainPage = document.querySelector("main");
let footerSection = document.querySelector("footer");
let logo = document.querySelector(".logo");
let menuIcon = document.querySelector(".menu-icon");
let logoBar = document.querySelector(".logo-bar");
let closeMenu = document.querySelector(".close");
let navbox = document.querySelector(".right");
let navItem = document.querySelectorAll(".nav-item");

menuIcon.addEventListener("click", () => {
  navbar.style.position = "fixed";
  navbar.style.height = "100vh";
  navbar.style.zIndex = "5";
  navbar.style.background = "#6070FF";
  navLink.style.display = "flex";
  navLink.style.top = 0;
  navLink.style.flexDirection = "column";
  navLink.style.justifyContent = "flex-start";
  navLink.style.alignItems = "space-around";
  logo.style.display = "none";
  menuIcon.style.display = "none";
  logoBar.style.display = "block";
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeAll();
  location.reload();
});

navItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    closeAll();
    location.reload();
  });
});

function closeAll() {
  navbar.style.height = "80px";
  navbar.style.transition = "3ms all ease";
  navbar.style.background = "#fff";
  menuIcon.style.display = "block";
  navLink.style.display = "none";
  closeMenu.style.display = "none";
  logo.style.display = "block";
  logoBar.style.display = "flex";
}

