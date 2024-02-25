import Image from "next/image";
import {FcLike} from "react-icons/fc";
import {VscHeart} from "react-icons/vsc";

const CartProduct = () =>{
    return(
        <div className={'w-72 p-4 rounded-lg border'}>
            <div className={'size-64 rounded-md overflow-hidden'}>
                <Image src={'/img/img.png'} alt={''} width={256} height={256} />
            </div>
            <div className={'w-full mt-4 flex items-center justify-between'}>
                <p className={'text-lg font-bold'}>تیشرت زنانه</p>
                <VscHeart className={'size-6'} />
            </div>
            <p className={'mt-2 font-normal'}>دارای رنگ بندی، قابل طراحی</p>
            <div className={'w-full flex justify-end mt-7'}>
                <p className={'text-lg font-bold'}>تومان ۱۵۰,۰۰۰</p>
            </div>
        </div>
    )
}
export default CartProduct