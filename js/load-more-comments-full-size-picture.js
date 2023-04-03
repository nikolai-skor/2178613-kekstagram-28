import {commentsCounterFullSizePicture} from './full-size-picture.js';

const loadMoreComments = function (items, list, comments) {
  for (let i = items.children.length - 1; i >= 0; i--) {

    list.append(items.children[i]);

    if (list.children.length % 5 === 0) {

      commentsCounterFullSizePicture.textContent = `${list.children.length} из ${comments}`;
      return list.children.length;
    }
  }
};

export {loadMoreComments};
