"use client"
import {AddUser, ILogin, ResponseApi,} from "@/utils/types/global";
import {Create} from "@/core/service/http-service";
import {cookies} from "next/headers";
import {setCookie} from "@/utils/tools/setCookie";

export const AddUserApi = async (data : AddUser) =>{
    return  await Create<ResponseApi<ILogin> , AddUser>('/api/users' , data)

}