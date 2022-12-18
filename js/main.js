const menuEmail = document.querySelector('.navbar-email');

const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');

const burguerMenu = document.querySelector('.menu');

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
}

burguerMenu.addEventListener('click', toggleMobileMenu); 
menuEmail.addEventListener('click', toggleDesktopMenu);