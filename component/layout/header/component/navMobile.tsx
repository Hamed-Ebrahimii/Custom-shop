import { Category } from "@/utils/types/global"
import { IoMdClose } from "react-icons/io"
import CategoryItem from "./categoryItem"
const NavMobile = ({setNaveMobile , category} : {setNaveMobile : (value : boolean) => void , category : Category}) =>{

    return(
        <div className="w-full fixed top-0 right-0 bg-white h-screen p-5 z-50">
            <div>
                <button onClick={()=> setNaveMobile(false)}>
                <IoMdClose />
                </button>
                <div className="mt-5 w-full space-y-8">
                        {
                            category.categories.map(item => <CategoryItem setNaveMobile={setNaveMobile} key={item._id} name={item.name} id={item._id}/>)
                        }
                </div>
            </div>
        </div>
    )
}
export default NavMobile