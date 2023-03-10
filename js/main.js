const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
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
const NAMES = [
  'Татьяна',
  'Александр',
  'Анатолий',
  'Николай',
  'Владимир',
  'Екатерина',
  'Дмитрий',
  'Сергей',
  'Игорь',
  'Ирина',
  'Марина',
  'Елизавета',
];
// количество генерируемых фотографий в заданном промежутке
const minPhotoQuantity = 1;
const maxPhotoQuantity = 25;
const photosQuantity = maxPhotoQuantity - minPhotoQuantity + 1;
// количество аватарок
const avatarQuantity = 6;
//максимальное количество предложений в комментариях
const messageMaxQuantity = 3;
// максимальное значение id в комментариях
const messageIdMaxValue = 200;

// генератор случайных чисел в заданном промежутке
function getRandomInteger(min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}

// генератор уникальных чисел в заданном промежутке
function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

// генератор уникальных id в заданном промежутке
const generatePhotoId = createRandomIdFromRangeGenerator(
  minPhotoQuantity,
  maxPhotoQuantity
);

// генератор уникальных url в заданном промежутке
const generatePhotoUrl = createRandomIdFromRangeGenerator(
  minPhotoQuantity,
  maxPhotoQuantity
);

// генератор объекта фотографий
const createPhoto = () => {
  const getPhotoUrl = generatePhotoUrl();
  return {
    id: generatePhotoId(),
    url: `photos/${getPhotoUrl}.jpg`,
    description: PHOTO_DESCRIPTION[getPhotoUrl - 1],
    likes: getRandomInteger(15, 200),
  };
};

// генератор массива объектов фотографий в заданном промежутке
// eslint-disable-next-line no-unused-vars
const photos = Array.from({ length: photosQuantity }, createPhoto);

// генератор id комментария
const generateCommentsId = createRandomIdFromRangeGenerator(
  1,
  messageIdMaxValue
);

// генератор сообщения (комментария)
const generateCommentsMessage = () => {
  // eslint-disable-next-line prefer-const
  let previousValues = [];
  // eslint-disable-next-line prefer-const
  let messages = getRandomInteger(1, messageMaxQuantity);
  let currentValue;
  for (let i = messages; i > 0; i--) {
    currentValue = COMMENTS[getRandomInteger(0, COMMENTS.length - 2)];
    if (previousValues.length <= COMMENTS.length) {
      while (previousValues.includes(currentValue)) {
        currentValue = COMMENTS[getRandomInteger(0, COMMENTS.length - 2)];
      }
      previousValues.push(currentValue);
    }
  }
  return previousValues.join(' ');
};

// генератор объекта комментария
const createComment = () => ({
  id: generateCommentsId(),
  avatar: `img/avatar-${getRandomInteger(1, avatarQuantity)}.svg`,
  message: generateCommentsMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 2)],
});

// генератор массива объектов комментариев
// eslint-disable-next-line no-unused-vars
const comments = Array.from({ length: photosQuantity }, createComment);
