import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "",
  withCredentials: true,
  timeout: 60 * 1000,
});

const handleRequest = (config: InternalAxiosRequestConfig) => {
  return config;
};

const handleResponse = (response: AxiosResponse) => {
  return response;
};

instance.interceptors.request.use(handleRequest);
instance.interceptors.response.use(handleResponse);

export default instance;
