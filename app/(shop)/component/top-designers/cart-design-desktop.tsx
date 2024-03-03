import BtnRedOutlin from "@/component/btn/btn-red-outlin";
import User from "@/app/(shop)/component/top-designers/icon/user";

const CartDesignDesktop = () =>{
    return(
        <div className={'w-full relative rounded-xl overflow-hidden py-4 px-2 border'}>
            <div className={'absolute top-0 left-0 w-full h-16 bg-pink-50 -z-40'}>
            </div>
            <img src="/img/Profile pic.png" alt="" className={'mx-auto mt-3'}/>
            <p className={'text-lg font-medium mt-4 mx-auto text-center'}>شهرام طالبی</p>
            <div className={'w-full flex items-center justify-between text-xs h-5 mt-4'}>
                <p className={'text-gray-600'}>دنبال کنندگان : ۴۰۰</p>
                <div className={'bg-gray-600 w-[1px] h-full'}>

                </div>
                <p className={'text-gray-600'}> تعداد طرح ها : ۵۶</p>
                <div className={'bg-gray-600 w-[1px] h-full'}>

                </div>
                <p className={'text-gray-600'}> آمار فروش : ۳۷۰ </p>
            </div>
            <div className={'w-full flex items-center justify-center gap-3 mt-4'}>
                <img src="/img/lemon.png" alt="" className={'w-20 h-20 rounded-lg p-1 border object-cover'}/>
                <img src="/img/lemon.png" alt="" className={'w-20 h-20 rounded-lg p-1 border object-cover'}/>
                <img src="/img/lemon.png" alt="" className={'w-20 h-20 rounded-lg p-1 border object-cover'}/>
            </div>
            <BtnRedOutlin>
                <User/>
                دنبال کردن
            </BtnRedOutlin>
        </div>
    )

}
export default CartDesignDesktop