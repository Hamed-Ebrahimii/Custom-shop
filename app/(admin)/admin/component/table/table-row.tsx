import {Avatar, Typography} from "@material-tailwind/react";

import {Product} from "@/utils/types/global";
import {useEffect, useState} from "react";
import {Update} from "@/core/service/http-service";

interface Iedit {
    _id? : string,
    price : string,
    quantity : string,
    userId : string
}
const TableRow = ({tableRow , setEdite , edit} : {tableRow : Product[] ,  setEdite : (value : boolean)=> void , edit : boolean }) =>{
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
                price : String(price),
                userId : sessionStorage.getItem('userId') || '6601754a952f2b90104cca0a'
            }
            setProduct([...product , productItem])
        }
        else {
            let productItem =  {...findProduct , quantity : quantity}
            setProduct((prevState)=>{
                const filter = prevState.filter(item => item._id !== id)
                return [...filter , productItem]
            })
        }
    }
    const handlePrice  = (id : string , quantity : number , price : string ) =>{
        if (!price) return
        const findProduct = product.find(item => item._id === id)
        if (!findProduct){
            const productItem : Iedit = {
                _id : id,
                quantity : String(quantity),
                price : String(price),
                userId : sessionStorage.getItem('userId') || '6601754a952f2b90104cca0a'
            }
            setProduct([...product , productItem])
        }
        else {
            let productItem =  {...findProduct , price : price}
            setProduct((prevState)=>{
                const filter = prevState.filter(item => item._id !== id)
                return [...filter , productItem]
        })
        }
    }
    useEffect(() => {
            console.log(product)
        if (edit && product.length !== 0) {
            const promise = product.map(item =>(
                Update<Product , Iedit>(`/api/products/${item._id}` , {price : item.price , quantity : item.quantity , userId : item.userId})
            ))
            Promise.all(promise).then((result) =>{
                console.log(result)
            })
        }
    }, [edit]);
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
                                     !edit &&  quantityEdit.find(item => item === _id) ? <input type="number" min={0} defaultValue={quantity} onChange={(event)=> handleQuantity(_id , event.target.value , price)} className={'border-none outline-none w-full'} placeholder={`${quantity}`}/> : <p>{quantity}</p>
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
                                    {!edit && priceEdit.find(item => item === _id) ? <input type="number" min={0} defaultValue={price} onChange={(event)=> handlePrice(_id  , quantity , event.target.value)} className={'border-none outline-none w-full'} placeholder={`${price}`}/> : <p>{price}</p>}
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