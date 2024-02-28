import Link from "next/link";
import CartDesign from "@/app/(shop)/component/popular-designs/cart-design";

const PopularDesigns = () =>{
    return(
        <div className={'w-full mt-6'}>
            <div className={'w-full flex justify-between items-center'}>
                <p className={'text-lg font-bold'}>طرح های پرطرفدار</p>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>
            <div className={'w-full grid grid-rows-2 grid-cols-2 gap-4 mt-3'}>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
                <CartDesign/>
            </div>
        </div>
    )
}
export default PopularDesigns