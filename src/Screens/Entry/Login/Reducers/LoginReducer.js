import { 
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
   } from '../Actions/types';
   
   const INITIAL_STATE = {
    isFetching: false,
    user: {},
   }; 
   
   export default (state = INITIAL_STATE, action) => {
   
    switch(action.type) {
     case FETCH_USER: 
      return { 
       ...state, 
       isFetching: true
      };
   
     case FETCH_USER_SUCCESS:
      return {
       ...state, 
       user: action.payload,
       isFetching: false
      };
   
     case FETCH_USER_FAILURE:
      return { ...state, comments: [], isFetching: false};
      
     default:
     return state;
    }
   };