"use server"
import {cookies} from "next/headers";
import { DateObject } from "react-multi-date-picker";

export const setCookie = async (key : string , value : string , expire? : number) =>{
   await cookies().set({name : key , value  })
}