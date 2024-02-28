import Image from "next/image";
import {VscHeart} from "react-icons/vsc";
import Gallery from "@/app/(shop)/component/popular-designs/icon/gallery";

const CartDesign = () =>{
    return(
        <div className={'w-full rounded-xl border p-3 flex flex-col items-center '}>
                <Image src={'/img/img-stiker.png'} alt={''} width={96} height={96} className={'object-cover'}/>
                <div className={'w-full flex items-center justify-between mt-3'}>
                    <p className={'text-lg font-medium'}>
                        استیکر
                    </p>
                    <VscHeart className={'size-6'} />
                </div>
            <div className={'w-full mt-1'}>
                <p className={'text-sm font-medium'}>
                    قابل طراحی و چاپ بر روی انواع محصولات
                </p>
            </div>
            <button className={'w-full py-2.5 flex items-center justify-center gap-1 border text-sm font-medium mt-4 border-red-custom rounded-xl text-red-custom whitespace-nowrap'}>
                <Gallery/>
                افزودن به گالری
            </button>
        </div>
    )
}
export default CartDesign