import {TbDiscount2} from "react-icons/tb";
import {RiErrorWarningLine} from "react-icons/ri";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {useMutation, useQuery} from "@tanstack/react-query";
import {totalPrice} from "@/utils/tools/totalPrice";
import {useRouter} from "next/navigation";
import {AddOrder} from "@/utils/types/global";
import {addOrderApi} from "@/api/AddOrder";
import {addOrder} from "@/redux/slice/orderSlice";
import {toast} from "react-toastify";
import {getUserById} from "@/api/getUserById";
import CartOrder from "@/app/(shop)/order/component/cartOrder";

const Address = () =>{
    const userId = sessionStorage.getItem('userId')
    const order = useSelector((data : RootState)=> data.order)
    const {data} = useQuery({
        queryKey : [order],
        queryFn : () => totalPrice(order.products)
    })
    const {data : user} = useQuery({
        queryKey : ['user'],
        queryFn : () => getUserById(userId || '')
    })
    const dispatch = useDispatch()
    const router = useRouter()
    const {mutate} = useMutation({
        mutationFn : (data : AddOrder) => addOrderApi(data),
        onSuccess : () => {
            dispatch(addOrder({...order , products : []}))
            router.push('/pay')
        },
        onError : (error) =>{
            toast(error.message)
        }
    })
    const handleSubmit =  ()=>{
        const id = sessionStorage.getItem('userId')
        console.log(id)
        dispatch(addOrder({...order ,  user : id || ''}))
        mutate(order)
    }
    return(
        <div className={'w-full flex'}>
            <div className={'w-8/12 space-y-4'}>
                <p className={'text-lg font-medium'}>سبد خرید</p>
                <hr/>
                <div className={'mt-6 space-y-4 flex flex-col items-center justify-center'}>
                    {
                        order.products.length === 0 ? <> <img src={'/img/empty-cart.svg'}/> <p
                            className={'text-gray-700 text-xl font-medium'}>سبد خرید شما خالی است
                            (:</p> </> : order.products.map(item => <CartOrder key={item.product} id={item.product}/>)
                    }
                </div>
            </div>
            <div className={'w-1/3 space-y-4'}>
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