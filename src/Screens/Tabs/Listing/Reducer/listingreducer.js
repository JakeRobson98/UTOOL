import { 
 FETCH_ITEM,
 FETCH_ITEM_SUCCESS,
 FETCH_ITEM_FAILURE,
} from '../Actions/types';

const INITIAL_STATE = {
 isFetching: false,
 mylistings: [],
}; 

export default (state = INITIAL_STATE, action) => {

 switch(action.type) {
  case FETCH_ITEM: 
   return { 
    ...state, 
    isFetching: true
   };

  case FETCH_ITEM_SUCCESS:
  console.log('Fetch ITEM success');
  console.log(action.payload);
   return {
    ...state, 
    mylistings: [...state.mylistings, action.newItem],
    isFetching: false
   };
   break;

  case FETCH_ITEM_FAILURE:
  console.log(action.payload);
   return { ...state, comments: [], isFetching: false};
   break;

  default:
  return state;
 }
};