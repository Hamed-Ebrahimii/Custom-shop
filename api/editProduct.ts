import {EditProduct} from "@/utils/types/global";
import {Update} from "@/core/service/http-service";
export const editProduct = async (product: EditProduct , id : string) =>{
   return  Update(`/api/products/${id}` , product)
}