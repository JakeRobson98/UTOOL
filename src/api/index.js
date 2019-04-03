import axios from 'axios';
import { API_ENDPOINT } from './config';

export const loginUser = () => {
 return axios.get(`${API_ENDPOINT}/main/`)
}

export const registerUser = (email, pass) => {
 
}