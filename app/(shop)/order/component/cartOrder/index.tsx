"use client"
import {useQuery} from "@tanstack/react-query";
import {getProductById} from "@/api/getProductById";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {addOrder} from "@/redux/slice/orderSlice";
import {AddOrder} from "@/utils/types/global";
import Modal from "@/component/modal";
import ModalDelete from "@/app/(shop)/order/component/modaleDelete";

const CartOrder = ({id} : {id : string})=>{
    const {data} = useQuery({
        queryKey : [id],
        queryFn : ()=> getProductById(id)
    })
    const order = useSelector((data : RootState)=> data.order)
    const newOrder : AddOrder = JSON.parse(JSON.stringify(order))
    const [number , setNumber] = useState(newOrder.products.find(item => item.product === id)?.count || 0)
    const dispatch = useDispatch()
    const [openModal , setOpenModal ] = useState(false)
    const handlePlus = () =>{
        setNumber(number + 1)
        const product = order.products.find(item => item.product === id)
        const newProduct : {product : string , count : number} = {...product! ,count : number + 1 }
        const index = order.products.findIndex(item => item.product === id)
        newOrder.products.splice(index , 1 , newProduct)
        dispatch(addOrder({...newOrder}))
    }
    const handleMinus = () =>{
        if (number <= 1 ) {
            setOpenModal(true)
            return
        }
        setNumber(number - 1)
        const product = order.products.find(item => item.product === id)
        const newProduct : {product : string , count : number} = {...product! ,count : number - 1 }
        const index = order.products.findIndex(item => item.product === id)
        newOrder.products.splice(index , 1 , newProduct)
        dispatch(addOrder({...newOrder}))

    }
    const handleDelete = () =>{
        const product = order.products.find(item => item.product === id)
        const newProduct : {product : string , count : number} = {...product! ,count : number }
        const index = order.products.findIndex(item => item.product === id)
        newOrder.products.splice(index , 1 )
        dispatch(addOrder({...newOrder}))

    }
    const handelZeroNumber = () =>{
        setOpenModal(true)
    }
    return(
        <div className={'w-full border rounded-lg p-6 flex items-center gap-4'}>
            {
                 openModal && <Modal isOpen={openModal}>
                    <ModalDelete openModal={setOpenModal} deleteFn={handleDelete}/>
                </Modal>
            }
            <button onClick={handelZeroNumber}>
                <AiOutlineCloseCircle />
            </button>
            <div className={''}>
                <img src={"http://127.0.0.1:8000/images/products/images/" + data?.data.data.product?.images[0]} alt=""
                     className={'size-24 object-cover rounded-lg '}/>
            </div>
            <div className={'flex-1 flex items-center justify-center gap-3'}>
                <p className={'text-lg font-semibold  truncate w-8/12'}>
                    {
                        data?.data.data.product.name
                    }
                </p>
                <p className={'text-lg font-semibold '}>
                    {
                        data?.data.data.product.price
                    }
                    تومان
                </p>
            </div>
            <div className={'flex flex-col items-center justify-between'}>
                <div className={'w-20 border border-gray-400 flex rounded-xl items-center justify-center'}>
                    <button onClick={handleMinus} className={'size-8 border-l text-lg font-medium'}>
                        -
                    </button>
                    <p className={'flex-grow font-medium text-center'}>
                        {number}
                    </p>
                    <button className={'size-8 border-r   font-medium'} onClick={handlePlus}>
                        +
                    </button>
                </div>
            </div>
        </div>
    )
}
export default CartOrder