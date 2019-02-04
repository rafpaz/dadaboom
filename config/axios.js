import axios from 'axios';

axios.defaults.headers.common.Authorization = localStorage.getItem('jwtToken');
axios.defaults.headers.post['Content-Type'] = 'application/json';
