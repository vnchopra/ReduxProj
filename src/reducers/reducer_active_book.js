//State here is not the application state but the state
//for which this reducer is responsible for.
//Redux does not like undefined values.
//Therfore you have state = null. This is ES6 syntax
export default function (state = null, action) {
  switch (action.type)   {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  //Need a base case
  return state;
}
