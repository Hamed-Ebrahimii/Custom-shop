import {Read} from "@/core/service/http-service";
import {Product, ResponseApi, ResponseProduct, ResponseSingleProduct} from "@/utils/types/global";

export const getProductById = async (productId: string) =>{
     return  await Read<ResponseApi<ResponseSingleProduct>>(`/api/products/${productId}`)
}