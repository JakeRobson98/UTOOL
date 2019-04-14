import { 
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
   } from '../Actions/types';
   
   const INITIAL_STATE = {
    isFetching: false,
    user: {
        token: null
    },
   }; 
   
   export default (state = INITIAL_STATE, action) => {
   
    switch(action.type) {
     case FETCH_USER: 
      return { 
       ...state, 
       isFetching: true
      };
   
     case FETCH_USER_SUCCESS:
     console.log('Fetch user success');
     console.log(action.payload);
      return {
       ...state, 
       user: {...state.user, token: action.payload},
       isFetching: false
      };
      break;
   
     case FETCH_USER_FAILURE:
     console.log(action.payload);
      return { ...state, comments: [], isFetching: false};
      break;

     default:
     return state;
    }
   };