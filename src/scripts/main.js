'use strict';

const nav = document.querySelector('.nav');
const open = document.querySelector('.header__menu--open');
const close = document.querySelector('.header__menu--close');

open.addEventListener('click', () => {
  nav.classList.toggle('nav--active');
  document.body.classList.add('page__body--with-menu');
});

close.addEventListener('click', () => {
  nav.classList.remove('nav--active');
  document.body.classList.remove('page__body--with-menu');
});

document.querySelectorAll('.nav__link').forEach(n => {
  n.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    document.body.classList.remove('page__body--with-menu');
  });
});

document.querySelectorAll('.logo').forEach(n => {
  n.addEventListener('click', () => {
    nav.classList.remove('nav--active');
    document.body.classList.remove('page__body--with-menu');
  });
});
