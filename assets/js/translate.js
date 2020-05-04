'use strict';

(function () {
  let translateBlock = Array.from(document.querySelectorAll('.translate__content'));
  let translateToggle = Array.from(document.querySelectorAll('.translate__button'));

  var toggleTranslateBlock = function (index) {
    translateToggle[index].classList.toggle('translate__button--open');
    translateBlock[index].classList.toggle('hidden');
  }

  translateToggle.forEach(function (toggle) {
    toggle.addEventListener('click', function () {
      toggleTranslateBlock(translateToggle.indexOf(toggle));
    });

    toggle.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 13) {
        toggleTranslateBlock(translateToggle.indexOf(toggle));
      }
    });
  });
})();