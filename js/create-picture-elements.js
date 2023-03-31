// импортируемые данные
import {createPictures} from './generate-picture.js';
import {generateCommentsQuantity} from './generate-comment.js';

// шаблон #picture в разметке
const pictureTemplate = document.querySelector('#picture').content;
// контейнер с фотографиями
const picturesList = document.querySelector('.pictures');
// массив фотографий
const picturesItem = createPictures();
// фрагмент для временного хранения создаваемого контейнера с фотографиями
const picturesListFragment = document.createDocumentFragment();
// массив количества комментариев каждой фотографии
const arrayCommentsQuantity = [];
// код

// создание элементов фотографий из массива данных (расположение фото(url), количество лайков(likes), количество комментариев(comments)) и сохранение в fragment
const createPictureElements = function () {
    picturesItem.forEach(({url, likes,description}) => {
    const photoElement = pictureTemplate.cloneNode(true);
    photoElement.querySelector('.picture__img').src = url;
    photoElement.querySelector('.picture__likes').textContent = likes;
    photoElement.querySelector('.picture__comments').textContent = generateCommentsQuantity();
    photoElement.querySelector('.picture__img').alt = description;
    picturesListFragment.appendChild(photoElement);
    arrayCommentsQuantity.push(photoElement.querySelector('.picture__comments').textContent);
  });
};


// сохранение данных из fragment в контейнер фотографий
const createPicturesList = function () {
  picturesList.appendChild(picturesListFragment);
};

export { createPictureElements, createPicturesList,picturesList, arrayCommentsQuantity };
