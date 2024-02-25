import Star from "@/component/categorization/icon/star";
import CategorizationItem from "@/component/categorization/component/categorizationItem";

const Categorization = () =>{
    return(
        <div className={'w-full mt-10'}>
            <div className={'w-full flex gap-1 items-center'}>
                <Star className={'size-10'}/>
                <p className={'text-xl font-bold whitespace-nowrap'}>دسته بندی محصولات</p>
                <hr className={'w-10/12 h-3 self-end'}/>
            </div>
            <div className={'w-full flex gap-6 mt-6 items-center justify-center mb-10'}>
                <CategorizationItem image={'../../img/cover mobile.png'} name={'قاب موبایل'}/>
                <CategorizationItem image={'../../img/cart.png'} name={'کارت تبریک'}/>
                <CategorizationItem image={'../../img/accessory.png'} name={'اکسسوری'}/>
                <CategorizationItem image={'../../img/stationery.png'} name={'لوازم تحریر'}/>
                <CategorizationItem image={'../../img/Dress.png'} name={'لباس'}/>
                <CategorizationItem image={'../../img/Home decor.png'} name={'دکور خانه'}/>
            </div>
        </div>
    )
}
export default Categorization