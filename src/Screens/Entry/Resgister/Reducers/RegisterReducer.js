import { 
    POST_USER,
    POST_USER_SUCCESS,
    POST_USER_FAILURE,
   } from '../Actions/types';
   
   const INITIAL_STATE = {
    isPosting: false,
    user: {},
   }; 
   
   export default (state = INITIAL_STATE, action) => {
   
    switch(action.type) {
     case POST_USER: 
      return { 
       ...state, 
       isposting: true
      };
   
     case POST_USER_SUCCESS:
      return {
       ...state, 
       user: action.payload,
       isposting: false
      };
   
     case POST_USER_FAILURE:
      return { ...state, comments: [], isPosting: false};
      
     default:
     return state;
    }
   };