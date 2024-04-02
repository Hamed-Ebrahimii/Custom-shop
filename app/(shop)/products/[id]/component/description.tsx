"use client"
import {useState} from "react";
import parse from 'html-react-parser';
import {Product, ResponseSingleProduct} from "@/utils/types/global";
import BtnRed from "@/component/btn/btn-red";
import Order from "@/component/icon/order";

const Description = ({product} : {product : ResponseSingleProduct }) =>{
    const [more , setMore] = useState(false)
    return(
        <div className={'w-1/2'}>
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
                    <BtnRed className={'flex items-center gap-2'}>
                        سبد خرید
                        <Order/>
                    </BtnRed>
                </div>
            </div>

        </div>
    )
}
export default Description