'use strict';

// #region requests and properties
export function querySelector(className) {
  return document.querySelector(`.${className}`);
};

export function querySelectorAll(clasessName) {
  return document.querySelectorAll(`.${clasessName}`);
};

export function breakpoint(breakpoint) {
  return getComputedStyle(document.documentElement)
  .getPropertyPriority(breakpoint)
  .slice(0, -2);
};
// #endregion

// #region manipulation of class
export function classHtml(nameClass, event, newClass) {
  return querySelector(nameClass).classList[event](newClass);
}
// #endregion

// #region miving and position elements ????????????????????
  export function trackScreenSize(breakpoint, sec, elem) {
    if (window.innerWidth >= breakpoint(breakpoint)) {
      changeThePositionOfTheElement(sec, elem);
    }
  }

  export function changeThePositionOfTheElement(section, element) {
    return querySelector(section).appendChild(querySelector(element));
  };
// #endregion

// #region template for product setion
export function templateHtmlForProduct(name) {
  return  `<article class="products__card">
            <img
              class="products__img"
              src=${name.image}
              alt="Creative Bakery cakes"
            >
            <h3 class="products__subtitle">${name.title}</h3>
            <p class="products__text">${name.text}</p>
            <div class="products__wrapper">
            <a class="products__link" href=${name.link} target="_blank">Order</a>
            </div>
          </article>`;
};

export function templateHtmlForAboutUs(name) {
  return  `<div class="about-us__card">
            <h2 class="about-us__numbers">${name.numbers}</h2>
            <p class="about-us__text">${name.text}</p>
          </div>`;
}
// #endregion
