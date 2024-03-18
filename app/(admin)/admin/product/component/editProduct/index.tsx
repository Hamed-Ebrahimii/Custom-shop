import {Controller, useForm} from "react-hook-form";
import {IoMdCloseCircleOutline} from "react-icons/io";
import {Breadcrumbs, Button, Input, Option, Select, Textarea} from "@material-tailwind/react";
import {zodResolver} from "@hookform/resolvers/zod";
import {useMutation, useQuery} from "@tanstack/react-query";
import {getAllCategories} from "@/api/getAllCategories";
import {useState} from "react";
import {getSubcategoryByCategoryID} from "@/core/action/getSubcategoryByCategoryID";
import { EditProductValidation, EditProductValidationType } from "@/utils/validation/edit-product-validation";
import { editProduct } from "@/api/editProduct";
import { EditProduct } from "@/utils/types/global";
import { useEffect } from "react";
import TextEditor from "../addProduct/component/textEditor";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";

const EditProductModal = ({setOpenModal , product , id , refetch} : {setOpenModal : (data : boolean) => void , product : EditProduct , id : string  , refetch : ()=> void}) =>{
    const [disable , setDisable] = useState(true)
    const [idCategory , setIdCategory] = useState('')
    const [level , setLevel] = useState(1)
    const {control  , handleSubmit , formState : {errors}} = useForm<EditProductValidationType>({
        mode : "onBlur",
        resolver : zodResolver(EditProductValidation),
        defaultValues : {
            name: product.name,
            category: product.category,
            brand: product.brand,
            subcategory: product.subcategory,
            price: String(product.price),
            quantity: String(product.quantity),
            description: product.description,
        }
    
    })
    const {data : category} = useQuery({
        queryKey : ['category'],
        queryFn : () => getAllCategories()
    })
    const {data : subCategory , isLoading} = useQuery({
        queryKey : ['SubCategory' , idCategory],
        queryFn : () => getSubcategoryByCategoryID(idCategory)
    })
    const {isPending  , mutate} = useMutation({
        mutationKey : ['product'] ,
        mutationFn : (data : FormData  ) => editProduct(data , id),
        onSuccess : () =>{
            refetch()
            setOpenModal(false)
        }
    })
    const onSubmit = async (data : EditProductValidationType) =>{ 
        const formData = new FormData()
       data.name && formData.append("name"  , data.name)
       data.brand && formData.append("brand"  , data.brand)
       data.description && formData.append("description"  , data.description)
       data.category && formData.append("category"  , data.category)
       data.subcategory && formData.append("subcategory" ,data.subcategory)
       data.thumbnail && formData.append("thumbnail" , data.thumbnail , data.thumbnail.name)
       data.price && formData.append("price" , data.price)
       data.quantity &&  formData.append("quantity" , data.quantity)
       data.images && data.images.forEach(item =>{
            formData.append("images" , item  , item.name)
        })
        
       mutate(formData)
    }
    useEffect(()=>{
        console.log(errors
            );
        
    } , [errors])
    return(
        <div className={'w-6/12 py-4 px-6 bg-white rounded-lg'}>
        <button onClick={()=> setOpenModal(false)}>
            <IoMdCloseCircleOutline className={'size-5'}/>
        </button>
        <p className={'text-xl font-bold text-gray-800 text-center'}>
            اضافه کردن محصول
        </p>
        <div className="w-full flex justify-center">
        <Breadcrumbs 
        placeholder={''}
        separator={
        <ArrowLongRightIcon className="h-4 w-4 text-white" strokeWidth={2.5} />
            }
        className="rounded-full border mx-auto mt-4 mb-3 border-white bg-gradient-to-tr from-gray-900 to-gray-800 p-1"
    >
   <button
  onClick={()=> setLevel(3)}
    className={`rounded-full bg-white px-3 py-1 font-medium text-gray-900 ${errors.description?.message ? 'border border-red-500' : ''}`}
  >
    توضیحات محصول
  </button>
  <button
  onClick={()=> setLevel(2)}
    className={`rounded-full bg-white px-3 py-1 font-medium text-gray-900 ${errors.category?.message || errors.subcategory?.message || errors.images?.message || errors.thumbnail?.message ? 'border border-red-500' : ''}`}
  >
    دسته بندی و عکس
  </button>
 
  <button onClick={()=> setLevel(1)}
    className={`rounded-full bg-white px-3 py-1 font-medium text-gray-900 ${errors.brand?.message || errors.name?.message || errors.quantity?.message || errors.price?.message ? 'border border-red-500' : ''}`}
  >
    مشخصات قیمت و پایه
  </button>
        </Breadcrumbs>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={'w-full  items-end space-y-8 mt-6 '}>
            {
                level ===1 && <div className={'w-full grid grid-rows-2 grid-cols-2 gap-3'}>
                <div className={'w-full'}>
                   <Controller  control={control} render={({field})=>(
                       <Input {...field} crossOrigin={''} color={'blue-gray'} variant="standard" label="نام محصول"
                              placeholder="نام محصول"/>
                   )} name={'name'}/>
                   {errors.name?.message && <p className="text-sm text-red-500">*{errors.name.message}</p>}
                </div>
                <div className={'w-full'}>
                    <Controller  control={control} render={({field})=>(
                        <Input {...field} crossOrigin={''} color={'blue-gray'} variant="standard" label="برند محصول"
                               placeholder="برند محصول"/>
                    )} name={'brand'}/>
                    {errors.brand?.message && <p className="text-sm text-red-500">*{errors.brand.message}</p>}
                </div>
                <div className={'w-full'}>
                    <Controller  control={control} render={({field})=>(
                        <Input {...field} type={'number'} crossOrigin={''} color={'blue-gray'} variant="standard"
                               label="تعداد محصول"
                               placeholder="تهداد محصول"/>
                    )} name={'quantity'}/>
                    {errors.quantity?.message && <p className="text-sm text-red-500">*{errors.quantity.message}</p>}
                </div>
                <div className={'w-full'}>
                    <Controller  control={control} render={({field})=>(
                        <Input {...field} type={'number'} crossOrigin={''} color={'blue-gray'} variant="standard"
                               label="قیمت محصول"
                               placeholder="قیمت محصول"/>
                    )} name={'price'}/>
                    {errors.price?.message && <p className="text-sm text-red-500">*{errors.price.message}</p>}
                </div>
            </div>
            }
            {
                level ===2 && <>
                    <div className={'w-full grid grid-cols-2 grid-rows-1 gap-4'}>
                <div className="mb-3 w-full">
                    <label
                        htmlFor="formFileSm"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >
                        بارگذاری عکس اصلی
                    </label>
                    <Controller  control={control} render={({field})=> (
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            id="formFileSm"
                            type="file"
                            onChange={(event)=> {
                                const file = Array.from(event.target.files || [])
                                field.onChange(file[0])
                            }}
                        />
                    )} name={'thumbnail'}/>
                    {errors.thumbnail?.message && <p className="text-sm text-red-500">*{errors.thumbnail.message}</p>}
                </div>
                <div className="mb-3 w-full">
                    <label
                        htmlFor="formFileSm"
                        className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                    >
                        بارگذاری عکس های محصول
                    </label>
                    <Controller control={control}  render={({field}) => (
                        <input
                            className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                            id="formFileSm"
                            type="file"
                            multiple={true}
                            onChange={(e)=>{
                                const file = Array.from(e.target.files || [])
                                field.onChange(file)
                            }}
                        />
                    )} name={'images'}/>
                    {errors.images?.message && <p className="text-sm text-red-500">*{errors.images.message}</p>}
                </div>
            </div>
            <div className={'w-full grid grid-cols-2 grid-rows-1 gap-4 '}>
                <div className={'w-full'}>
                   <Controller render={({field})=>(
                       <Select onChange={(e => {
                           console.log(e)
                           setIdCategory(e || '')
                           setDisable(false)
                           field.onChange(e)

                       })} placeholder={''} variant="standard" label="دسته بندی محصول را انتخاب کنید" >
                           {
                              category?.data.data.categories ?  category?.data.data.categories.map(item => <Option value={item._id} key={item._id}>{item.name}</Option>) : <Option>لطفا صبر کنید</Option>
                           }
                       </Select>
                   )} name={'category'} control={control}/>
                   {errors.category?.message && <p className="text-sm text-red-500">*{errors.category.message}</p>}
                </div>
                <div className={'w-full'}>
                   <Controller render={({field})=>(
                       <Select {...field} disabled={disable || isLoading}  placeholder={''} variant="standard" label="زیر مجموعه دسته بندی را انتخاب کنید">
                           {
                             subCategory ?  subCategory?.map(item => <Option value={item._id} key={item._id}>{item.name}</Option>) : <Option>لطفا صبر کنید</Option>
                           }
                       </Select>
                   )} name={'subcategory'} control={control}/>
                   {errors.subcategory?.message && <p className="text-sm text-red-500">*{errors.subcategory.message}</p>}
                </div>
            </div>
                </>
            }
            {
                level ===3 && <div className="relative w-full " dir={'rtl'}>
                <Controller control={control} render={({field}) => (
                   <TextEditor description={product.description} onChange={field.onChange}/>
                )} name={'description'}/>
                {errors.description?.message && <p className="text-sm text-red-500">*{errors.description.message}</p>}
            </div>
            }
            <Button onClick={()=> level < 3 && setLevel(level + 1)} loading={isPending} placeholder={''} type={level <= 3 ? 'button' : 'submit'} size="sm">{level === 3 ? 'اضافه کردن' : 'بعدی'}</Button>
        </form>
    </div>
    )
}
export default EditProductModal