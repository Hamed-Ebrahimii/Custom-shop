import { Create } from "@/core/service/http-service"
import { ICategory } from "@/utils/types/global"

export const addCategory = async (data : FormData) =>{
    return await Create<ICategory , FormData>('/api/categories' , data)
}