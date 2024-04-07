"use server"
import {cookies} from "next/headers";

export const getItemCookie = async (key : string) =>{
    return await cookies().get(key)
}