import axios from 'axios';

const api = axios.create({
  baseURL: 'https://backend-petadoption-4.onrender.com/api',
});

export default api;
