let mobileMenu = document.querySelector('.mobile-menu');

let navLink = document.querySelector('.nav-link');
let navbar = document.querySelector('#nav-bar');
let cat = document.querySelector('main');
let footerSection = document.querySelector('footer');
let logo = document.querySelector('.logo');
let burger = document.getElementById('hamburger');
let Container = document.querySelector('.logo-bar')

 burger.addEventListener('click', () => {
    navbar.style.position='fixed';
    navbar.style.height='100vh';
    navbar.style.zIndex='5';
    navLink.style.display='flex';
    navLink.style.top=0;
    navLink.style.flexDirection='column';
    navLink.style.justifyContent='flex-start';
    navLink.style.alignItems='space-around';
    logo.style.display='none';
    cat.style.display='none';
    burger.style.display='none';
    Container.style.display='block';
    footerSection.style.display='none';


    

})