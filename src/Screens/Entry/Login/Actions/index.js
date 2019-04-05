import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
  } from './types';
  
import { loginUser } from '../../../../api/index';
import LoginReducer from '../Reducers/LoginReducer';
  
  export const fetchUserSuccess = (payload) => {
    console.log('FETCH ITEMS SUCCESS!!');
  return {
    type: FETCH_USER_SUCCESS,
    payload
  };
  }


  export const fetchUserRequest = () => {
    return {
      type: FETCH_USER
    };
  }

  export const fetchUserFailure = () => {
    return {
      type: FETCH_USER_FAILURE
    };
  }
  
  
  export const getUser = (email) => {
  
    console.log('calling fetch method!');
  
    // return dispatch => {
    //   dispatch(fetchItemRequest());
    //   return LoginReducer({}
    //       console.log(items);
    //       dispatch(fetchItemsSuccess(items.data));
    //     }).catch((err) => {
    //       console.log(err);
    //       dispatch(fetchItemsFailure()) 
    //     });
    // }
    console.log(loginUser(email))

    return dispatch => {
      dispatch(loginUser(email));
      console.log(loginUser(email))
      return LoginReducer()
          console.log(user);
          dispatch(fetchUserSuccess(user.email));
      }
  }

