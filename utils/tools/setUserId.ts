"use client"
export const setUserId = (value : string) =>{
    console.log(value)
    sessionStorage.setItem('userId' , value)
}