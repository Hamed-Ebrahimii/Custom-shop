"use server"
import {loginValidationType} from "@/utils/validation/login-validation";
import { Login} from "@/core/service/http-service";
import {ILogin} from "@/utils/types/global";
import {cookies} from "next/headers";
export const loginAdmin = async (data : loginValidationType ) =>{
    const response =  await Login<ILogin , loginValidationType>('/api/auth/login' , data)
    cookies().set({name : 'userId' , value : response.data.data.user._id})
    const date = new Date()
    cookies().set(  {name : 'token', value : response.data.token.accessToken , expires : date.getTime() + (1000 * 60 * 15) })

}