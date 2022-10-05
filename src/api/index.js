// Init
import axios from 'axios';
import { toast } from 'react-toastify';
import { baseUrl } from '../config';

const api = async (method, uri, body) => {
  // API Call
  const url = baseUrl + uri;

  const token = localStorage.getItem('token');
  if (token) {
    axios.defaults.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return new Promise((resolve, reject) => {
    axios[method](url, body)
      .then((res) => resolve(res))
      .catch((err) => {
        if (err?.response?.status === 403) {
          localStorage.removeItem('token');
          window.location = '/login';
        } else {
          // eslint-disable-next-line no-console
          console.log('API Error --------> ', err?.response?.status);
          toast.error(err?.response?.data ? err.response.data.message : err?.message);
          reject(err);
        }
      });
  });
};
//
// Export
export default api;
