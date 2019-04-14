import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
  } from './types';
  
import { loginUser } from '../../../../api';
import LoginReducer from '../Reducers/LoginReducer';
  
  export const fetchUserSuccess = (payload) => {
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

  export const fetchUserFailure = (payload) => {
    return {
      type: FETCH_USER_FAILURE,
      payload
    };
  }
  
  
  export const getUser = (email) => {
  
    console.log('calling fetch method!');

    return dispatch => {
      dispatch(fetchUserRequest());
       return loginUser(email)
        .then(res => {
          console.log(res);
          dispatch(fetchUserSuccess(res.token));
        })
        .catch(err => {
          console.log(err);
          dispatch(fetchUserFailure(err));
        });
    }
    
  }

