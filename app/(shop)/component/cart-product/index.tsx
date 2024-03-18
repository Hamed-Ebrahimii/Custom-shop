/* eslint-disable @next/next/no-img-element */
import { Product } from "@/utils/types/global";
import {VscHeart} from "react-icons/vsc";

const CartProduct = ({product} : {product : Product}) =>{
    return(
        <div className={'w-full p-4 rounded-lg border flex flex-col h-80 justify-between md:h-[410px]'}>
                <img  src={'http://127.0.0.1:8000/images/products/images/'+product.images[0]} alt={''}  className={'object-cover rounded-lg self-center w-24 h-24 md:size-64 mx-auto'} />
            <div className={'w-full mt-4 flex items-center justify-between'}>
                <p className={'text-sm md:text-lg font-bold w-8/12 overflow-hidden truncate'}>{product.name}</p>
                <VscHeart className={'size-6'} />
            </div>
            <p className={'mt-2 font-normal'}>دارای رنگ بندی، قابل طراحی</p>
            <div className={'w-full flex justify-end mt-7'}>
                <p className={'text-lg font-bold'}>تومان {product.price}</p>
            </div>
        </div>
    )
}
export default CartProduct