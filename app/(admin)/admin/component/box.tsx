"use client"
import {ReactNode} from "react";
import {Progress} from "@material-tailwind/react";

const Box = ({icon , progressValue , value , title} : {icon : ReactNode , title : string , value : string , progressValue : number}) =>{
    return(
        <div className={'w-48 h-40 p-5 border rounded-lg shadow-lg flex flex-col justify-between'}>
            <div className={'w-full flex items-center gap-3'}>
                <div className={'size-8 rounded-lg bg-red-custom/50 flex justify-center items-center'}>
                    {icon}
                </div>
                    <p className={'text-xs font-medium text-gray-600'}>{title}</p>
            </div>
            <div className={'w-full'}>
                <p className={'text-xl font-bold text-gray-400'}>
                    {value}
                </p>
            </div>
            <Progress size={'sm'} placeholder={''} value={progressValue} color="red" />
        </div>
    )
}
export default Box