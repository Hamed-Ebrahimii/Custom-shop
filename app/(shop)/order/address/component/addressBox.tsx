import { User } from "@/utils/types/global";

const AddressBox = ({user} : {user : User}) =>{
    return(
        <div className="w-full px-4 py-2 border rounded-xl">
                <div className="w-3/4 flex flex-col justify-between">
                    <p className="text-lg font-medium text-gray-400">
                        {user.user.address}
                    </p>
                </div>
        </div>
    )
}
export default AddressBox