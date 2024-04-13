import { User } from "@/utils/types/global";
import { FaRegUser } from "react-icons/fa6";
import { IoIosCall, IoMdArrowDropleft } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";

const AddressBox = ({user} : {user : User}) =>{
    return(
        <div className="w-full px-4 py-9 flex border rounded-xl">
                <div className="w-3/4 flex flex-col justify-between">
                    
                    <div className="grid grid-cols-2 gap-y-4 grid-rows-1">
                        <div className="flex items-center gap-2">
                        <IoLocationOutline  className="size-4"/>
                        {user.user.address}
                        </div>
                        <div className="flex items-center gap-2">
                        <IoIosCall className="size-4"/>
                        {user.user.phoneNumber}
                        </div>

                        <div className="flex items-center gap-2">
                        <FaRegUser className="size-4"/>
                        {user.user.firstname} {user.user.lastname}
                        </div>
                    </div>
                    
                </div>
                <div className="w-1/4 flex items-end justify-end">
                            <button className="px-4 py-2 flex items-center text-gray-700 gap-2 rounded-lg border border-red-custom font-yekan">
                                ویرایش
                                <IoMdArrowDropleft className="text-gray-700"/>
                            </button>
                    </div>
        </div>
    )
}
export default AddressBox