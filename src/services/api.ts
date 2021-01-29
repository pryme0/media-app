import axios, { AxiosResponse, AxiosError } from "axios";

export function setTokenHeader(token: string) {
    if (token) {
        axios.defaults.headers["common"].Authorization = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common.Authorization;
    }
}

export function apiCall(method: string, path: string, data?: any) {
    return new Promise((resolve, reject) => {
        return (axios as any)
            [method](path, data)
            .then((res: AxiosResponse<any>) => {
                return resolve(res.data);
            })
            .catch((err: AxiosError) => {
                return reject(err);
            });
    });
}
