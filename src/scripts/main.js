'use strict';

const menuButton = document.querySelector('.icon--menu');
const closeButton = document.querySelector('.icon--close');
const nav = document.querySelector('.nav');

menuButton.addEventListener('click', () => {
  nav.classList.add('nav--active');
  menuButton.classList.add('hidden');
  closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  menuButton.classList.remove('hidden');
  closeButton.classList.add('hidden');
});
