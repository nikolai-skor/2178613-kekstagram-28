// импортируемые данные
import {createPictures} from './generate-photo.js';
import {messagesQuantity} from './generate-comment.js';

// шаблон #picture в разметке
const pictureTemplate = document.querySelector('#picture').content;
// контейнер с фотографиями
const picturesList = document.querySelector('.pictures');
// массив фотографий
const picturesItem = createPictures();
// фрагмент для временного хранения создаваемого контейнера с фотографиями
const picturesListFragment = document.createDocumentFragment();

// код

// создание элементов фотографий из массива данных (расположение фото(url), количество лайков(likes), количество комментариев(comments)) и сохранение в fragment

const createPictureElements = function () {
  picturesItem.forEach(({url, likes}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent =
      messagesQuantity();
    picturesListFragment.appendChild(photoElement);
  });
};


// сохранение данных из fragment в контейнер фотографий
const createPicturesList = function () {
  picturesList.appendChild(picturesListFragment);
};

export { createPictureElements, createPicturesList };
