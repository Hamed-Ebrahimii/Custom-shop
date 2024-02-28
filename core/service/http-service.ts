import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {getToken} from "@/utils/tools/getToken";

const httpService = axios.create({
    baseURL : 'http://localhost:8000',
    headers : {
        'Accept': 'application/json'
    }
})
const baseApi = async <T> (url : string , option : AxiosRequestConfig) : Promise<AxiosResponse<T>> =>{
    return await httpService(url, option)
}

export const Create = async <T> (url : string , data  : any) : Promise<AxiosResponse<T>> =>{
    return await baseApi(url, {
        method : 'POST',
        data,
        headers : {
            Authorization : 'Bearer ' + getToken()
        }
    })
}

export const Update = async <T> (url : string , data : T) : Promise<AxiosResponse<T>> =>{
    return await baseApi(url, {
        method : 'PUT',
        data,
        headers : {
            Authorization : 'Bearer ' + getToken()
        }
    })
}
export const Delete = async (url : string ) : Promise<AxiosResponse> =>{
    return await baseApi(url, {
        method : 'DELETE',
        headers : {
            Authorization : 'Bearer ' + getToken()
        }
    })
}
export const Read = async <T> (url : string ) : Promise<AxiosResponse<T>> =>{
    return await baseApi(url, {
        method : 'GET',
        headers : {
            Authorization : 'Bearer ' + getToken()
        }
    })
}