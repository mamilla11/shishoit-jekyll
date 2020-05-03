'use strict';

(function () {
  let container = document.querySelector('.previews');

  let previews = [];

  var create = function () {
    window.gallery_data.forEach(function (picture) {
      let preview = document.querySelector('#preview').content.querySelector('.preview').cloneNode(true);
      let image = preview.querySelector('img');
      let name = preview.querySelector('p');
      image.src = '../assets/' + picture.url;
      name.textContent = picture.title;
      previews.push(preview);
    });
  };

  var show = function () {
    var fragment = document.createDocumentFragment();

    clear();

    previews.forEach(function (preview) {
      fragment.appendChild(preview);
    });

    container.appendChild(fragment);
  };

  var clear = function () {
    var elements = container.querySelectorAll('.preview');

    elements.forEach(function (element) {
      container.removeChild(element);
    });
  };

  create();
  show();
  
}) ();