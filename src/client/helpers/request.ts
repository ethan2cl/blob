import { notification } from "antd";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

let count = 0,
  loading: HTMLDivElement;
const showLoading = () => {
  if (!count) {
    loading = document.createElement("div");
    loading.style.position = "absolute";
    loading.style.top = "0";
    loading.style.width = "100vw";
    loading.style.height = "100vh";
    loading.style.backgroundColor = "red";
  }
  ++count;
  document.body.append(loading);
};

const hideLoading = () => {
  --count;
  if (!count) {
    document.body.removeChild(loading);
  }
};

const instance = axios.create({
  // baseURL: globalConfig.BASE_URL,
  withCredentials: true,
  timeout: 60 * 1000,
});

const handleRequest = (config: InternalAxiosRequestConfig) => {
  showLoading();
  return config;
};

const handleResponse = (response: AxiosResponse) => {
  hideLoading();
  if (response.data.error) {
    notification.error({ message: response.data.error.errorMessage });
  }
  if (response) return response.data;
};

instance.interceptors.request.use(handleRequest);
instance.interceptors.response.use(handleResponse);

export default instance;
