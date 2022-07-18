let mobileMenu = document.querySelector('.mobile-menu');

let navLink = document.querySelector('.nav-link');
let meow = document.querySelector('#nav-bar');
let cat = document.querySelector('main');
let logo = document.querySelector('.logo');
let burger = document.getElementById('hamburger');
let Container = document.querySelector('.logo-bar')

 burger.addEventListener('click', () => {
    meow.style.position='absolute';
    meow.style.height='100vh';
    meow.style.zIndex='5';
    navLink.style.display='flex';
    navLink.style.flexDirection='column';
    navLink.style.justifyContent='flex-start';
    navLink.style.alignItems='space-around';
    logo.style.display='none';
    cat.style.display='none';
    burger.style.display='none';
    Container.style.justifyContent='flex-start';

    

})