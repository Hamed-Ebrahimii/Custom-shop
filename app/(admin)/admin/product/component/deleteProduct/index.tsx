import { deleteProduct } from "@/api/deleteProduct"
import { Button } from "@material-tailwind/react"
import { useMutation } from "@tanstack/react-query"
import { IoMdCloseCircleOutline } from "react-icons/io"

const DeleteProduct = ({id , name , refetch , setOpenModal} : {id : string , name : string , setOpenModal : (value : boolean)=> void , refetch : ()=> void}) =>{
    const {mutate} = useMutation({
        mutationFn : () => deleteProduct(id),
        onSuccess : () => {
            refetch()
            setOpenModal(false)
        }
    })
    return(
        <div className="w-1/2 bg-white rounded-lg p-4 shadow-md">
                <div className="w-full space-y-4" >
                <button onClick={()=> setOpenModal(false)}>
                <IoMdCloseCircleOutline className={'size-5'}/>
            </button>
            <p className={'text-xl font-bold text-red-500 text-center'}>
                اخطار!
            </p>
                </div>
                <div>
                    <p className="text-lg font-medium text-gray-500 text-center mt-4">
                        آیا مطمعن هستید که میخواهید محصول <span>{name}</span> را پاک کنید ؟
                    </p>
                </div>
                <div className="mt-4 w-full flex items-center gap-3 justify-center ">
                        <Button placeholder={''} color="red" onClick={()=> mutate()}>
                            حذف!
                        </Button>
                        <Button placeholder={''} onClick={()=> setOpenModal(false)}>
                            انصراف
                        </Button>
                </div>
        </div>
    )
}
export default DeleteProduct