import axios from 'axios';
import {
  LOGIN_USER,
  REGISTER_USER,
  AUTH_USER,
  LOGOUT_USER,
} from './userActionType';
export const registerUser = async (dataToSubmit) => {
  const request = await axios
    .post(`/api/users/register`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
};

export const loginUser = async (dataToSubmit) => {
  const request = await axios
    .post(`/api/users/login`, dataToSubmit)
    .then((response) => response.data);
  console.log('loginUser', request);
  return {
    type: LOGIN_USER,
    payload: request,
  };
};

export const auth = async () => {
  const request = await axios
    .get('/api/users/auth')
    .then((response) => response.data);
  console.log('auth', request);
  return {
    type: AUTH_USER,
    payload: request,
  };
};

export const logoutUser = async () => {
  const request = await axios
    .get(`/api/users/logout`)
    .then((response) => response.data);

  return {
    type: LOGOUT_USER,
    payload: request,
  };
};
