"use client"
import {useState} from "react";
import parse from 'html-react-parser';
import {ResponseSingleProduct} from "@/utils/types/global";
import BtnRed from "@/component/btn/btn-red";
import Order from "@/component/icon/order";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {addOrder} from "@/redux/slice/orderSlice";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const Description = ({product} : {product : ResponseSingleProduct }) =>{
    const [more , setMore] = useState(false)
    const order = useSelector((data : RootState)=> data.order)
    const [number , setNumber] = useState(1)
    const dispatch = useDispatch()
    const handleProduct = () =>{
        const find = order.products.find(item => item.product === product.product._id)
        if (find){
            const newOrder = JSON.parse(JSON.stringify(order))
            const products = order.products.find(item => item.product === product.product._id)
            const newProduct : {product : string , count : number} = {...products! ,count : number  + 1 }
            const index = order.products.findIndex(item => item.product === product.product._id)
            newOrder.products.splice(index , 1 , newProduct)
            dispatch(addOrder({...newOrder}))
            return
        }
        dispatch(addOrder({...order , products : [...order.products , {product : product.product._id , count : number }]}))
        toast('کالا با موفقیت به سبد خرید اضافه شده')
    }
    return(
        <div className={'w-1/2'}>
            <ToastContainer/>
            <p className={'text-xl text-red-custom font-medium mt-5'}>
                توضیحالت محصول
            </p>
            <hr className={'my-5'}/>
            <div className={'w-full'}>
                <ul className={'space-y-4 !text-sm font-medium !text-gray-600 mt-6'}>
                    <li>
                        نام : {product.product.name}
                    </li>
                    <li>
                        برند : {product.product.brand}
                    </li>
                    <li>
                        دسته بندی : {product.product.category.name}
                    </li>
                    <li>
                        کیفیت :‌عالی
                    </li>
                    <li className={`${more ? '' : 'h-32'} overflow-hidden `}>
                        توضیحات : <span className={'!text-sm'}>{parse(product.product.description)}</span>

                    </li>
                    <button onClick={() => setMore(!more)} className={'text-red-custom'}>
                        {more ? 'بستن' : 'نمایش بیشتر'}
                    </button>
                </ul>
                <div className={'w-full flex items-center justify-between mt-8'}>
                    <p className={'text-xl font-bold text-gray-700'}>
                        تومان
                        {product.product.price}
                    </p>
                    <div className={'relative flex  items-center gap-4'}>
                        <input type="number" onChange={(e)=> setNumber(+e.target.value)} value={number} min={1} max={product.product.quantity} defaultValue={1} className={' p-2 size-14 border-2 outline-0 rounded-lg'}/>
                        <BtnRed onClick={handleProduct} className={'flex items-center gap-2 hover:shadow-lg whitespace-nowrap py-4'}>
                            سبد خرید
                            <Order/>
                        </BtnRed>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Description