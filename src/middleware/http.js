import axios from 'axios';
import config from '../../config.json';

export const http = axios.create({
  baseURL: config.dev.backendUrl,
});