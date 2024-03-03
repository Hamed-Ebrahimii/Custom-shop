import {ReactNode} from "react";

const BtnRedOutline = ({children , className} : {children : ReactNode , className? : string}) =>{
    return(
        <button className={className +' w-full py-1 mt-3 flex items-center justify-center gap-1 rounded-xl border border-red-custom text-red-custom text-lg font-medium' }>
            {children}
        </button>
    )
}
export default BtnRedOutline