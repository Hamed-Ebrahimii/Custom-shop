import Link from "next/link";
import CartDesigner from "@/app/(shop)/component/top-designers/cart-designer";

const TopDesigners = () =>{
    return(
        <div className={'w-full mt-6'}>
            <div className={'w-full flex justify-between items-center'}>
                <p className={'text-lg font-bold'}>طراحان برتر</p>
                <button>
                    <Link href={''} className={'text-red-custom '}>بیشتر</Link>
                </button>
            </div>
            <div className={'w-full grid grid-cols-2 grid-rows-2 gap-4 mt-4 md:grid-cols-4 md:grid-rows-1'}>
                <CartDesigner/>
                <CartDesigner/>
                <CartDesigner/>
                <CartDesigner/>
            </div>
        </div>
    )
}
export default TopDesigners