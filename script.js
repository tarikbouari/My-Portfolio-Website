// const navLink = document.querySelector(".nav-link");
// const navbar = document.querySelector("#nav-bar");
// const logo = document.querySelector(".logo");
// const menuIcon = document.querySelector(".menu-icon");
// const logoBar = document.querySelector(".logo-bar");
// const closeMenu = document.querySelector(".close");
// const navItem = document.querySelectorAll(".nav-item");

// menuIcon.addEventListener("click", () => {
//   navbar.style.position = "fixed";
//   navbar.style.height = "100vh";
//   navbar.style.zIndex = "5";
//   navbar.style.background = "rgba(46,59,153,0.8)";
//   navLink.style.display = "flex";
//   navLink.style.top = 0;
//   navLink.style.flexDirection = "column";
//   navLink.style.justifyContent = "flex-start";
//   navLink.style.alignItems = "space-around";
//   logo.style.display = "none";
//   menuIcon.style.display = "none";
//   logoBar.style.display = "block";
//   closeMenu.style.display = "block";
// });

// function closeAll() {
//   navbar.style.height = "80px";
//   navbar.style.transition = "3ms all ease";
//   navbar.style.background = "#fff";
//   menuIcon.style.display = "block";
//   navLink.style.display = "none";
//   closeMenu.style.display = "none";
//   logo.style.display = "block";
//   logoBar.style.display = "flex";
// }

// closeMenu.addEventListener("click", () => {
//   closeAll();
//   window.location.reload();
// });

// navItem.forEach((item) => {
//   item.addEventListener("click", () => {
//     closeAll();
//     window.location.reload();
//   });
// });

const menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("hello");
  const container = document.createElement("div");
  container.classList.add("menu-mobile");

  const menuDiv = ` <div>
                      <ul class="nav-ul">
                          <li class="nav-item"> <a class="nav-a" href="#projects"> Portfolio </a> </li>
                          <li class="nav-item"><a  class="nav-a" href="#about">About</a> </li>
                          <li class="nav-item"><a class="nav-a" href="#contact">Contact</a> </li>
                      </ul>
                    <div>`;

  container.innerHTML += menuDiv;
  document.body.appendChild(container);
  console.log(menuDiv);
});
