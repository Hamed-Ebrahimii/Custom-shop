"use server"
import Star from "@/component/categorization/icon/star";
import CartProduct from "@/app/(shop)/component/cart-product";
import { getAllProduct } from "@/api/getAllProduct";
import { Product, ResponseApi } from "@/utils/types/global";

const BestSellers = async () =>{
    let listProduct  
    try{
            listProduct = await getAllProduct('1',"8")

    }catch(e){

    }
 return(
     <div className={'w-full mt-4'}>
         <div className={'w-full flex items-center gap-4 justify-between md:justify-normal'}>
             <div className={'flex  gap-2'}>
                 <Star className={'size-10 hidden md:block'}/>
                 <p className={' text-sm md:text-xl font-bold whitespace-nowrap'}>پر فروش ترین ها</p>
             </div>
             <hr className={'w-10/12 h-3 self-center mt-3 hidden md:block md:mt-0'}/>
             <button className={'text-red-custom whitespace-nowrap text-sm md:mb-2'}>مشاهده بیشتر</button>
         </div>
         <div className={'mt-5 w-full grid grid-cols-2 grid-rows-4 gap-6 md:grid-cols-4 md:grid-rows-2 items-center justify-around'}>
            {
                listProduct?.data.data.products.map(item => <CartProduct key={item._id} product={item}/>)
            }
         </div>
     </div>
 )
}
export default BestSellers