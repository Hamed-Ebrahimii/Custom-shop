"use client"
import {Button, CardFooter, CardHeader, Input,Typography} from "@material-tailwind/react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useQuery} from "@tanstack/react-query";
import { useRouter, useSearchParams} from "next/navigation";
import { MdCategory } from "react-icons/md";
import {useState} from "react";
import Modal from "@/component/modal";
import Loading from "@/component/loading/loading";
import { getAllCategories } from "@/api/getAllCategories";
import TableCategory from "../component/table/tableCategory";
import AddCategory from "./component/addCategory";

const Category = () =>{
    const params = useSearchParams()
    const page = params.get('page') || '1'
    const [openModal , setOpenModal] = useState(false)
    const {data , isLoading , refetch} = useQuery({
        queryKey : [page],
        queryFn : () => getAllCategories(page || undefined , '4')
    })
    const router = useRouter()
    return(
        <>
            {
                openModal && <Modal isOpen={openModal}>
                    <AddCategory refetch={refetch} setOpenModal={setOpenModal}/>
                </Modal>
            }
        <div className={'w-full bg-white p-5'}>
            <CardHeader placeholder={''} floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography placeholder={''} variant="h5" color="blue-gray">
                            لیست دسته بندی
                        </Typography>
                        <Typography placeholder={''} color="gray" className="mt-1 font-normal">
                            در این قسمت لیست تمامی دسته بندی سایت رو مشاهده میکنید
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

                        <Button placeholder={''} className="flex items-center gap-3" size="sm" onClick={()=> setOpenModal(true)}>
                        <MdCategory /> اضافه کردن دسته بندی
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                   
                    <div className="w-full md:w-72 relative flex">
                        <Input
                            crossOrigin={''}
                            placeholder={''}
                            label="جستوجو"
                        />
                        <button className={'!absolute left-1 top-2.5 rounded'}>
                            <MagnifyingGlassIcon className="h-5 w-5"/>
                        </button>
                    </div>
                </div>
            </CardHeader>
            {
                isLoading ? <Loading/> : <TableCategory tableHeade={[ "ایکن", "نام",""]} tableRow={data?.data.data.categories || []}/>
            }
            <CardFooter placeholder={''} className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography placeholder={''} variant="small" color="blue-gray" className="font-normal">
                    صفحه {data?.data.page} از {data?.data.total_pages}
                </Typography>
                <div className="flex gap-2">
                    <Button disabled={Number(page) <=1} placeholder={''} variant="outlined" size="sm" onClick={()=> router.push(`/admin/category?page=${Number(page) -1  }`)}>
                        صفحه قبل
                    </Button>
                    <Button disabled={Number(page) >= data?.data.total_pages!} placeholder={''} variant="outlined" size="sm" onClick={()=> router.push(`/admin/category?page=${Number(page) + 1}`)}>
                        صفحه بعد
                    </Button>
                </div>
            </CardFooter>
        </div>
        </>
    )
}
export default Category