import { AxiosInstance, InternalAxiosRequestConfig } from "axios";

let currentOriginatorCode: string | null = null;

const setOriginatorCode = (code: string | null) => {
    currentOriginatorCode = code;
};

const getOriginatorCode = () => currentOriginatorCode;

const setupOriginatorCodeInterceptor = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            if (currentOriginatorCode) {
                config.headers.set("X-Originator-Code", currentOriginatorCode);
            }
            return config;
        },
        (error) => Promise.reject(error)
    );
};

export { setOriginatorCode, getOriginatorCode, setupOriginatorCodeInterceptor };
