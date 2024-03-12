"use server"
import { cookies } from "next/headers"
import { Create } from "@/core/service/http-service"

interface IRefreshToken  {
    refreshToken : string
}
interface IResponseRefreshToken  {
    accessToken : string
}
export const refreshToken = async () =>{
    const token = await cookies().get('refreshToken')
    const data = {
        refreshToken : token?.value || ''
    }
    if(token?.value){
        const response = await Create<IResponseRefreshToken , IRefreshToken>('/api/auth/token' , data)
        cookies().set({name : 'refreshToken' , value : response.data.accessToken})
        return
    }
    return
}