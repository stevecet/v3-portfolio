import axios, { AxiosRequestConfig } from 'axios';
import JSONbig from 'json-bigint';

const localApi = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  validateStatus: (status) => {
    return status >= 200 && status < 300;
  },
  transformResponse: [(data) => JSONbig.parse(data)]
});

const getApiInstance = () => {
  return localApi;
};

const api = {
  request: (config: AxiosRequestConfig) => {
    const apiInstance = getApiInstance();
    return apiInstance(config);
  },
  get: (url: string, config?: AxiosRequestConfig) => {
    const apiInstance = getApiInstance();
    return apiInstance.get(url, config);
  },
  post: (url: string, data?: unknown, config?: AxiosRequestConfig) => {
    const apiInstance = getApiInstance();
    return apiInstance.post(url, data, config);
  },
  put: (url: string, data?: unknown, config?: AxiosRequestConfig) => {
    const apiInstance = getApiInstance();
    return apiInstance.put(url, data, config);
  },
  delete: (url: string, config?: AxiosRequestConfig) => {
    const apiInstance = getApiInstance();
    return apiInstance.delete(url, config);
  },
};

export default api;
