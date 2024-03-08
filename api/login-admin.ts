"use server"
import {loginValidationType} from "@/utils/validation/login-validation";
import {Create} from "@/core/service/http-service";
import {ILogin} from "@/utils/types/global";
import {cookies} from "next/headers";
export const loginAdmin = async (data : loginValidationType ) =>{
    const response =  await Create<ILogin , loginValidationType>('/api/auth/login' , data)
    cookies().set(  {name : 'token', value : response.data.token.accessToken})
    return response
}