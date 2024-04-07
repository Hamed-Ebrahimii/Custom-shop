import {ReactNode} from "react";

const BtnRed = ({children , className , onClick} : {children : ReactNode , className? : string , onClick? : ()=> void}) =>{
    return(
        <button  onClick={onClick} className={'py-2 bg-red-custom rounded-lg px-7 text-white ' + className || ''  }>
            {children}
        </button>
    )
}
export  default BtnRed