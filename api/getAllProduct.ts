import {Read} from "@/core/service/http-service";
import {ResponseProduct} from "@/utils/types/global";

export const getAllProduct = async (page : string = "1" , filter? : string  , perPage? : string) =>{
    return  await Read<ResponseProduct>(`api/products?page=${page ? page : '1'}&limit=${perPage ? perPage : '4'}&fields=-rating,-createdAt,-updatedAt,-__v&sort=${filter !== "all" && filter ? filter : 'price'}&quantity[gte]=8`)
}