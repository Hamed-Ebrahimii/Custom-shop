import Link from "next/link";
import CartDesign from "@/app/(shop)/component/popular-designs/cart-design";
import LikeShape from "@/app/(shop)/component/popular-designs/icon/like-shape";

const PopularDesigns = () =>{
    return(
        <div className={'w-full mt-6'}>
            <div className={'w-full flex justify-between items-center gap-4'}>
                <div className={'flex gap-2 items-center whitespace-nowrap'}>
                    <LikeShape className={'hidden md:block'}/>
                    <p className={'text-lg font-bold'}>طرح های پرطرفدار</p>
                </div>
                <hr className={'h-2 w-full mt-3 hidden md:block'}/>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>
            <div className={'w-full grid grid-rows-4 grid-cols-2 gap-4 mt-3 md:grid-cols-4 md:grid-rows-2'}>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
            </div>
        </div>
    )
}
export default PopularDesigns