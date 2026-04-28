import axios from 'axios';
import { API_URLS } from '../../../api/apiUrls';

export const getUserData = async (login) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;

    const response = await axios.get(`${API_URLS.USER_INFO}/${login}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Błąd pobierania danych użytkownika:', error);
    return null;
  }
};

export const getUsersList = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;

    const response = await axios.get(API_URLS.GET_USERS_LIST, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Błąd pobierania listy użytkowników:', error);
    return null;
  }
};

export const deactivateUser = async (login) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) return null;

    const response = await axios.put(
      `${API_URLS.DEACTIVATE_USER}/${login}/toggleActive`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Błąd deaktywacji użytkownika:', error);
    return null;
  }
};
