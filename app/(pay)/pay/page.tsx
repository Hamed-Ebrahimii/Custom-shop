"use client"
import { addOrder } from "@/redux/slice/orderSlice";
import {useRouter} from "next/navigation";
import { useDispatch } from "react-redux";

const Page = () =>{
    const router = useRouter()
    const dispatch = useDispatch()
    const handleSuccsess = () =>{
        router.push('/pay-succsess')
        dispatch(addOrder({user : '' , deliveryDate : '' , deliveryStatus : false , products : []}))
    }
    return(
        <div className={'w-full h-screen flex items-center justify-center flex-col gap-5'}>
            <img src="/img/direct-payment.jpg" alt=""/>
            <div className={'flex gap-3 items-center'}>
                <button className={'bg-red-custom text-white px-4 py-3 rounded-lg'} onClick={()=> router.push('/pay-error')}>
                    بازگشت
                </button>
                <button className={'bg-green-400 px-4 py-3 rounded-lg text-white'} onClick={handleSuccsess}>
                    پرداخت
                </button>
            </div>
        </div>
    )
}
export default Page