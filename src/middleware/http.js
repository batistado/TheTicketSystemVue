import axios from 'axios';
import config from '../../config.json';
import { Notification } from 'element-ui';
import router from '../router';

const http = axios.create({
  baseURL: config.dev.backendUrl,
});

http.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      router.push({ name: 'server-error' });
    } else {
      Notification({
        message: error.response.data.message,
        type: 'error',
      });
    }
  }
)

export { http };