import * as types from './types';
  
import { getUserData } from '../../../api'

export const fetchUserDataSuccess = (user) => {
  return {
    type: types.FETCH_USER_DATA_SUCCESS,
    payload: user
  };
}

export const fetchUserDataFailure = () => {
  return {
    type: types.FETCH_USER_DATA_FAILURE
  };
}

export const fetchUserData = () => {
  return {
    type: types.FETCH_USER_DATA
  };
}


export const getUser = (jwt) => {
  console.log('Fetching user items from database');
  return dispatch => {
    dispatch(fetchUserData());
    return getUserData(jwt)
      .then(res => {
        dispatch(fetchUserDataSuccess(jwt))
        console.log(res);
      }).catch(err => {
        dispatch(fetchUserDataFailure());
        console.log(err);
      })
  }
}

