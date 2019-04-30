import * as types from './types';
  
import { postItemApi, getItems2 } from '../../../../api';

export const fetchUserItemsSuccess = (items) => {
  return {
    type: types.FETCH_USER_ITEMS_SUCCESS,
    payload: items
  };
}

export const fetchUserItemsFailure = () => {
  return {
    type: types.FETCH_USER_ITEMS_FAILURE
  };
}

export const fetchUserItems = () => {
  return {
    type: types.FETCH_USER_ITEMS
  };
}

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

export const getUseritems = (ownerId) => {
  console.log(ownerId)
  console.log('Fetching user items from database');
  return dispatch => {
    dispatch(fetchUserItems());
    return getItems2(ownerId)
      .then(res => {
        dispatch(fetchUserItemsSuccess(res))
        // console.log(res);
      }).catch(err => {
        dispatch(fetchUserItemsFailure());
        console.log(err);
      })
  }
}

