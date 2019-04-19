import {
  FETCH_ITEM,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
} from './types';
import getItems from '../../../../api/index'
import LoginReducer from '../Reducers/LoginReducer';
import { fetchUserRequest } from '../../../Entry/Login/Actions';

export const fetchItemSuccess = (payload) => {
return {
  type: FETCH_ITEM_SUCCESS,
  payload
};
}


export const fetchItemRequest = () => {
  return {
    type: FETCH_ITEM
  };
}

export const fetchItemFailure = (payload) => {
  return {
    type: FETCH_ITEM_FAILURE,
    payload
  };
}


export const fetchItems = () => {
  console.log('calling fetch method!');
  return dispatch => {
    dispatch(fetchUserRequest());
     return getItems()
      .then(res => {
        console.log(res);
        dispatch(fetchItemSuccess(res.token));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchItemFailure(err));
      });
  }
}

