import axios from 'axios';
import { API_ENDPOINT } from './config';

export const registerUser = (user) => {
  console.log(user)
  //some reason username gets passes instead of email 
  user.email = user.username
  var string = `${API_ENDPOINT}/main/register`
  console.log(string)
  return axios.post(`${API_ENDPOINT}/main/register`, user).then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

}

export const loginUser = (user) => {
  console.log(user)
  console.log(`${API_ENDPOINT}/main/login/${user}/`)
  return axios.post(`${API_ENDPOINT}/main/login`, user).then(function (response) {
    console.log(response)
    return response.data;
  })
  .catch(function (error) {
      console.log(error);
  });
}


export const postItemApi = (item) => {
  console.log(item)
  return axios.post(`${API_ENDPOINT}/main/items`, item).then(function (response) {
    console.log(response)
    return response.data;
  })
  .catch(function (error) {
      console.log(error);
  });
}

export const getItems = () => {
  console.log()
  return axios.get(`${API_ENDPOINT}/main/items`).then(function (response) {
    console.log(response)
    return response.data;
  })
  .catch(function (error) {
      console.log(error);
  });
}

export const getItems2 = (ownerId) => {
  return axios.get(`${API_ENDPOINT}/main/userItems`, { params: {ownerId: 1}}).then(function(res) {
    console.log('Get Items 2 api indx');
    console.log(res);
    return res.data;
  }).catch(function(err){
    console.log(err);
  })
}

export const getUserData = (jwt) => {
  console.log(jwt)
  return axios.get(`${API_ENDPOINT}/secure/userInfo?secret_token=${jwt}`).then(function(res) {
    console.log(res.data)
    return res.data;

  }).catch(function(err){
    return res.data
  })
}