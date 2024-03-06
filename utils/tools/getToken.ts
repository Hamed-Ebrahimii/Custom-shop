"use client"
export const getToken = () =>{
   return  sessionStorage.getItem('token')
}