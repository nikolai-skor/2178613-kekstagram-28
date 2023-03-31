import { createRandomIdFromRangeGenerator, getRandomInteger } from './utils.js';
// количество генерируемых фотографий в заданном промежутке
const minPhotoQuantity = 1;
const maxPhotoQuantity = 25;
const picturesQuantity = maxPhotoQuantity - minPhotoQuantity + 1;
// описание фотографий
const PHOTO_DESCRIPTION = [
  'Самый крутой бассейн',
  'Оригинальный путеуказатель',
  'Дикий пляж',
  'От моря глаз не оторвать',
  'Грязевые ванны',
  'Улетная тачка',
  'Завтрак вегана',
  'Освежающий фреш',
  'Аэродром на пляже',
  'Моя новая обувница',
  'Путь от бунгало к пляжу',
  'Зацени мои новые колеса',
  'Тропическое ассорти на обед',
  'Мой кэт «роллер»',
  'Отжал сапоги у Баз Лайтера',
  'Мир большой, а в небе тесно',
  'Первый в мире хор металлистов',
  'Классика бессмертна',
  'Технологичные ночные навигаторы',
  'Круглосуточное солнце',
  'Угадайте, что это за блюдо',
  'Романтика повсюду',
  'Похоже, мы тут не главные',
  'Туса в отрыв!',
  'Так близко оказаться даже не мечтал',
];

// генератор уникальных id в заданном промежутке
const generatePictureId = createRandomIdFromRangeGenerator(
  minPhotoQuantity,
  maxPhotoQuantity
);

// генератор уникальных url в заданном промежутке
const generatePictureUrl = createRandomIdFromRangeGenerator(
  minPhotoQuantity,
  maxPhotoQuantity
);

// генератор объекта фотографий
const createPicture = () => {
  const getPhotoUrl = generatePictureUrl();
  return {
    id: generatePictureId(),
    url: `photos/${getPhotoUrl}.jpg`,
    description: PHOTO_DESCRIPTION[getPhotoUrl - 1],
    likes: getRandomInteger(15, 200),
  };
};

// генератор массива объектов фотографий в заданном промежутке
// eslint-disable-next-line no-unused-vars
const createPictures = () => Array.from({ length: picturesQuantity }, createPicture);

export { picturesQuantity,createPictures };

