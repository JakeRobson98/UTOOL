import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
  } from './types';
  
import { postItemApi, getItems2 } from '../../../../api';
  


export const postItem = (item) => {
    console.log('calling fetch method!');
    return dispatch => {
       return postItemApi(item)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
}

export const getUseritems = (userId, userToken) => {
  console.log('Fetching user items from database');
  return dispatch => {
    return getItems2(ownerId)
      .then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
  }
}

