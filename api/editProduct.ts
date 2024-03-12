import {Update} from "@/core/service/http-service";
export const editProduct = async (product: FormData , id : string) =>{
   return  Update(`/api/products/${id}` , product)
}