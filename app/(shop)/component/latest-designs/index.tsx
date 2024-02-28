import Link from "next/link";
import Image from "next/image";
import CartProduct from "@/app/(shop)/component/cart-product";

const LatestDesigns = () =>{
    return(
        <div className={'w-full mt-6 mb-16'}>
            <div className={'w-full flex items-center justify-between'}>
                <p className={'text-lg font-bold'}>جدیدترین طرح ها</p>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>
            <div className={'w-full flex flex-col items-center mt-2'}>
                <p className={'font-medium'}>
                    محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه خودتون تغییر بدید
                </p>
                <Image src={'/img/Group 29.png'} alt={''} width={131} height={126} className={'mt-3 object-cover'}/>
            </div>
            <div className={'w-full mt-3 grid grid-rows-2 grid-cols-2 gap-4'}>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
                <CartProduct/>
            </div>
        </div>
    )
}
export default LatestDesigns