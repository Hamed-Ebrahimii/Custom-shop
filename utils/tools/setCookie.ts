"use server"
import {cookies} from "next/headers";

export const setCookie = async (key : string , value : string , expire? : number) =>{
   await cookies().set({name : key , value  , expires : expire})
}