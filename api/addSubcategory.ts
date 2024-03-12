import { Create } from "@/core/service/http-service";
import { subcategoryValidationType } from "@/utils/validation/subcategory-validation";

export const addSubcategory = async (data : subcategoryValidationType) =>{
    return await Create('/api/subcategories' , data)
}