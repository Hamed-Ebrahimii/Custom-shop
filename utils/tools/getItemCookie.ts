"use server"
import {cookies} from "next/headers";

export const getItemCookie = (key : string) =>{
    return cookies().get(key)
}