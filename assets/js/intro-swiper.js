'use strict';

(function () {
  var slider = document.querySelector('.intro');

  if (!slider) {
    return;
  }

  var introSwiper = new window.Swiper('.intro', {
    init: false,
    speed: 1000,
    spaceBetween: 0,
    loop: true,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.intro__pagination',
      clickable: true,
      type: 'bullets',
    },
    fadeEffect: {
      crossFade: true
    }

  });

  introSwiper.init();
})();