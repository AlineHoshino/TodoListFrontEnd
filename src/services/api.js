import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-list-aline.herokuapp.com/',
});

export default api;
