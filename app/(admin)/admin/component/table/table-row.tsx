import {Avatar, Typography} from "@material-tailwind/react";

import {Product} from "@/utils/types/global";
import { useState} from "react";

interface Iedit {
    _id : string,
    price : string,
    quantity : string,
}
const TableRow = ({tableRow , setEdite} : {tableRow : Product[] ,  setEdite : (value : boolean)=> void }) =>{
    const [product , setProduct] = useState<Iedit[]>([])
    const [priceEdit , setPriceEdit] = useState<string[]>([])
    const [quantityEdit , setQuantityEdit] = useState<string[]>([])
    const handleQuantity  = (id : string , quantity : string , price : number ) =>{
        if (!quantity) return
        const findProduct = product.find(item => item._id === id)
        if (!findProduct){
            const productItem : Iedit = {
                _id : id,
                quantity : quantity,
                price : String(price)
            }
            setProduct([...product , productItem])
        }
        else {
           let productItem =  {...findProduct , quantity : quantity}
            setProduct([...product , productItem])
        }
    }
    const handlePrice  = (id : string , quantity : number , price : string ) =>{
        if (!price) return
        const findProduct = product.find(item => item._id === id)
        if (!findProduct){
            const productItem : Iedit = {
                _id : id,
                quantity : String(quantity),
                price : String(price)
            }
            setProduct([...product , productItem])
        }
        else {
            let productItem =  {...findProduct , price : price}
            setProduct([...product , productItem])
        }
    }
    return(
        <>
        {tableRow.map(
                ({name  , thumbnail , price , quantity  , _id }, index) => {
                    const isLast = index === tableRow.length - 1;
                    const classes = isLast
                        ? "p-4 "
                        : "p-4 border-b border-blue-gray-50 ";

                    return (
                        <tr key={index}>
                            <td className={classes}>
                                <div className="flex items-center">
                                    <Avatar placeholder={''} src={'http://127.0.0.1:8000/images/products/thumbnails/'+thumbnail} alt={name} size="sm" />
                                </div>
                            </td>
                            <td className={classes}>
                                <Typography
                                    placeholder={''}
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {name}
                                </Typography>
                            </td>

                            <td className={classes} onClick={()=> {setQuantityEdit([...quantityEdit , _id]) ; setEdite(false)}}>
                                <div className="flex flex-col">
                                    {
                                        quantityEdit.find(item => item === _id) ? <input type="number" min={0} defaultValue={quantity} onChange={(event)=> handleQuantity(_id , event.target.value , price)} className={'border-none outline-none w-1/6'} placeholder={`${quantity}`}/> : <p>{quantity}</p>
                                    }

                                </div>
                            </td>
                            <td className={classes} onClick={()=>{ setPriceEdit([...priceEdit , _id]) ; setEdite(false)}}>
                                <Typography
                                    placeholder={''}
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {priceEdit.find(item => item === _id) ? <input type="number" min={0} defaultValue={price} onChange={(event)=> handlePrice(_id  , quantity , event.target.value)} className={'border-none outline-none w-1/6'} placeholder={`${price}`}/> : <p>{price}</p>}
                                </Typography>
                            </td>

                        </tr>
                    );
                },
            )}
        </>
    )
}
export default TableRow