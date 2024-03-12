import { Read } from "@/core/service/http-service"
import { ResponseApi, ResponseCategory } from "@/utils/types/global"

export const getCategoryById = async (id : string) =>{
     return await Read<ResponseApi<ResponseCategory>>(`api/categories/${id}`)
}