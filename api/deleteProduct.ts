import { Delete } from "@/core/service/http-service"

export const deleteProduct = async (id : string) =>{
    return await Delete(`/api/products/${id}`)
}