"use client"
/* eslint-disable @next/next/no-img-element */
import { Product } from "@/utils/types/global";
import { useRouter } from "next/navigation";
import {VscHeart} from "react-icons/vsc";

const CartProduct = ({product} : {product : Product}) =>{
    const router =  useRouter()
    return(
        <div className={'w-full p-4 rounded-lg border flex flex-col h-80 justify-between md:h-[410px] cursor-pointer'} onClick={()=> router.push(`/products/${product._id}`)}>
                <img  src={'http://127.0.0.1:8000/images/products/images/'+product.images[0]} alt={''}  className={'object-cover rounded-lg self-center w-24 h-24 md:size-64 mx-auto'} />
            <div className={'w-full mt-4 flex items-center justify-between'}>
                <p className={'text-sm md:text-lg font-bold w-8/12 overflow-hidden truncate'}>{product.name}</p>
                <VscHeart className={'size-6'} />
            </div>
            <p className={'mt-2 font-normal'}>دارای رنگ بندی، قابل طراحی</p>
            <div className={'w-full flex justify-end mt-7'}>
                <p className={'text-lg font-bold'}>تومان {product.price}</p>
            </div>
            <button className={'py-2 w-full rounded-lg text-white font-medium bg-red-custom mt-6 hover:shadow-xl md:w-5/12 '} onClick={()=> router.push(`/products/${product._id}`)}>
                مشاهده و خرید
            </button>
        </div>
    )
}
export default CartProduct