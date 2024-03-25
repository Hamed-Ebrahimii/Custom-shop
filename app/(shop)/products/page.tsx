"use client"
import { getAllProduct } from "@/api/getAllProduct"
import { Spinner } from "@material-tailwind/react"
import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import CartProduct from "../component/cart-product"

const CustomDesign = () =>{
    const category = useSearchParams().get('category')
    const {data , isLoading} = useQuery({
        queryKey : ['product' , category],
        queryFn : () => getAllProduct('1' , '' , '' , category || '')
    })
    return(
        <div className="w-full min-h-screen p-5">
            {
                isLoading && <div className="w-full h-screen flex items-center justify-center">
                    <Spinner className="h-16 w-16 text-gray-900/50" color="red"/>
                </div>
            }
            <div className="grid grid-cols-2 gap-4">   
            {
                data?.data.data.products.map(item => <CartProduct key={item._id} product={item}/>)
            }
            </div>
        </div>
    )
}
export default CustomDesign