import {
    POST_USER,
    POST_USER_SUCCESS,
    POST_USER_FAILURE,
  } from './types';
import { registerUser } from '../../../../api';
import registerReducer from '../Reducers/RegisterReducer';
  
  export const POSTUserSuccess = (payload) => {
    console.log('POST ITEMS SUCCESS!!');
  return {
    type: POST_USER_SUCCESS,
    payload
  };
  }


  export const POSTUserRequest = () => {
    return {
      type: POST_USER
    };
  }

  export const POSTUserFailure = () => {
    return {
      type: POST_USER_FAILURE
    };
  }
  
  
  export const register = (email,pass) => {
  
    console.log('calling POST method!');
    // return dispatch => {
    //   dispatch(POSTItemRequest());
    //   return LoginReducer({}
    //       console.log(items);
    //       dispatch(POSTItemsSuccess(items.data));
    //     }).catch((err) => {
    //       console.log(err);
    //       dispatch(POSTItemsFailure()) 
    //     });
    // }
    // registerUser(email,pass);

    return dispatch => {
      return registerUser(email, pass)
        .then(res => { console.log('registered')})
        .catch(err => console.log(err));
    }

    // return dispatch => {
    //   registerUser(email,pass);
    //   dispatch(registerUser(email,pass));
    //   return registerReducer()
    //       console.log(user);
    //       dispatch(POSTUserSuccess(user));
    //   }
  }
  
