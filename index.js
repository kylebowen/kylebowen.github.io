/* global $ */
'use strict';

// DOM Variables
const hamburgerMenu = document.getElementById('hamburger-menu');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav-item');

// DOM Store
const STORE = {
  hamurgerMenuOpen: false
};

// Functions
const toggleMenu = () => {
  if (!STORE.hamurgerMenuOpen) {
    nav.classList.remove('hidden');
    hamburgerMenu.classList.add('close');
    STORE.hamurgerMenuOpen = true;
  } else {
    nav.classList.add('hidden');
    hamburgerMenu.classList.remove('close');
    STORE.hamurgerMenuOpen = false;
  }
};

const hideNav = () => {
  if (STORE.hamurgerMenuOpen) {
    nav.classList.add('hidden');
    hamburgerMenu.classList.remove('close');
    STORE.hamurgerMenuOpen = false;
  } else {
    nav.classList.remove('hidden');
    hamburgerMenu.classList.add('close');
    STORE.hamurgerMenuOpen = true;
  }
};

// Event Listeners
navItems.forEach(item => item.addEventListener('click', hideNav));
hamburgerMenu.addEventListener('click', toggleMenu);

//Smooth Scrolling Jquery Implementation
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();
  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top - 50
    },
    700,
    'linear'
  );
});
