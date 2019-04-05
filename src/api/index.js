import axios from 'axios';
import { API_ENDPOINT } from './config';

export const loginUser = (username) => {
 return axios.post(`${API_ENDPOINT}/login/users/${username}`);
}

export const registerUser = (email, pass) => {
 
}