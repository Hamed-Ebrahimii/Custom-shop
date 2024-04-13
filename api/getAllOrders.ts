import {Read} from "@/core/service/http-service";
import {Orders, ResponseApi} from "@/utils/types/global";

export const getAllOrders = async (page : string , filter : string) => {
    return  await Read<ResponseApi<Orders>>(`/api/orders?page=${page}&limit=4${filter && filter === 'all' ? '' : filter === 'Orders are being shipped' ? '&deliveryStatus=false' : filter === 'Completed orders' ? '&deliveryStatus=true' : ''}`)

}