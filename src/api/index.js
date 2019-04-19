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

export const getItems = (item) => {
  console.log(item)
  return axios.get(`${API_ENDPOINT}/main/items`, item).then(function (response) {
    console.log(response)
    return response.data;
  })
  .catch(function (error) {
      console.log(error);
  });
}