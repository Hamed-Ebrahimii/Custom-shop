import {Read} from "@/core/service/http-service";
import {ResponseApi, SubCategories} from "@/utils/types/global";

export const getAllSubcategories = async () =>{
    return await Read<ResponseApi<SubCategories>>('/api/subcategories')
}