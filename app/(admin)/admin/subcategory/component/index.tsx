import { addCategory } from "@/api/addCategory"
import { addSubcategory } from "@/api/addSubcategory"
import { getAllCategories } from "@/api/getAllCategories"
import { categoryValidation, typeCategoryValidation } from "@/utils/validation/category-validation"
import { subcategoryValidation, subcategoryValidationType } from "@/utils/validation/subcategory-validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Option, Select } from "@material-tailwind/react"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Controller, useForm } from "react-hook-form"
import { IoMdCloseCircleOutline } from "react-icons/io"

const AddSubCategory = ({setOpenModal , refetch} : {setOpenModal : (value : boolean)=> void , refetch : ()=> void}) =>{
    const {handleSubmit , formState : {errors} , control} = useForm<subcategoryValidationType>({
        mode : 'onBlur',
        resolver : zodResolver(subcategoryValidation)
    })
    const {mutate , isPending} = useMutation({
        mutationFn : (data : subcategoryValidationType) => addSubcategory(data),
        onSuccess : () => {
            refetch()
            setOpenModal(false)
        }
    })
    const onSubmit = (data : subcategoryValidationType) =>{
        
        mutate(data)
    }
    const {data , isLoading} = useQuery({
        queryKey : ['category'],
        queryFn : () => getAllCategories()
    })
    return(
        <div className="w-1/3 rounded-lg bg-white shadow-sm py-4 px-5">
                <div>
                <button onClick={()=> setOpenModal(false)}>
                <IoMdCloseCircleOutline className={'size-5'}/>
            </button>
                </div>
                <div>
                    <p className="text-xl font-bold text-gray-700 text-center">اضافه کردن زیرمجموعه دسته بندی</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={'w-full  items-end space-y-8 mt-6 '}>
                <div className={'w-full grid grid-rows-2 grid-cols-1 gap-3'}>
                    <div className={'w-full'}>
                       <Controller  control={control} render={({field})=>(
                           <Input  {...field} crossOrigin={''} color={'blue-gray'} variant="standard" label="نام "
                                  placeholder="نام "/>
                       )} name={'name'}/>
                    </div>
                    
                    <div className="mb-3 w-full">
                        
                        <Controller control={control} render={({field})=> (
                            <Select disabled={isLoading} placeholder={''} onChange={(e)=>{
                                field.onChange(e)
                            }} variant="standard" label="دسته بندی را انتخاب کنید">
                            { data ? data?.data.data.categories.map(item => <Option key={item._id} value={item._id}>{item.name}</Option>) : ''}
                          </Select>
                            
                        )} name={'category'}/>

                    </div>
                </div>
                
               
                <Button loading={isPending} placeholder={''} type={'submit'} size="sm">اضافه کردن</Button>
            </form>
        </div>
    )
}
export default AddSubCategory