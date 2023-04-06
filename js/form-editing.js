import {isEscapeKey} from './utils.js';
import {onClickControlSmaller, onClickControlBigger} from './form-editing-size.js';


const formEditing = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
// кнопки изменения размера загружаемой фотографии
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');

// предпросмотр фотографии в режиме загрузки
const imageUploadPreview = document.querySelector('.img-upload__preview');

// открывает просмотр фотографии в режиме загрузки
const userOpenUploadFile = function () {
  uploadFile.addEventListener('change', () => {
    openFormEditing();
    scaleControlSmaller.addEventListener('click', onClickControlSmaller);
    scaleControlBigger.addEventListener('click', onClickControlBigger);
      });
};

// открывает просмотр фотографии в режиме редактирования
const openFormEditing = function () {
  formEditing.classList.remove('hidden');
  body.classList.add('.modal-open');
  uploadCancel.addEventListener('click', closeFormEditing);
  document.addEventListener('keydown', onDocumentKeydown);
};

// закрывает просмотр фотографии в режиме редактирования
const closeFormEditing = function () {
  formEditing.classList.add('hidden');
  body.classList.remove('.modal-open');
  uploadCancel.removeEventListener('click', closeFormEditing);
  document.removeEventListener('keydown', onDocumentKeydown);
};

// закрывает просмотр фотографии в режиме редактирования на клавиатуре
const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEditing();
  }
};

export {userOpenUploadFile, imageUploadPreview};
