import * as types from './types';
  
import { getUserData } from '../../../api'

export const fetchUserDataSuccess = (user) => {
  console.log(user)
  return {
    type: types.FETCH_USER_DATA_SUCCESS,
    user
  };
}

export const fetchUserDataFailure = (user) => {
  console.log(payload)

  return {
    type: types.FETCH_USER_DATA_FAILURE,
    user
  };
}

export const fetchUserData = () => {
  return {
    type: types.FETCH_USER_DATA
    
  };
}


export const getUser = (jwt) => {
  console.log('Fetching user items from database');
  console.log(jwt)
  return dispatch => {
    dispatch(fetchUserData());
    return getUserData(jwt)
      .then(res => {
        dispatch(fetchUserDataSuccess(res.user))
        console.log(res);
      }).catch(err => {
        dispatch(fetchUserDataFailure(err));
        console.log(err);
      })
  }
}

