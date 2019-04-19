import * as types from '../Actions/types';

const INITIAL_STATE = {
 isFetching: false,
 mylistings: [],
}; 

export default (state = INITIAL_STATE, action) => {

 switch(action.type) {
  case types.FETCH_USER_ITEMS: 
   return { 
    ...state, 
    isFetching: true
   };
   break;

  case types.FETCH_USER_ITEMS_SUCCESS:
  console.log('Fetch ITEM success');
  console.log(action.payload);
   return {
    ...state, 
    mylistings: [...state.mylistings, action.payload.items],
    isFetching: false
   };
   break;

  case types.FETCH_USER_ITEMS_FAILURE:
  console.log(action.payload);
   return { ...state, comments: [], isFetching: false};
   break;

  default:
  return state;
 }
};