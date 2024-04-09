"use client"
import CartOrder from "@/app/(shop)/order/component/cartOrder";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import { useQuery} from "@tanstack/react-query";
import {totalPrice} from "@/utils/tools/totalPrice";
import {ToastContainer} from "react-toastify";
import {useRouter} from "next/navigation";
import {TbDiscount2} from "react-icons/tb";
import {RiErrorWarningLine} from "react-icons/ri";
const Order = () =>{
    const order = useSelector((data : RootState)=> data.order)
    const {data} = useQuery({
        queryKey : [order],
        queryFn : () => totalPrice(order.products)
    })
    const dispatch = useDispatch()
    const router = useRouter()

    const handleSubmit =  ()=>{
        router.push('/order/address')
    }
    return(
        <div className={'w-full flex gap-3 py-10 px-28'}>
            <ToastContainer/>
            <div className={'w-8/12 space-y-4'}>
                <p className={'text-lg font-medium'}>سبد خرید</p>
                <hr/>
                <div className={'mt-6 space-y-4 flex flex-col items-center justify-center'}>
                    {
                      order.products.length === 0 ? <> <img src={'/img/empty-cart.svg'}/> <p className={'text-gray-700 text-xl font-medium'}>سبد خرید شما خالی است (:</p> </> :  order.products.map(item => <CartOrder key={item.product} id={item.product}/> )
                    }
                </div>
            </div>
            <div className={'w-1/3 space-y-4'}>
                <div className={`${order.products.length === 0 ? 'hidden' : ''} w-full flex justify-center`}>
                    <div className={'w-10/12 border p-7 rounded-lg'}>
                        <div className={'w-full border-b space-y-4 py-6'}>
                            <p className={'text-lg font-medium text-gray-700'}>
                                کد تخفیف
                            </p>
                            <p className={'text-xs font-medium text-gray-500'}>
                                کد تخفیف کد معرف کارت هدیه خود را در زیر وارد کرده و دکمه ثبت رو بزنید تا در صورت داشتن
                                اعتبار به سفارش شما اعمال شود
                            </p>
                            <div className={'flex w-full items-center justify-between'}>
                                <input className={'border w-9/12 rounded-lg border-gray-400 py-2'}/>
                                <button className={'py-2 bg-red-custom text-white font-medium text-lg rounded-lg px-5'}>
                                    ثبت
                                </button>
                            </div>
                        </div>
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
                <div className={'border mx-auto w-10/12 rounded-lg px-5 py-4 space-y-4'}>
                    <RiErrorWarningLine className={'size-5 text-orange-300'} />
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
export default Order