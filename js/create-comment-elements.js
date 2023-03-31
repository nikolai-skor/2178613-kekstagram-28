import {createComment, createComments,} from './generate-comment.js';
import {picturesList} from './create-picture-elements.js';
// список комментариев
const commentsList = document.querySelector('.social__comments');
// массив данных комментариев
const commentsItem = createComments();
// фрагмент для временного хранения создаваемого контейнера комментариев
const commentsListFragment = document.createDocumentFragment();


// функция создает один комментарий
// const createCommentElement = function () {
//   commentsItem.forEach(({avatar, name, message}) => {
//     const commentElement = document.createElement('li');
//     commentElement.classList.add("social__comment");
//     const imageElement = document.createElement('img');
//     imageElement.classList.add("social__picture");
//     imageElement.src = avatar;
//     imageElement.alt = name;
//     imageElement.width = 35;
//     imageElement.height = 35;
//     const commentTextElement = document.createElement('p');
//     commentTextElement.classList.add("social__text");
//     commentTextElement.textContent = message;
//     commentElement.appendChild(imageElement);
//     commentElement.appendChild(commentTextElement);
//     commentsListFragment.appendChild(commentElement);
//     return commentsListFragment;
//
//   });
// }


const createCommentElement = function () {
  picturesList.forEach((photo) => {
    Array.from({length: photo.querySelectorAll('.picture__comments').textContent}, createComment).forEach(({
      avatar,
      name,
      message
    }) => {
      const commentElement = document.createElement('li');
      commentElement.classList.add("social__comment");
      const imageElement = document.createElement('img');
      imageElement.classList.add("social__picture");
      imageElement.src = avatar;
      imageElement.alt = name;
      imageElement.width = 35;
      imageElement.height = 35;
      const commentTextElement = document.createElement('p');
      commentTextElement.classList.add("social__text");
      commentTextElement.textContent = message;
      commentElement.appendChild(imageElement);
      commentElement.appendChild(commentTextElement);
      commentsListFragment.appendChild(commentElement);
      return commentsListFragment;

    });
  });
}
const createCommentList = function () {
  commentsList.appendChild(commentsListFragment);
};
export { createCommentElement,createCommentList };
