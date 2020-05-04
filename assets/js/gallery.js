'use strict';

(function () {
  let container = document.querySelector('.previews');
  let picture = document.querySelector('.picture');
  let pictureImg = picture.querySelector('.picture__img img');
  let pictureClose = picture.querySelector('.picture__button--close');
  let pictureNext = picture.querySelector('.picture__button--next');
  let picturePrev = picture.querySelector('.picture__button--prev');
  let overlay = document.querySelector('.overlay');

  let previews = [];
  let pictureIndex = -1;

  var createPreviews = function () {
    window.gallery_data.forEach(function (picture) {
      let preview = document.querySelector('#preview').content.querySelector('.preview').cloneNode(true);
      let image = preview.querySelector('img');
      let name = preview.querySelector('p');
      image.src = '../assets/' + picture.url;
      name.textContent = picture.title;
      previews.push(preview);
    });
  };

  var showPreviews = function () {
    var fragment = document.createDocumentFragment();

    clearPreviews();

    previews.forEach(function (preview) {
      fragment.appendChild(preview);
      preview.addEventListener('click', function () {
        showPicture(previews.indexOf(preview));
      });
    });

    container.appendChild(fragment);
  };

  var clearPreviews = function () {
    var elements = container.querySelectorAll('.preview');

    elements.forEach(function (element) {
      container.removeChild(element);
    });
  };

  var showNextPicture = function () {
    if (++pictureIndex >= window.gallery_data.length) {
      pictureIndex = 0;
    }

    showPicture(pictureIndex);
  };

  var showPrevPicture = function () {
    if (--pictureIndex < 0) {
      pictureIndex = window.gallery_data.length - 1;
    }

    showPicture(pictureIndex);
  };

  var showPicture = function (index) {
    picture.focus();
    pictureImg.src = '../assets/' + window.gallery_data[index].url;
    pictureIndex = index;

    picture.classList.remove('hidden');
    picture.classList.add('modal-open');
  }

  var hidePicture = function () {
    picture.classList.add('hidden');
    picture.classList.remove('modal-open');
    pictureIndex = -1;
  }

  overlay.addEventListener('click', function() {
    hidePicture();
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      hidePicture();
    }
  });

  pictureClose.addEventListener('click', function () {
    hidePicture();
  });

  pictureClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
      hidePicture();
    }
  });

  pictureImg.addEventListener('click', function (evt) {
    evt.stopPropagation();
    showNextPicture();
  });

  pictureNext.addEventListener('click', function (evt) {
    evt.stopPropagation();
    showNextPicture();
  });

  picturePrev.addEventListener('click', function (evt) {
    evt.stopPropagation();
    showPrevPicture();
  });

  createPreviews();
  showPreviews();
  
}) ();