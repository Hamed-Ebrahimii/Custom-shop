"use server"
import Link from "next/link";
import CartDesign from "@/app/(shop)/component/popular-designs/cart-design";
import LikeShape from "@/app/(shop)/component/popular-designs/icon/like-shape";
import {getAllProduct} from "@/api/getAllProduct";
import CartProduct from "@/app/(shop)/component/cart-product";
import Accessory from "@/app/(shop)/component/icon/accessory";

const  PopularDesigns = async () =>{
    const product = await getAllProduct('1' , '' , '8' , '65f040c5eafd9610a52beebf')
    return(
        <div className={'w-full mt-6'}>
            <div className={'w-full flex justify-between items-center gap-4'}>
                <div className={'flex gap-2 items-center whitespace-nowrap'}>
                    <Accessory className={'hidden md:block'} />
                    <p className={'text-lg font-bold'}>اکسسوری</p>
                </div>
                <hr className={'h-2 w-full mt-3 hidden md:block'}/>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>
            <div className={'w-full grid  grid-cols-2 gap-4 mt-3 md:grid-cols-4'}>
                {
                    product.data.data.products.map(item => <CartProduct key={item._id} product={item}/>)
                }
            </div>
        </div>
    )
}
export default PopularDesigns