import {imageUploadPreview} from './form-editing.js';

// значение кнопки изменения размера загружаемой фотографии
const scaleControlValue = document.querySelector('.scale__control--value');


// функция уменьшения размера фотографии
const onClickControlSmaller = function () {
  if (scaleControlValue.value !== '25%') {
    const newString = Number(scaleControlValue.value.slice(0, -1)) - 25;
    imageUploadPreview.style.transform = `scale(${newString / 100})`;
    scaleControlValue.value = `${newString}%`;
  }
};
// функция увеличения размера фотографии
const onClickControlBigger = function () {
  if (scaleControlValue.value !== '100%') {
    const newString = Number(scaleControlValue.value.slice(0, -1)) + 25;
    imageUploadPreview.style.transform = `scale(${newString / 100})`;
    scaleControlValue.value = `${newString}%`;
  }
};


export {onClickControlSmaller, onClickControlBigger};
