import Link from "next/link";
import Image from "next/image";
import CartProduct from "@/app/(shop)/component/cart-product";
import Pocket from "@/app/(shop)/component/top-designers/icon/pocket";
import { getAllProduct } from "@/api/getAllProduct";

const LatestDesigns = async () =>{
    let listProduct
    try{
            listProduct = await getAllProduct('1' , '', '7')
    }catch(e){

    }
    return(
        <div className={'w-full mt-6 mb-16'}>
            <div className={'w-full flex items-center justify-between'}>
                <p className={'text-lg font-bold'}>جدیدترین طرح ها</p>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>

            <div className={'w-full mt-3 grid grid-rows-2 grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2'}>
                <div className={'w-full flex flex-col items-center mt-2 justify-around'}>
                    <p className={'font-medium flex-1 md:text-3xl md:font-bold md:text-gray-800 md:mt-5'}>
                        محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه خودتون تغییر بدید
                    </p>
                    <Pocket className="w-1/2 md:w-full"/>
                </div>
               {
                listProduct?.data.data.products.map(item => <CartProduct key={item._id} product={item}/>)
               }
            </div>
        </div>
    )
}
export default LatestDesigns