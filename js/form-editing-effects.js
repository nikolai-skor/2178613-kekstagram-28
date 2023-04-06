import {imageUploadPreview} from './form-editing.js';
// элемент фотография предпросмотра
const previewPicture = imageUploadPreview.querySelector('img');

// список элементов для наложения эффектов
const effectsList = document.querySelector('.effects__list');

const sliderElement = document.querySelector('.effect-level__slider');
// контейнер слайдера эффектов
const sliderContainer = document.querySelector('.img-upload__effect-level');
// уровень эффектов
const effectsLevelValue = document.querySelector('.effect-level__value');
// коллекция радиокнопок для наложения эффектов
const pictureEffects = document.querySelectorAll('.effects__radio');
// кнопки для наложения эффектов:
//effects__preview--none
// effects__preview--chrome
// effects__preview--sepia
// effects__preview--marvin
// effects__preview--phobos
// effects__preview--heat
// функция создает массив с превью эффектов
// const arrayPictureEffects = function () {
//   let arrayPictureEffects = [];
//   for (let i = 0; i < pictureEffects.length; i++) {
//     arrayPictureEffects.push(pictureEffects[i].value);
//   }
//   return arrayPictureEffects;
// };

// console.log(arrayPictureEffects());

// функция добавляет класс выбранного эффекта в превью
const addClassToPreview = function (evt) {
   let newClass = '';
  for (let i = 0; i < pictureEffects.length; i++) {
    if (pictureEffects[i].value === evt.target.value) {
      newClass = `effects__preview--${evt.target.value}`;
      previewPicture.classList.add(newClass);
    } else {
      previewPicture.classList.remove(`effects__preview--${pictureEffects[i].value}`);
    }
  }
};
// функция добавляет класс выбранного эффекта в превью при изменении эффекта

effectsList.addEventListener('change', addClassToPreview);

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: 0,
      max: 100,
    },
    start: 100,
    step: 1,
    connect: 'lower',
  });
};

// sliderElement.noUiSlider.on('update', (...rest) => {
//   effectsLevelValue.value = sliderElement.noUiSlider.get();
// });


createSlider();
export {sliderContainer, sliderElement, createSlider,addClassToPreview};


// console.log(pictureEffects[0]);
