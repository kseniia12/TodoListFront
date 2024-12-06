import axios from "axios";

export const axiosDefault = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      'Content-Type': 'application/json'
    }
});


axiosDefault.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      if (error.response) {
        const status = error.response.status;
        if (status === 401) {
          localStorage.removeItem('token');
        } else {
          console.error('Ошибка ответа от сервера:', error.response.data);
        }
      } else if (error.request) {
        console.error('Ошибка запроса:', error.request);
      } else {
        console.error('Ошибка настройки запроса:', error.message);
      }
      return Promise.reject(error);
    }
  );
  