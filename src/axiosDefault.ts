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
         
          console.error('Ошибка 401: Unauthorized. Пожалуйста, авторизуйтесь.');
         
        } else if (status === 403) {
          
          console.error('Ошибка 403: Forbidden. У вас нет доступа к этому ресурсу.');
          
        } else {
         
          console.error('Ошибка ответа от сервера:', error.response.data);
          console.error('Статус ошибки:', error.response.status);
          console.error('Заголовки ошибки:', error.response.headers);
        }
      } else if (error.request) {
      
        console.error('Ошибка запроса:', error.request);
      } else {
        
        console.error('Ошибка настройки запроса:', error.message);
      }
  
     
      return Promise.reject(error);
    }
  );
  