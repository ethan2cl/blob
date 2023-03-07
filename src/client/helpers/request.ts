import { ExpressResponseResult } from "@/shared";
import { notification } from "antd";
import axios, {
  AxiosRequestConfig as _AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

type BlobRequestConfig = {
  showLoading?: boolean;
};

type AxiosRequestConfig<D> = _AxiosRequestConfig<D> & BlobRequestConfig;

const loading = (() => {
  let count = 0,
    loading: HTMLDivElement;

  return {
    showLoading: () => {
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
    },

    hideLoading: () => {
      --count;
      if (loading && !count) {
        document.body.removeChild(loading);
      }
    },
  };
})();

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  timeout: 10 * 1000,
});

const handleRequest = (config: InternalAxiosRequestConfig) => {
  loading.showLoading();
  return config;
};

const handleResponse = (response: AxiosResponse) => {
  loading.hideLoading();
  if (response.data.error) {
    notification.error({ message: response.data.error.errorMessage });
  }
  if (response) return response.data;
};

const handleError = (err: any) => {
  loading.hideLoading();
  notification.error({ message: err.message });
  return err;
};

instance.interceptors.request.use(handleRequest);
instance.interceptors.response.use(handleResponse, handleError);

export const request = {
  request: <T = any, R = any, D = any>(config: AxiosRequestConfig<D>) => {
    return instance.request<T, ExpressResponseResult<R>, D>(config);
  },
  post: <T = any, R = any, D = any>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig<D>
  ) => {
    return instance.post<T, ExpressResponseResult<R>, D>(url, data, config);
  },
};
