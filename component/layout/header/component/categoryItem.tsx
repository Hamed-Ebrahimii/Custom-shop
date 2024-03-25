import { useRouter } from "next/navigation"
import { IoIosArrowBack } from "react-icons/io"

const CategoryItem = ({name , id , setNaveMobile} : {name : string , id : string , setNaveMobile : (value : boolean) => void}) =>{
    const router = useRouter()
    return(
        <div onClick={()=> { router.push(`/products?category=${id}`); setNaveMobile(false)}} className="w-full flex justify-between items-center">
                <p className="text-lg font-medium text-gray-600">
                    {name}
                </p>
                <button>
                <IoIosArrowBack />
                </button>
        </div>
    )
}
export default CategoryItem