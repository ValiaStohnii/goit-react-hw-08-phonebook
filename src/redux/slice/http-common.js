import axios from 'axios';

const http = axios.create({
  baseUrl: 'https://connections-api.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});

export default http;
