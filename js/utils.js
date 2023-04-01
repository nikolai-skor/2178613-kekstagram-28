// генератор случайных чисел в заданном промежутке
const getRandomInteger = function (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};
// генератор уникальных чисел в заданном промежутке
const createRandomIdFromRangeGenerator = function (min, max) {
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
};

// const isEnterKey = (evt) => evt.key === 'Enter';
// проверка события клавиши Escape
const isEscapeKey = (evt) => evt.key === 'Escape';

export {createRandomIdFromRangeGenerator, getRandomInteger, isEscapeKey};
