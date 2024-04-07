import {DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes} from "react";

const Input = (props :  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement> , HTMLInputElement> ) =>{
    return(
            <input {...props} className={'w-full h-10 px-3 rounded-lg border border-gray-100 placeholder:text-gray-400 outline-0'}/>
    )
}
export default Input