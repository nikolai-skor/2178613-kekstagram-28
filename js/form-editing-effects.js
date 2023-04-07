import {imageUploadPreview} from './form-load-editing.js';
// элемент фотография предпросмотра
const previewPicture = imageUploadPreview.querySelector('img');

// список элементов для наложения эффектов
const effectsList = document.querySelector('.effects__list');
// слайдер для наложения эффектов
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

effectsLevelValue.value = 100;

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
  connect: 'lower',
});


// функция добавляет класс выбранного эффекта в превью
function addClassToPreview(evt) {
  let newClass = '';
  for (let i = 0; i < pictureEffects.length; i++) {
    if (pictureEffects[i].value === evt.target.value) {
      newClass = `effects__preview--${evt.target.value}`;
      previewPicture.classList.add(newClass);
    } else {
      previewPicture.classList.remove(`effects__preview--${pictureEffects[i].value}`);
    }
  }
}
// функция добавляет класс выбранного эффекта в превью при изменении эффекта

effectsList.addEventListener('change', (evt) => {
  addClassToPreview(evt);
  if (evt.target.value === 'none') {
    // sliderContainer.display = 'none';
    // sliderElement.classList.add('hidden');
    console.log('none');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,
      start: 100,
    });
  }
  if (evt.target.value === 'chrome') {
    sliderElement.noUiSlider.on('update', () => {
      previewPicture.style.filter = `grayscale(${sliderElement.noUiSlider.get()})`;
    });

    sliderContainer.display = 'block';


    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,

    });
    sliderElement.noUiSlider.set(1);

  }
  if (evt.target.value === 'sepia') {
    sliderElement.noUiSlider.on('update', () => {
      previewPicture.style.filter = `sepia(${effectsLevelValue.value})`;
    });
    sliderContainer.display = 'block';

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1,
      },
      step: 0.1,

    });
    sliderElement.noUiSlider.set(1);
  }
  if (evt.target.value === 'marvin') {
    sliderElement.noUiSlider.on('update', () => {
      previewPicture.style.filter = `invert(${effectsLevelValue.value}%)`;
    });

    sliderContainer.display = 'block';

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100,
      },
      step: 1,

    });
    sliderElement.noUiSlider.set(100);
  }
  if (evt.target.value === 'phobos') {
    sliderElement.noUiSlider.on('update', () => {
      previewPicture.style.filter = `blur(${effectsLevelValue.value}px)`;
    });

    sliderContainer.display = 'block';

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3,
      },
      step: 0.1,

    });
    sliderElement.noUiSlider.set(3);
  }
  if (evt.target.value === 'heat') {
    sliderElement.noUiSlider.on('update', () => {
      previewPicture.style.filter = `brightness(${effectsLevelValue.value})`;
    });
    sliderContainer.display = 'block';

    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3,
      },
      step: 0.1,

    });
    sliderElement.noUiSlider.set(3);
  }


});


export {sliderContainer, sliderElement, addClassToPreview};



