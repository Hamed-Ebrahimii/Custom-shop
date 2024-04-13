import { Read } from "@/core/service/http-service"
import {  SingleOrder  , ResponseApi} from "@/utils/types/global"

export const getOrderById = async (orderId: string) =>{
    return await Read<ResponseApi<SingleOrder>>(`/api/orders/${orderId}`)
}