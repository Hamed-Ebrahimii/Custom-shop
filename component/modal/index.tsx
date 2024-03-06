import {ReactNode} from "react";

const Modal = ({children , isOpen} : {children : ReactNode , isOpen : boolean}) =>{
    return(
        <div className={`fixed top-0 left-0 w-full h-screen bg-black/50 flex items-center justify-center z-30 ${isOpen ? '' : 'hidden'}`}>
            {children}
        </div>
    )
}
export default Modal