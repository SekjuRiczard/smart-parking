import axios from 'axios';
import { API_URLS } from '../../../api/apiUrls';

export const registerUser = async (registerData) => {
  if (localStorage.getItem('accessToken')) {
    localStorage.removeItem('accessToken');
  }

  if (localStorage.getItem('login')) {
    localStorage.removeItem('login');
  }

  try {
    const response = await axios.post(API_URLS.REGISTER, registerData);

    if (response.status === 200 || response.status === 201) {
      const token = response.data.token;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('login', registerData.login);
      return { status: response.status, success: true };
    } else {
      return { status: response.status, success: false };
    }
  } catch (error) {
    console.error('Błąd podczas rejestracji:', error);
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axios.post(API_URLS.AUTHENTICATE, loginData);

    if (response.status === 200 || response.status === 201) {
      const token = response.data.token;
      localStorage.setItem('accessToken', token);
      localStorage.setItem('login', loginData.login);
      return { status: response.status, success: true };
    } else {
      return { status: response.status, success: false };
    }
  } catch (error) {
    console.error('Błąd logowania:', error);
    return {
      status: error.response ? error.response.status : null,
      success: false,
    };
  }
};
