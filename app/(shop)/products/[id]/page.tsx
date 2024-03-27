import {getProductById} from "@/api/getProductById";
import Slider from "@/app/(shop)/component/slider";
import Description from "@/app/(shop)/products/[id]/component/description";
import {getCategoryById} from "@/api/getCategoryById";
import BtnRed from "@/component/btn/btn-red";
import Order from "@/component/icon/order";

const Product = async ({ params }: { params: { id: string } }) =>{
    const product = await  getProductById(params.id)
    return(
        <div className="w-full min-h-screen p-5">
            <Slider img={product.data.data.product.images}/>
            <Description product={product.data.data}/>
            <div className={'w-full flex items-center justify-between mt-8'}>
                <p className={'text-xl font-bold text-gray-700'}>
                    تومان
                    {product.data.data.product.price}
                </p>
                <BtnRed className={'flex items-center gap-2'}>
                    سبد خرید
                    <Order/>
                </BtnRed>
            </div>
        </div>
    )
}
export default Product