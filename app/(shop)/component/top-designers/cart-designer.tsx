import Image from "next/image";
import {RiUserAddLine} from "react-icons/ri";

const CartDesigner = () =>{
    return(
        <div className={'w-full bg-designer bg-no-repeat border bg-opacity-50 p-3 rounded-xl flex flex-col items-center'}>
            <div className={'w-full flex items-center justify-center'}>
                <Image src={'/img/Profile pic.png'} alt={''} width={56} height={56} className={'object-cover'}/>
            </div>
            <p className={'text-lg font-bold mt-2'}>شهرام طالبی</p>
            <div className={'mt-3 space-y-2'}>
                <p className={'font-medium text-gray-400'}>دنبال کنندگان : ۴۰۰</p>
                <p className={'font-medium text-gray-400'}> تعداد طرح ها : ۵۶</p>
                <p className={'font-medium text-gray-400'}> آمار فروش : ۳۷۰ </p>
            </div>
            <button className={'mt-3 w-full py-2 rounded-xl border border-red-custom flex justify-center items-center gap-1 text-red-custom text-sm font-medium'}>
                <RiUserAddLine />
                دنبال کردن
            </button>
        </div>
    )
}
export default CartDesigner