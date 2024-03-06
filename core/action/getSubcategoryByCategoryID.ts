import {getAllSubcategories} from "@/api/getAllSubcategories";

export const getSubcategoryByCategoryID = async (id : string)=>{
    const response = await getAllSubcategories()
    console.log(response)
    return  response.data.data.subcategories.filter(item => item.category === id)
}