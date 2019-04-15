import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
  } from './types';
  
import { postItemApi } from '../../../../api';
  
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

