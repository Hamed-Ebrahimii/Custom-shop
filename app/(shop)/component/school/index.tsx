import {getAllProduct} from "@/api/getAllProduct";
import Link from "next/link";
import CartProduct from "@/app/(shop)/component/cart-product";
import Pen from "@/app/(shop)/component/icon/pen";

const School = async () =>{
    const product = await getAllProduct('1' , '' , '8' , '65f04338eafd9610a52beed9')
    return(
        <div className={'w-full mt-6'}>
            <div className={'w-full flex justify-between items-center gap-4'}>
                <div className={'flex gap-2 items-center whitespace-nowrap'}>
                    <Pen className={'hidden md:block'} />
                    <p className={'text-lg font-bold'}>لوازم تحریر</p>
                </div>
                <hr className={'h-2 w-full mt-3 hidden md:block'}/>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>
            <div className={'w-full grid  grid-cols-2 gap-4 mt-3 md:grid-cols-4 md:grid-rows-1'}>
                {
                    product.data.data.products.map(item => <CartProduct key={item._id} product={item}/>)
                }
            </div>
        </div>
    )
}
export default School