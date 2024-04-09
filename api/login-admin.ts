"use client"
import {loginValidationType} from "@/utils/validation/login-validation";
import { Login} from "@/core/service/http-service";
import {ILogin} from "@/utils/types/global";
import {setCookie} from "@/utils/tools/setCookie";
import {setUserId} from "@/utils/tools/setUserId";
export const loginAdmin = async (data : loginValidationType ) =>{
    const response =  await Login<ILogin , loginValidationType>('/api/auth/login' , data)
    await setCookie('userId' , response.data.data.user._id)
    await setCookie('token' , response.data.token.accessToken)
    setUserId(response.data.data.user._id)

}