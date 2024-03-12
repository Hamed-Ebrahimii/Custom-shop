"use client"
import { PencilIcon} from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import {EditProduct, Product} from "@/utils/types/global";
import {useQuery} from "@tanstack/react-query";
import {getAllCategories} from "@/api/getAllCategories";
import {getAllSubcategories} from "@/api/getAllSubcategories";
import {TrashIcon} from "@heroicons/react/16/solid";
import { useState } from "react";
import Modal from "@/component/modal";
import EditProductModal from "../../product/component/editProduct";



export function Table({tableHeade  , tableRow , refetch} : {tableHeade : string[] ,tableRow : Product[] , refetch : ()=> void }) {
    const {data} = useQuery({
        queryKey : ['category'],
        queryFn : () => getAllCategories()
    })
    const {data : subcategoryList} = useQuery({
        queryKey : ['subcategory'],
        queryFn : () => getAllSubcategories()
    })
    const [editMode , setEditMode] = useState(false)
    const [id , setId] = useState('')
    const [product , setProduct] = useState<EditProduct>()
    const handleProduct = (product : Product) =>{
        
            setProduct((preveState)=>{
                const productObj : EditProduct = {
                    brand : product.brand,
                    category : product.category,
                    description : product.description,
                    price : product.price,
                    name : product.name,
                    quantity : product.quantity,
                    

                }
                setId(product._id)
                return productObj
            })
            setEditMode(true)
    }
    return (
        <>      
        {editMode && <Modal isOpen={editMode}>
                    <EditProductModal refetch={refetch} setOpenModal={setEditMode}  id={id} product={product!} />
                </Modal>
        }
          <Card placeholder={''} className="w-full mt-10">
            <CardBody placeholder={''} className="overflow-auto px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {tableHeade.map((head) => (
                            <th
                                key={head}
                                className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                            >
                                <Typography
                                    placeholder={''}
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {tableRow.map(
                        ({name , subcategory , category , brand , thumbnail , price , quantity  , description , _id , images , slugname }, index) => {
                            const isLast = index === tableRow.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                            const nameCategory = data?.data.data.categories.find(item => item._id === category)
                            const subCategoryName = subcategoryList?.data.data.subcategories.find(item => item._id === subcategory)
                            return (
                                <tr key={name}>
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
                                    <td className={classes} >
                                        <Typography
                                            placeholder={''}
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal opacity-70"
                                        >
                                            {brand}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <Typography
                                                placeholder={''}
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {quantity}
                                            </Typography>

                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            placeholder={''}
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal opacity-70"
                                        >
                                            {nameCategory?.name || ''}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <div>
                                            <Typography
                                                placeholder={''}
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal opacity-70"
                                            >
                                                {subCategoryName?.name || ''}
                                            </Typography>
                                        </div>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            placeholder={''}
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {price}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Tooltip content="ویرایش محصول">
                                            <IconButton onClick={()=>handleProduct({name , brand , category , description , price , quantity , _id , images , slugname , subcategory , thumbnail})} placeholder={''} variant="text">
                                                <PencilIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip content="حذف محصول">
                                            <IconButton placeholder={''} variant="text">
                                                <TrashIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        },
                    )}
                    </tbody>
                </table>
            </CardBody>

        </Card>
        </>

    );
}
export default Table