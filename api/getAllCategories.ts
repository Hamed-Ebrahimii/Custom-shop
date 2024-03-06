import {Read} from "@/core/service/http-service";
import {Category, ResponseApi} from "@/utils/types/global";

export const getAllCategories = async () =>{
    return await Read<ResponseApi<Category>>('/api/categories')
}