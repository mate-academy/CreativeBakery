'use strict';

const achievements = document.querySelector('.achievements');
const left = document.querySelector('.about__button--left');
const right = document.querySelector('.about__button--right');

let position = 0;

function step(shift) {
  const count = achievements.children.length;

  position += shift;

  right.disabled = position >= count - 1;
  left.disabled = position <= 0;

  position = (position + count) % count;

  achievements.style.transform = `translateX(${-position * 100}%)`;
}

right.addEventListener('click', function() {
  step(1);
});

left.addEventListener('click', function() {
  step(-1);
});
