import axios from 'axios';
import { API_ENDPOINT } from './config';



export const registerUser = (email, pass) => {
  console.log(email + pass)
  var string = `${API_ENDPOINT}/main/register`
  console.log(string)
  return axios.post(`${API_ENDPOINT}/main/register`, {
    email: email,
    password: pass
  }).then(function (response) {
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
    console.log(response);
  })
  .catch(function (error) {
      console.log(error);
  });
}