import { createRandomIdFromRangeGenerator, getRandomInteger } from './utils.js';
import { picturesQuantity } from './generate-picture.js';

// количество аватарок
const avatarQuantity = 6;
//максимальное количество предложений в комментариях
const messageMaxQuantity = 3;
// максимальное значение id в комментариях
const messageIdMaxValue = 200;
// максимальное количество комментариев
const commentsMaxQuantity = 20;
// массив комментариев
const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
// массив пользователей
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

const generateCommentsQuantity = function () {
  const commentsQuantity = getRandomInteger(1, commentsMaxQuantity);
  return commentsQuantity;
}

// генератор id комментария
const generateCommentsId = createRandomIdFromRangeGenerator(
  1,
  messageIdMaxValue
);

// генератор количества комментариев
const generateMessagesQuantity = function () {
  return getRandomInteger(1, messageMaxQuantity);
};
// генератор сообщения (комментария)
const generateCommentsMessage = () => {
  // eslint-disable-next-line prefer-const
  let previousValues = [];
  // eslint-disable-next-line prefer-const
  let currentValue;
  for (let i = generateMessagesQuantity(); i > 0; i--) {
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
const createComments = () =>
  Array.from({ length: picturesQuantity }, createComment);

export { createComments,generateCommentsQuantity,createComment };

