import { Update } from "@/core/service/http-service"
export const editOrderById = async (orderId: string , data : boolean) =>{
    return await Update(`/api/orders/${orderId}` , {deliveryStatus : data})
}