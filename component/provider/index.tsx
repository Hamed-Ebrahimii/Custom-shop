"use client"
import {getToken} from "@/utils/tools/getToken";
import {useRouter} from "next/navigation";
import {ReactNode} from "react";

const Provider = ({children} : {children : ReactNode}) =>{
    const router = useRouter()
    if (!getToken()){
        router.push('/login-admin')
    }
    return children
}
export default Provider