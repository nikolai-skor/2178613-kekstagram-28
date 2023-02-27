/* eslint-disable prefer-const */
// Функция для проверки длины строки.


const isValidate = function (sentence, lengthOfSentence) {
  return sentence.length <= lengthOfSentence;
};

isValidate('Функция для проверки', 20);


// Функция для проверки, является ли строка палиндромом.


const isPalindrome = function (sentence) {
  let rightDirection = [];
  let leftDirection = [];
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      rightDirection.push(sentence[i]);
    }
  }
  rightDirection.join('');

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      leftDirection.unshift(sentence[i]);
    }
  }
  leftDirection.join('');

  return (rightDirection.toLowerCase === leftDirection.toLowerCase) ? 'true' : 'false';
};
isPalindrome('Лёша на полке клопа нашёл ');


// Функция, которая принимает строку, извлекает содержащиеся в ней цифры от 0 до 9 и возвращает их в виде целого положительного числа. Если в строке нет ни одной цифры, функция должна вернуть NaN:


const getNumber = function (stringOrNumber) {
  stringOrNumber = String(stringOrNumber);
  let numberOfString = [];
  for (let i = 0; i < stringOrNumber.length; i++) {
    if (parseInt(stringOrNumber[i], 10) <= 9) {
      numberOfString.push(Number(stringOrNumber[i]));
    }
  }
  return numberOfString.length === 0 ? NaN : Number(numberOfString.join(''));
};
getNumber('2023 год');

// Функция, которая принимает три параметра: исходную строку, минимальную длину и строку с добавочными символами — и
// возвращает исходную строку, дополненную указанными символами до заданной длины.


const createFileAddress = function (originString, minLength, extraString) {
  let newString = [];
  let partString = [];
  if (originString.length >= minLength) {
    return originString;
  } else {
    let t = 0;
    for (let i = 0; i < (minLength - originString.length); i++) {
      partString.push(extraString[t]);

      if (t === extraString.length - 1 && newString.join('').length + originString.length + partString.join('').length <= minLength) {
        newString.unshift(partString.join(''));
        partString.length = 0;
        t = 0;
      } else if (newString.join('').length + originString.length + partString.join('').length <= minLength) {
        t++;
      }
    }
  }
  newString.unshift(partString.join(''));
  return `${newString.join('')}${originString}`;
};

createFileAddress('q', 9, 'wew');
