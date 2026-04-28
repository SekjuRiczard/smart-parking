import axios from 'axios';
import { API_URLS } from '../../../api/apiUrls';

export const apiOccupyFirstAvilable = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Brak tokena w localStorage!');
      return;
    }

    const response = await axios.put(
      API_URLS.OCCUPY_FIRST_AVILABLE,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log('Zajęto pierwsze dostępne miejsce:', response.data);
    }
  } catch (error) {
    console.error('Błąd zajęcia pierwszego dostępnego miejsca:', error);
  }
};

export const apiOccupySlot = async (slotId, reservedBy) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Brak tokena w localStorage!');
      return;
    }

    const url = `${API_URLS.OCCUPY_SLOT}/${slotId}/occupy?reservedBy=${reservedBy}`;
    const response = await axios.put(
      url,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.status === 200) {
      console.log('Zajęto miejsce o id:', response.data);
    }
  } catch (error) {
    console.error('Nie udało się zająć miejsca:', error);
  }
};

export const getAllFreeSlots = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Brak tokena w localStorage!');
      return null;
    }

    const response = await axios.get(API_URLS.ALL_AVILABLE_SLOTS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      console.log('Wolne miejsca parkingowe:', response.data);
      return response.data;
    }
  } catch (error) {
    console.error('Błąd pobierania wolnych miejsc parkingowych:', error);
    return null;
  }
};

export const allBusySlots = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Brak tokena w localStorage!');
      return null;
    }

    const response = await axios.get(API_URLS.ALL_BUSY_SLOTS, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Błąd pobierania zajętych miejsc:', error);
    return null;
  }
};

export const releaseSlot = async () => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Brak tokena w localStorage!');
      return null;
    }

    const response = await axios.put(
      API_URLS.RELEASE,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Błąd podczas zwalniania miejsca parkingowego:', error);
    return null;
  }
};

export const getUserSlot = async (login) => {
  try {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Brak tokena w localStorage!');
      return null;
    }

    const url = `${API_URLS.GET_USER_SLOT}/${login}`;
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania slotu użytkownika:', error);
    return null;
  }
};

export const slotState = async () => {
  try {
    const response = await axios.get(API_URLS.SLOT_STATE);

    if (response.status === 200) {
      return response.data;
    }

    return null;
  } catch (error) {
    console.error('Błąd podczas pobierania stanu miejsc parkingowych:', error);
    return null;
  }
};
