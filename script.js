let navLink = document.querySelector(".nav-link");
let navbar = document.querySelector("#nav-bar");
let mainPage = document.querySelector("main");
let footerSection = document.querySelector("footer");
let logo = document.querySelector(".logo");
let menuIcon = document.getElementById("hamburger");
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

  // mainPage.style.display='none';
  menuIcon.style.display = "none";
  logoBar.style.display = "block";
  // footerSection.style.display='none';
  closeMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  closeAll();
});

navItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    closeAll();
  });
});

function closeAll() {
  navbar.style.height = "80px";
  navbar.style.transition = "3ms all ease";
  navbar.style.background = "#fff";
  menuIcon.style.display = "Block";
  navLink.style.display = "none";
  closeMenu.style.display = "none";
  logo.style.display = "block";
  logoBar.style.display = "flex";
}
