import Link from "next/link";
import CartDesigner from "@/app/(shop)/component/top-designers/cart-designer";
import Star from "@/app/(shop)/component/top-designers/icon/star";
import CartDesignDesktop from "@/app/(shop)/component/top-designers/cart-design-desktop";

const TopDesigners = () =>{
    return(
        <div className={'w-full mt-6'}>
            <div className={'w-full flex  items-center gap-2'}>
                <div className={'flex items-center gap-2 whitespace-nowrap'}>
                    <Star/>
                    <p className={'text-lg font-bold'}>طراحان برتر</p>
                </div>
                <hr className={'w-full h-2 mt-3'}/>
            </div>
            <div className={'w-full mt-6'}>
                <div className={'w-full grid grid-cols-2 grid-rows-2 gap-4 mt-4 md:grid-cols-4 md:grid-rows-1 md:hidden'}>
                    <CartDesigner/>
                    <CartDesigner/>
                    <CartDesigner/>
                    <CartDesigner/>
                </div>
                <div className={'hidden w-full md:grid md:grid-cols-4 md:grid-rows-2 gap-6'}>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                    <CartDesignDesktop/>
                </div>
            </div>
        </div>
    )
}
export default TopDesigners