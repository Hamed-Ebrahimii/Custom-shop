import Image from "next/image";
import {VscHeart} from "react-icons/vsc";

const CartProduct = () =>{
    return(
        <div className={'w-full p-4 rounded-lg border flex flex-col'}>

                <Image src={'/img/img.png'} alt={''} width={96} height={96} className={'object-cover rounded-lg self-center md:w-full'} />

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