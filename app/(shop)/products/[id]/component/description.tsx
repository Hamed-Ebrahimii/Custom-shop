"use client"
import {useState} from "react";
import parse from 'html-react-parser';
import {Product, ResponseSingleProduct} from "@/utils/types/global";

const Description = ({product} : {product : ResponseSingleProduct }) =>{
    const [more , setMore] = useState(false)
    return(
        <>
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
                    <li className={`${more ? '' : 'h-32'} overflow-hidden`}>
                        توضیحات : {parse(product.product.description)}

                    </li>
                    <button  onClick={()=> setMore(!more)} className={'text-red-custom'}>
                        {more ? 'بستن' : 'نمایش بیشتر'}
                    </button>
                </ul>
            </div>
        </>
    )
}
export default Description