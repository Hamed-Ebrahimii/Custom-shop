
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {getToken} from "@/utils/tools/getToken";
import { refreshToken } from "@/utils/tools/refreshToken";

const httpService = axios.create({
    baseURL : 'http://localhost:8000',

})
const baseApi = async <T> (url : string , option : AxiosRequestConfig) : Promise<AxiosResponse<T>> =>{
    return await httpService(url, option)
}

export const Create = async <T , dataType> (url : string , data : dataType) : Promise<AxiosResponse<T>> =>{
    const token =  await getToken()
    console.log(token)
    return await baseApi(url, {
        method : 'POST',
        headers : {
            Authorization : 'Bearer ' + token
        },
        data
    })
}


export const Update = async <T , dataType> (url : string , data : dataType) : Promise<AxiosResponse<T>> =>{
    await refreshToken()
    return await baseApi(url, {
        method : 'PATCH',
        headers : {
            Authorization : 'Bearer ' + getToken()
        },
        data
    })
}
export const Delete = async (url : string ) : Promise<AxiosResponse> =>{
    await refreshToken()
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
export const Login = async <T , dataType> (url : string , data : dataType) : Promise<AxiosResponse<T>> =>{
    return await baseApi(url , {
        method : 'post',
        data
    })
}