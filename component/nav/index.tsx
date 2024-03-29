"use client"
import Pen from "@/component/nav/icon/pen";
import Link from "next/link";
import {getAllCategories} from "@/api/getAllCategories";
import {useQuery} from "@tanstack/react-query";

const Navigation =  () =>{
    const {data : category} = useQuery({
        queryKey : ['category'],
        queryFn : () => getAllCategories('1' , '6')
    })
    return(
        <div className={'container mx-auto hidden md:flex justify-evenly items-center py-8 '}>
            <button className={'py-3 px-5 flex gap-1 items-center bg-red-custom text-white font-medium rounded-lg'}>
                <Pen/>
                خودت فروشنده شو !
            </button>
            {
                category?.data.data.categories.map(item => <Link key={item._id} href={`/products?category=${item._id}`} className={'font-medium text-gray-800'}>{item.name}</Link>)
            }


        </div>
    )
}
export default Navigation