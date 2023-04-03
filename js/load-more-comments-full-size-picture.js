const loadMoreComments = function (items, list) {
  for (let i = items.children.length - 1; i >= 0; i--) {

    list.append(items.children[i]);

    if (list.children.length % 5 === 0) {

      return list.children.length;
    }
  }
};

// commentsLoaderFullSizePicture.addEventListener('click', () => {
//   loadMoreComments();
//
//
//
// });


export {loadMoreComments};
