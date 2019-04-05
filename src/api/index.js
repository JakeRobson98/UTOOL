import axios from 'axios';
import { API_ENDPOINT } from './config';



export const registerUser = (email, pass) => {
  console.log(email + pass)
  return axios.post(`${API_ENDPOINT}/register`, {
    email: email,
    password: pass 
  })
}

// export const registerUser = (email, pass) => {
//   return axios.post(`${API_ENDPOINT}/register/email=${email}&&password=${pass}`);
// }
export const loginUser = (user) => {
  return axios.post(`${API_ENDPOINT}/login/${user}/`);
 }