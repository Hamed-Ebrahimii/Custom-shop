import {getAllOrders} from "@/api/getAllOrders";
import {Orders, ResponseApi} from "@/utils/types/global";
import {getUserById} from "@/api/getUserById";
import {getProductById} from "@/api/getProductById";
export const EditResponseOrder = async (page : string , filter? : string) =>{
    const response = await getAllOrders(page , '')
    let newListOrders : Orders = {
        orders : []
    }
    const newOrder =
    {
        user : '',
            products : [
        {
            _id : '',
            product : '',
            count : 0
        }
    ],
        deliveryStatus : false,
        _id : '',
        createdAt : '',
        deliveryDate : '',
        totalPrice : 0,
        updatedAt : ''
    }
    response.data.data.orders.map(async (item) =>{
        newOrder._id = item._id
        newOrder.createdAt = item.createdAt
        newOrder.deliveryDate = item.deliveryDate
        newOrder.updatedAt = item.updatedAt
        newOrder.totalPrice = item.totalPrice
        const username = await getUserById(item.user)
         item.products.map(async (product)=>{
           const productItem = await getProductById(product.product)

             newOrder.products.push({product:  productItem.data.data.product.name || ''  , _id: product._id , count: product.count})
       })
       newOrder.user =  username.data.data.user.username
       newOrder.deliveryStatus = item.deliveryStatus
        newListOrders.orders = [...newListOrders.orders , newOrder]
    })

    if (filter){
        newListOrders.orders = [...response.data.data.orders.filter(item => filter === 'Orders are being shipped' ? !item.deliveryStatus : item.deliveryStatus)]
    }
    const responseApi : ResponseApi<Orders> = {
        page : response.data.page,
        per_page : response.data.per_page,
        data : newListOrders,
        status : response.data.status,
        total : response.data.total,
        total_pages : response.data.total_pages
    }

    return responseApi
}