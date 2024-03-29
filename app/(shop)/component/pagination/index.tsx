"use client"
import {useState} from "react";

const Pagination = ({pageNumber , totalPage  } : {pageNumber : number , totalPage : number}) =>{
    const createBtn = () =>{
        if (pageNumber <=1){
            return (
                <button className={'size-8 rounded-full border-2 border-black'} >
                    1
                </button>
            )
        }
        else if(pageNumber -5 <=1){
            for (let i =1 ; i<pageNumber +5 ; i++) {
                return (
                    <button className={'size-8 rounded-full border-2 border-black'} key={i}>
                        {
                            i
                        }
                    </button>
                )
            }
        }
    }
    return (
        <>
            {
            }
        </>
    )
}
export default Pagination