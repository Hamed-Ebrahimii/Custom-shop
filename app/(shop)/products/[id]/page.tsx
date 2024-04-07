import {getProductById} from "@/api/getProductById";
import Slider from "@/app/(shop)/component/slider";
import Description from "@/app/(shop)/products/[id]/component/description";
import SliderProduct from "@/app/(shop)/products/[id]/component/slider";

const Product = async ({ params }: { params: { id: string } }) =>{
    const product = await  getProductById(params.id)
    return(
        <div className="w-full min-h-screen p-5">
            <div className={'w-full flex flex-col md:flex-row'}>
                <div className={'w-1/3 flex-1'}>
                    <Slider img={product.data.data.product.images}/>
                </div>
                <Description product={product.data.data}/>
            </div>
            <SliderProduct category={product.data.data.product.category._id}/>
        </div>
    )
}
export default Product