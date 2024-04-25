import { editOrderById } from "@/api/editOrder"
import { getOrderById } from "@/api/getOrderById"
import { Avatar, Button, Typography } from "@material-tailwind/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useEffect } from "react"
import { IoMdCloseCircleOutline } from "react-icons/io"

const Info = ({id  , close} : {id : string , close : (value : boolean) => void}) =>{
        const {data , refetch} = useQuery({
            queryKey : [id] ,
            queryFn : ()=> getOrderById(id)
        })
       
        const handleDelivery = async (value : boolean) =>{
            
          await editOrderById(id , value)
            refetch()
        }
        return(
            <div className="w-8/12 py-4 px-5 rounded-lg bg-white">
                 <button onClick={() => close(false)}>
                <IoMdCloseCircleOutline className={'size-5'} />
            </button>
                <div className="w-full grid grid-cols-2">
                    <div className="w-full space-x-5 flex items-center justify-start gap-3">
                        <p className="text-lg text-blue-gray-600 font-medium">
                            نام خریدار :‌
                        </p>
                        <p className="text-sm text-blue-gray-600 font-medium">
                            {
                                data?.data.data.order.user?.firstname && + " " + data?.data.data.order.user?.lastname
                            }
                        </p>
                    </div>
                    <div className="w-full space-x-5 flex items-center justify-start gap-3">
                        <p className="text-lg text-blue-gray-600 font-medium">
                            شماره تماس :
                        </p>
                        <p className="text-sm text-blue-gray-600 font-medium">
                            {
                                data?.data.data.order.user.phoneNumber
                            }
                        </p>
                        
                    </div>
                    <div className="w-full space-x-5 flex items-center justify-start gap-3">
                        <p className="text-lg text-blue-gray-600 font-medium">
                            آدرس
                        </p>
                        <p className="text-sm text-blue-gray-600 font-medium">
                            {
                                data?.data.data.order.user.address
                            }
                        </p>
                    </div>
                    <div className="w-full space-x-5 flex items-center justify-start gap-3">
                        <p className="text-lg text-blue-gray-600 font-medium">
                            وضیعت سفارش
                        </p>
                        <p className="text-sm text-blue-gray-600 font-medium">
                            {
                                data?.data.data.order.deliveryStatus  ? "تحویل داده شده است " : "در حال ارسال است "
                            }
                        </p>
                    </div>
                </div>
                <div className="w-full  max-h-48 overflow-auto space-y-5">
                            {
                                data?.data.data.order.products.map(({product : {thumbnail , name , price , _id} , count}) => (
                                    <div  key={_id} className="w-full py-3 px-5 border rounded-lg grid grid-cols-4 gap-4">
                                            <Avatar placeholder={''} src={'http://127.0.0.1:8000/images/products/thumbnails/'+thumbnail} alt={name} size="sm" />
                                            <Typography
                                            placeholder={''}
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        > 
                                            نام :
                                            {name}
                                        </Typography>
                                        <Typography
                                            placeholder={''}
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        > 
                                            قیمت :
                                            {price}
                                        </Typography>
                                        <Typography
                                            placeholder={''}
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            تعداد :‌
                                            {count}
                                        </Typography>
                                    </div>
                                ))
                            }
                </div>
               <div className="mx-auto flex items-center justify-center">
               <Button
                 placeholder={''}
                 className="mx-auto mt-6"
                 onClick={()=>handleDelivery(!data?.data.data.order.deliveryStatus)}
                >
                    {data?.data.data.order.deliveryStatus ? 'سفارش ارسال شده است' : 'سفارش درحال ارسال است '}
                </Button>
               </div>
            </div>
        )

}
export default Info