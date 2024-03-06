
import {loginValidationType} from "@/utils/validation/login-validation";
import {Create} from "@/core/service/http-service";
import {ILogin} from "@/utils/types/global";
export const loginAdmin = async (data : loginValidationType ) =>{
    const response =  await Create<ILogin , loginValidationType>('/api/auth/login' , data)
    sessionStorage.setItem('token', response.data.token.accessToken)
    return response
}