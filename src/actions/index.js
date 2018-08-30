//this is an action creator
export function selectBook(book) {
  //selectBook is an ActionCreator. It returns an action.
  //And action is an object with a type property
  console.log('A book has been selected:', book.title);
  return {
    //An Action consists of a type and a payload.
    //Type describes the purpose of the action and is custom to what you think of it.
    //Payload clarifies the condition to be triggered.
    type: 'BOOK_SELECTED',
    payload: book
  };
}
