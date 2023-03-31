import {picturesList} from './create-picture-elements.js';
import {isEscapeKey} from './utils.js';
import {createCommentElement} from './create-comment-elements.js';
import {createComment} from './generate-comment.js';

const body = document.querySelector('body');
// блок просмотра фотографий в полном размере
const fullSizePicture = document.querySelector('.big-picture');
// кнопка закрытия просмотра фотографии в полном размере
const bigPictureCansel = fullSizePicture.querySelector('.big-picture__cancel');
// фотография в полном размере
const fullSizePictureImg = fullSizePicture.querySelector('.big-picture__img img');
// количество лайков фотографии в полном размере
const likesCountFullSizePicture = fullSizePicture.querySelector('.likes-count');
// количество комментариев фотографии в полном размере
const commentsCountFullSizePicture = fullSizePicture.querySelector('.comments-count');
// описание фотографии в полном размере
const descriptionFullSizePicture = fullSizePicture.querySelector('.social__caption');
// блок счетчика комментариев фотографии в полном размере
const commentsCounterFullSizePicture = fullSizePicture.querySelector('.social__comment-count');
// блок загрузки новых комментариев фотографии в полном размере
const commentsLoaderFullSizePicture = fullSizePicture.querySelector('.comments-loader');
// список комментариев

// функция открытия полного размера фотографии
const openFullSizePicture = function () {
  fullSizePicture.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCansel.addEventListener('click', closeFullSizePicture);
};
// функция закрытия полного размера фотографии
const closeFullSizePicture = function () {
  fullSizePicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureCansel.removeEventListener('click', closeFullSizePicture);
};
// функция нажатия клавиши Escape для закрытия полного размера фотографии
const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizePicture();
  }
};

const userOpenFullSizePicture = function () {
  let socialComments = document.querySelector('.social__comments');
  picturesList.addEventListener('click', function (evt) {
    if (evt.target.closest('.picture__img')) {
      openFullSizePicture();
      fullSizePictureImg.src = evt.target.src;
      likesCountFullSizePicture.textContent = evt.target.closest('.picture').querySelector('.picture__likes').textContent;
      commentsCountFullSizePicture.textContent = evt.target.closest('.picture').querySelector('.picture__comments').textContent;
      descriptionFullSizePicture.textContent = evt.target.alt;
      commentsCounterFullSizePicture.classList.add('hidden');
      commentsLoaderFullSizePicture.classList.add('hidden');
      body.classList.add('modal-open');

      const createComments =  Array.from({length: evt.target.closest('.picture').querySelector('.picture__comments').textContent}, createComment);

     const newComments = createCommentElement(createComments);
     socialComments.innerHTML = '';
socialComments.appendChild(newComments);


    }
  });
}

export {userOpenFullSizePicture, fullSizePicture};
