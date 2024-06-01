import axios, { AxiosRequestConfig, AxiosResponseTransformer, AxiosResponse } from 'axios';

import appConfiguration from '@/lib/config/appConfiguration';
import GatewayError from '@/lib/domain/errors/GatewayError';

const defaultConfig: AxiosRequestConfig<unknown> = {
    baseURL: appConfiguration.api.apiRoot,
    timeout: appConfiguration.api.timeoutMS,
};

export function post<ResponseT>(url: string, data?: Record<string, any>, transformResponse?: AxiosResponseTransformer): Promise<ResponseT> {
    return axiosWrapper<ResponseT>(() => axios.post<ResponseT>(url, data, { ...defaultConfig, transformResponse }), 'POST', url)
        .then(response => response.data);
}

export function put<ResponseT>(url: string, data?: Record<string, any>, transformResponse?: AxiosResponseTransformer): Promise<ResponseT> {
    return axiosWrapper<ResponseT>(() => axios.put<ResponseT>(url, data, { ...defaultConfig, transformResponse }), 'PUT', url)
        .then(response => response.data);
}

export function patch<ResponseT>(url: string, data?: Record<string, any>, transformResponse?: AxiosResponseTransformer): Promise<ResponseT> {
    return axiosWrapper<ResponseT>(() => axios.patch<ResponseT>(url, data, { ...defaultConfig, transformResponse }), 'PATCH', url)
        .then(response => response.data);
}

export function get<ResponseT>(url: string, params?: Record<string, any>, transformResponse?: AxiosResponseTransformer): Promise<ResponseT> {
    return axiosWrapper<ResponseT>(() => axios.get<ResponseT>(url, { ...defaultConfig, params, transformResponse }), 'GET', url)
        .then(response => response.data);
}

function axiosWrapper<ResponseT>(axiosCall: () => Promise<AxiosResponse<any, any>>, method: string, url: string): Promise<AxiosResponse<ResponseT, any>> {
    try {
        return axiosCall();
    } catch (error) {
        throw new GatewayError(`API request error - ${method}: ${url}`, error);
    }
}
