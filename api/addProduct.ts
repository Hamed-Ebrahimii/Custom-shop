import {Create} from "@/core/service/http-service";
import {Product, ResponseApi} from "@/utils/types/global";
export const addProduct = async (data : FormData) =>{

    return await Create<ResponseApi<Product> , FormData>('/api/products' , data)

}