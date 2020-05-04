'use strict';

(function () {
  var slider = document.querySelector('.post-swiper');

  if (!slider) {
    return;
  }

  var postSwiper = new window.Swiper('.post-swiper', {
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

  postSwiper.init();
}) ();