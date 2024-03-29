import { addCategory } from "@/api/addCategory"
import { categoryValidation, typeCategoryValidation } from "@/utils/validation/category-validation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input, Textarea } from "@material-tailwind/react"
import { useMutation } from "@tanstack/react-query"
import { Controller, useForm } from "react-hook-form"
import { IoMdCloseCircleOutline } from "react-icons/io"

const AddCategory = ({setOpenModal , refetch} : {setOpenModal : (value : boolean)=> void , refetch : ()=> void}) =>{
    const {handleSubmit , formState : {errors} , control} = useForm<typeCategoryValidation>({
        mode : 'onBlur',
        resolver : zodResolver(categoryValidation)
    })
    const {mutate , isPending} = useMutation({
        mutationFn : (data : FormData) => addCategory(data),
        onSuccess : () => {
            refetch()
            setOpenModal(false)
        }
    })
    const onSubmit = (data : typeCategoryValidation) =>{
        const formdata = new FormData()
        formdata.append('name' , data.name)
        if(data.icon){
            formdata.append('icon' , data.icon)
        }
        mutate(formdata)
    }
    return(
        <div className="w-1/3 rounded-lg bg-white shadow-sm py-4 px-5">
                <div>
                <button onClick={()=> setOpenModal(false)}>
                <IoMdCloseCircleOutline className={'size-5'}/>
            </button>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className={'w-full  items-end space-y-8 mt-6 '}>
                <div className={'w-full grid grid-rows-2 grid-cols-1 gap-3'}>
                    <div className={'w-full'}>
                       <Controller  control={control} render={({field})=>(
                           <Input {...field} crossOrigin={''} color={'blue-gray'} variant="standard" label="نام محصول"
                                  placeholder="نام دسته بندی"/>
                       )} name={'name'}/>
                    </div>
                    
                    <div className="mb-3 w-full">
                        <label
                            htmlFor="formFileSm"
                            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >
                            بارگذاری عکس اصلی
                        </label>
                        <Controller control={control} render={({field})=> (
                            <input
                                className="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-xs font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                id="formFileSm"
                                type="file"
                                onChange={(event)=> {
                                    const file = Array.from(event.target.files || [])
                                    field.onChange(file[0])
                                }}
                            />
                            
                        )} name={'icon'}/>

                    </div>
                </div>
                
               
                <Button loading={isPending} placeholder={''} type={'submit'} size="sm">اضافه کردن</Button>
            </form>
        </div>
    )
}
export default AddCategory