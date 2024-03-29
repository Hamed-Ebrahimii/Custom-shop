"use client"
import { getAllProduct } from "@/api/getAllProduct"
import { Spinner } from "@material-tailwind/react"
import { useQuery } from "@tanstack/react-query"
import {useRouter, useSearchParams} from "next/navigation"
import CartProduct from "../component/cart-product"
import {getCategoryById} from "@/api/getCategoryById";
import Navigation from "@/component/nav";
import Pagination from '@mui/material/Pagination';
import {PaginationItem} from "@mui/material";
import {FaArrowLeft, FaArrowRight} from "react-icons/fa";

const CustomDesign = () =>{
    const category = useSearchParams().get('category')
    const page = useSearchParams().get('page')
    const router = useRouter()
    const {data , isLoading} = useQuery({
        queryKey : ['product' , category , page],
        queryFn : () => getAllProduct(page || '1' , '' , '6' , category || '')
    })
    const {data : categoryName} = useQuery({
        queryKey : [category , 'category'],
        queryFn : () => getCategoryById(category || '')
    })
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        router.push(`/products?page=${value}&category=${category}`)
    };
    return(
        <div className="w-full min-h-screen p-5 flex flex-col">
            {
                isLoading && <div className="w-full h-screen flex items-center justify-center">
                    <Spinner className="h-16 w-16 text-gray-900/50" color="red"/>
                </div>
            }
            <Navigation/>
            <div className={'w-full flex items-center justify-between my-4'}>
                <p className={'text-lg text-red-custom font-bold'}>
                    دسته بندی : {categoryName?.data.data.category.name}
                </p>
            </div>
            <div className={'w-full flex gap-4 flex-grow'}>
                <div className={'w-1/4 hidden md:block px-3'}>
                    <div className={'w-full p-2 rounded-lg border'}>
                        <div className={'w-full flex items-center justify-between'}>
                            <p className={'text-gray-500 text-sm'}>
                                فیلتر ها
                            </p>
                            <button className={'text-red-custom text-sm'}>
                                حذف فیلتر
                            </button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {
                        data?.data.data.products.map(item => <CartProduct key={item._id} product={item}/>)
                    }
                </div>
            </div>
            <div className={'flex w-full justify-center my-5'}>
                <Pagination renderItem={(item)=>(
                    <PaginationItem
                        slots={{ previous: FaArrowRight, next: FaArrowLeft }}
                        {...item}
                    />
                )} className={'p-2 border rounded-3xl border-red-custom'} count={data?.data.total_pages || 1} color={'standard'} onChange={handleChange}/>
            </div>
        </div>
    )
}
export default CustomDesign