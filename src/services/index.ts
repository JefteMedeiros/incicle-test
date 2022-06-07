import axios from 'axios';

const api = axios.create({
  baseURL: 'https://raw.githubusercontent.com/InCicle/frontend-test/main',
});

export { api };
