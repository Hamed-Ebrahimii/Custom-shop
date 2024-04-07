import {AddOrder} from "@/utils/types/global";
import {Create} from "@/core/service/http-service";

export const addOrderApi = async (data : AddOrder) =>{
    return await Create('/api/orders' , data)
}