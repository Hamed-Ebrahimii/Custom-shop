"use client"
import { addOrderApi } from "@/api/AddOrder"
import { addOrder } from "@/redux/slice/orderSlice"
import { RootState } from "@/redux/store"
import { totalPrice } from "@/utils/tools/totalPrice"
import { AddOrder } from "@/utils/types/global"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { TbDiscount2 } from "react-icons/tb"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/ReactToastify.css"
const CartTotalPrice = ({date} : {date? : string}) =>{
    const order = useSelector((data : RootState)=> data.order)
    const router = useRouter()
    const {data} = useQuery({
        queryKey : [order],
        queryFn : () => totalPrice(order.products)
    })
    const {mutate} = useMutation({
        mutationFn : (data : AddOrder) => addOrderApi(data),
        onSuccess : () =>{
            router.push('/pay')
        },
        onError : () =>{
            toast('لطفا دوباره وارد حساب خود شوید ')
            router.push('/login')
        }
    })
    const handleSubmit =   ()=>{
        const id = sessionStorage.getItem('userId')
        console.log(id);
        if(!date){
            toast('لطفا تاریخ ارسال را انتخاب کنید' ,{
                type : 'error'
            })
            return
        }
        if (id) {
            console.log(date);
            
          
            mutate(order)
            return
        }
        toast('لطفا وارد حساب کاربری خود شوید ')
        router.push('/login')
        
    }
    return(
        <div className={` w-full flex justify-center`}>
            <ToastContainer/>
        <div className={'w-10/12 border p-7 rounded-lg'}>
            <ul className={'space-y-4 mt-6'}>
                <li className={'w-full flex items-center justify-between'}>
                    <p className={'text-sm font-semibold text-gray-500'}>
                        قیمت کالاها :
                    </p>
                    <p className={'text-sm font-semibold text-gray-500 flex items-center gap-2'}>
                    <span>
                        {
                            data
                        }
                    </span>
                        تومان
                    </p>
                </li>
                <li className={'w-full flex items-center justify-between'}>
                    <p className={'text-sm font-semibold text-gray-500 flex gap-2 items-center'}>
                        <TbDiscount2 className={'size-4'}/>
                        مجموع تخفیف روی کالا ها
                    </p>
                    <p className={'text-sm font-semibold text-gray-500 flex items-center gap-2'}>
                    <span className={'text-red-500'}>
                        0
                    </span>
                        تومان
                    </p>
                </li>
                <li className={'w-full flex items-center justify-between'}>
                    <p className={'text-sm font-semibold text-gray-500'}>
                        هزینه ارسال :
                    </p>
                    <p className={'text-sm font-semibold text-gray-500 flex items-center gap-2'}>
                    <span>
                        50000
                    </span>
                        تومان
                    </p>
                </li>
                <hr/>
                <li className={'w-full flex items-center justify-between'}>
                    <p className={'text-sm font-semibold text-gray-500'}>
                        جمع مبلغ قابل پرداخت :
                    </p>
                    <p className={'text-sm font-semibold text-gray-500 flex items-center gap-2'}>
                    <span>
                        {
                            data! + 50000
                        }
                    </span>
                        تومان
                    </p>
                </li>
            </ul>
            <button onClick={handleSubmit}
                    className={'w-1/2 py-3 rounded-lg bg-red-custom text-white mt-6 font-medium text-lg '}>
                ثبت سفارش
            </button>
        </div>
    </div>
    )
}
export default CartTotalPrice