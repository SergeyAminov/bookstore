import { AxiosRequestConfig } from "axios"

export function buildConfig(token: string, params: object): AxiosRequestConfig {
    return {
        headers: {
            authorization: 'bearer ' + token
        },
        params
    }
}