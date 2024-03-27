import {ReactNode} from "react";

const BtnRed = ({children , className} : {children : ReactNode , className? : string}) =>{
    return(
        <button className={'py-2 bg-red-custom rounded-lg px-7 text-white ' + className || ''  }>
            {children}
        </button>
    )
}
export  default BtnRed