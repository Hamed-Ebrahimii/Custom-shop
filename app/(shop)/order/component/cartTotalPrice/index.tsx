"use client"
import { addOrder } from "@/redux/slice/orderSlice"
import { RootState } from "@/redux/store"
import { totalPrice } from "@/utils/tools/totalPrice"
import { useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { TbDiscount2 } from "react-icons/tb"
import { useDispatch, useSelector } from "react-redux"

const CartTotalPrice = () =>{
    const order = useSelector((data : RootState)=> data.order)
    const dispatch = useDispatch()
    const router = useRouter()
    const {data} = useQuery({
        queryKey : [order],
        queryFn : () => totalPrice(order.products)
    })
    const handleSubmit =  ()=>{
        const id = sessionStorage.getItem('userId')
        
        dispatch(addOrder({...order ,  user : id || ''}))
        
    }
    return(
        <div className={` w-full flex justify-center`}>
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