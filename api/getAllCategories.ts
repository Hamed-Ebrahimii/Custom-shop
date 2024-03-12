import {Read} from "@/core/service/http-service";
import {Category, ResponseApi} from "@/utils/types/global";

export const getAllCategories = async (page? : string , limit? : string) =>{
    return await Read<ResponseApi<Category>>(`/api/categories${page ? '?page=' + page : ''}${limit ? '&limit=' + limit : ''}`)
}