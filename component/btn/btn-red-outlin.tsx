import {ReactNode} from "react";

const BtnRedOutline = ({children , className , disable , onClick} : {children : ReactNode , className? : string , disable? : boolean , onClick? : ()=> void}) =>{
    return(
        <button onClick={onClick} disabled={disable ? disable : false} className={className +' w-full py-1 mt-3 flex items-center justify-center gap-1 rounded-xl border border-red-custom text-red-custom text-lg font-medium' }>
            {children}
        </button>
    )
}
export default BtnRedOutline