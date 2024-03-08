import {Read} from "@/core/service/http-service";
import {ResponseApi, User} from "@/utils/types/global";

export const getUserById = async (id:string) =>{
    return await Read<ResponseApi<User>>(`/api/users/${id}`);
}