

import {imageUploadPreview} from './form-editing.js';


const slider = document.querySelector('.effect-level__slider');
// контейнер слайдера эффектов
const sliderElement = document.querySelector('.img-upload__effect-level');
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

// const sliderElement = document.querySelector('.effect-level__slider');



export {slider,sliderElement};


// console.log(pictureEffects[0]);
