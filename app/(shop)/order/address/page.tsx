"use server"
import {RiErrorWarningLine} from "react-icons/ri";
import { cookies } from "next/headers";
import { getUserById } from "@/api/getUserById";
import AddressBox from "./component/addressBox";
import CartTotalPrice from "../component/cartTotalPrice";

const Address = async () =>{
   const userId = cookies().get('userId')
   const address = await getUserById(userId?.value || '')
    return(
        <div className={'w-full flex py-8 px-12'}>
            <div className={'w-8/12 space-y-4'}>
                <p className={'text-lg font-medium'}>آدرس</p>
                <hr/>
                <div className={'mt-6 space-y-4 flex flex-col items-center justify-center'}>
                    {/* <AddressBox user={address.data.data} /> */}
                </div>
            </div>
            <div className={'w-1/3 space-y-4'}>
               <CartTotalPrice/>
                <div className={'border mx-auto w-10/12 rounded-lg px-5 py-4 space-y-4'}>
                    <RiErrorWarningLine className={'size-5 text-orange-300'}/>
                    <ul className={'list-disc space-y-2'}>
                        <li className={'text-sm font-medium text-gray-500'}>
                            ارسال رایگان برای سفارش های بالای ۷۰۰.۰۰۰ تومن
                        </li>
                        <li className={'text-sm font-medium text-gray-500'}>
                            در صورت اتمام موجودی‌، کالاها از سبد خرید حذف میشوند.
                        </li>
                        <li className={'text-sm font-medium text-gray-500'}>
                            لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Address