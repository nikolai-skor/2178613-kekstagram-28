
// функция создает список комментариев из массива данных (расположение фото(url), количество лайков(likes), количество комментариев(comments))
const createCommentElement = function (commentsArray) {
  const commentsListFragment = document.createDocumentFragment();
  commentsArray.forEach(({avatar, name, message}) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');
    const imageElement = document.createElement('img');
    imageElement.classList.add('social__picture');
    imageElement.src = avatar;
    imageElement.alt = name;
    imageElement.width = 35;
    imageElement.height = 35;
    const commentTextElement = document.createElement('p');
    commentTextElement.classList.add('social__text');
    commentTextElement.textContent = message;
    commentElement.appendChild(imageElement);
    commentElement.appendChild(commentTextElement);
    commentsListFragment.appendChild(commentElement);
  });
  return commentsListFragment;
};

export {createCommentElement};
