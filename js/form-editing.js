import {isEscapeKey} from './utils.js';

const formEditing = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadFile = document.querySelector('#upload-file');
const uploadCancel = document.querySelector('#upload-cancel');
// кнопки изменения размера загружаемой фотографии
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
// значение кнопки изменения размера загружаемой фотографии
const scaleControlValue = document.querySelector('.scale__control--value');
// предпросмотр фотографии в режиме загрузки
const imageUploadPreview = document.querySelector('.img-upload__preview');

// открывает просмотр фотографии в режиме загрузки
const userOpenUploadFile = function () {

  uploadFile.addEventListener('change', () => {

  openFormEditing();
  scaleControlSmaller.addEventListener('click', onClickControlSmaller);
  scaleControlBigger.addEventListener('click', onClickControlBigger);
});
}

// функция уменьшения размера фотографии
const onClickControlSmaller = function () {
    console.log(scaleControlValue.value);
  if (scaleControlValue.value !== '25%') {
    const newString = Number(scaleControlValue.value.slice(0, -1)) - 25;
    imageUploadPreview.style.transform = `scale(${newString / 100})`;
    scaleControlValue.value = `${newString}%`;
    console.log(newString);
    console.log(scaleControlValue.value);
    console.log(imageUploadPreview.style.transform);
  }
};

const onClickControlBigger = function () {
    console.log(scaleControlValue.value);
  if (scaleControlValue.value !== '100%') {
    const newString = Number(scaleControlValue.value.slice(0, -1)) + 25;
    imageUploadPreview.style.transform = `scale(${newString / 100})`;
    scaleControlValue.value = `${newString}%`;
    console.log(newString);
    console.log(scaleControlValue.value);
    console.log(imageUploadPreview.style.transform);
  }
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

const onDocumentKeydown = function (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFormEditing();
  }
};

export {userOpenUploadFile};
