import {getProductById} from "@/api/getProductById";

interface Iprops {
    product : string,
    count : number
}
export const totalPrice = async (data : Iprops[])=>{
    let sum = 0
    for (const item of data) {
        const res = await getProductById(item.product)
        const number = res.data.data.product.price * item.count
        sum+=number
    }
    return sum
}