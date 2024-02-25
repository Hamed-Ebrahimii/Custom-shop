import Medal from "@/app/component/best-sellers/icon/medal";
import Star from "@/component/categorization/icon/star";
import CartProduct from "@/app/component/cart-product";

const BestSellers = () =>{
 return(
     <div className={'w-full'}>
         <div className={'w-full flex items-center gap-4'}>
             <div className={'flex  gap-2'}>
                 <Star className={'size-10'}/>
                 <p className={'text-xl font-bold whitespace-nowrap'}>پر فروش ترین ها</p>
             </div>
             <hr className={'w-10/12 h-3 self-center'}/>
             <button className={'text-red-custom whitespace-nowrap text-sm mb-2'}>مشاهده بیشتر</button>
         </div>
         <div className={'mt-5 w-full flex flex-wrap gap-6 items-center justify-around'}>
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