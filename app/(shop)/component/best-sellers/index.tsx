import Star from "@/component/categorization/icon/star";
import CartProduct from "@/app/(shop)/component/cart-product";

const BestSellers = () =>{
 return(
     <div className={'w-full mt-4'}>
         <div className={'w-full flex items-center gap-4'}>
             <div className={'flex  gap-2'}>
                 <Star className={'size-10'}/>
                 <p className={'text-xl font-bold whitespace-nowrap'}>پر فروش ترین ها</p>
             </div>
             <hr className={'w-10/12 h-3 self-center'}/>
             <button className={'text-red-custom whitespace-nowrap text-sm mb-2'}>مشاهده بیشتر</button>
         </div>
         <div className={'mt-5 w-full grid grid-cols-2 grid-rows-4 gap-6 md:grid-cols-4 md:grid-rows-2 items-center justify-around'}>
             <CartProduct/>
             <CartProduct/>
             <CartProduct/>
             <CartProduct/>
             <CartProduct/>
             <CartProduct/>
             <CartProduct/>
             <CartProduct/>
         </div>
     </div>
 )
}
export default BestSellers