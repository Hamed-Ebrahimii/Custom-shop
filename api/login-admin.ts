
import {loginValidationType} from "@/utils/validation/login-validation";
import {Create} from "@/core/service/http-service";
import {ILogin} from "@/utils/types/global";
import {cookies} from "next/headers";

export const loginAdmin = async (data : loginValidationType ) =>{
    const response =  await Create<ILogin>('/api/auth/login' , data)
    sessionStorage.setItem('token', response.data.token.accessToken)
    return response
}