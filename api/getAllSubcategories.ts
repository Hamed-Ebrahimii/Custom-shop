import {Read} from "@/core/service/http-service";
import {ResponseApi, SubCategories} from "@/utils/types/global";

export const getAllSubcategories = async (page? : string , limit? : string) =>{
    return await Read<ResponseApi<SubCategories>>(`/api/subcategories?${page ? 'page=' + page : ''}${limit ? '&limit=' +limit : ''}`)
}