// импорт переменных
import {picturesList} from './create-photo-elements.js';
import {isEscapeKey, isEnterKey} from './utils.js';


// окно полноразмерной фотографии
const bigPicture = document.querySelector('.big-picture');
// блок полноразмерной фотографии
const bigPictureImageBlock = document.querySelector('.big-picture__img');

const bigPictureImage = bigPictureImageBlock.querySelector('img');
// кнопка закрытия полноразмерной фотографии
const bigPictureCancel = document.querySelector('.big-picture__cancel');


// ссылка на миниатюру фотографии
const picture = picturesList.querySelector('.picture');
// картинка-миниатюра фотографии
const pictureImage = picture.querySelector('.picture__img');


// количество лайков полноразмерной фотографии
const likesCount = document.querySelector('.likes-count');
// // количество комментариев полноразмерной фотографии
// const commentsCount = document.querySelector('.comments-count');
// // список комментариев полноразмерной фотографии
// const commentsList = document.querySelector('.social__comments');
// // комментарии полноразмерной фотографии
// const commentItem = document.querySelector('.social__comment');
// // описание полноразмерной фотографии
// const description = document.querySelector('.social__caption');
// // блок счетчика комментариев
// const socialCommentCount = document.querySelector('.social__comment-count');
// // блок загрузки новых комментариев
// const commentLoader = document.querySelector('.comments-loader');
// // тег body
// const body = document.querySelector('body');


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

// функция открытия полноразмерной фотографии
const openBigPicture = (pictureItem) => {
  // открытие полноразмерной фотографии
  bigPicture.classList.remove('hidden');
  // обработчики закрытия полноразмерной фотографии
  document.addEventListener('keydown', onDocumentKeydown);
  bigPictureCancel.addEventListener('click', closeBigPicture);
  // изменяет изображение в полноразмерной фотографии
  bigPictureImage.src = pictureItem.src;
// добавляет количество лайков фотографии
  likesCount.textContent = pictureItem.likes;

};

// функция закрытия полноразмерной фотографии
const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  bigPictureCancel.removeEventListener('click', closeBigPicture);
};

picturesList.addEventListener('click', (evt) => {

    openBigPicture(evt.target);

});








