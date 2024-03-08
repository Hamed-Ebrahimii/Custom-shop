"use client"
import {Button, CardFooter, CardHeader, Input, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useQuery} from "@tanstack/react-query";
import { useRouter, useSearchParams} from "next/navigation";
import {useState} from "react";
import Modal from "@/component/modal";
import AddProduct from "@/app/(admin)/admin/product/component/addProduct";
import Loading from "@/component/loading/loading";
import {getAllOrders} from "@/api/getAllOrders";
import TableOrder from "@/app/(admin)/admin/component/table/table-order";

const Order = () =>{
    const params = useSearchParams()
    const page = params.get('page')
    const filter = params.get('filter')
    console.log(filter)
    const [openModal , setOpenModal] = useState(false)
    const {data  , isLoading} = useQuery({
        queryKey : [page , filter],
        queryFn : () => getAllOrders(page! , filter! )
    })
    const router = useRouter()
    const TABS = [
        {
            label: "همه",
            value: "All",
        },
        {
            label: "سفارشات درحال ارسال",
            value: "Orders are being shipped",
        },
        {
            label: "سفارشات تکمیل شده",
            value: "Completed orders",
        },
    ];

    return(
        <>
            {
                openModal && <Modal isOpen={openModal}>
                    <AddProduct setOpenModal={setOpenModal}/>
                </Modal>
            }
            <div className={'w-full bg-white p-5'}>
                <CardHeader placeholder={''} floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography placeholder={''} variant="h5" color="blue-gray">
                                لیست محصولات
                            </Typography>
                            <Typography placeholder={''} color="gray" className="mt-1 font-normal">
                                در این قسمت لیست تمامی سفارشات سایت رو مشاهده میکنید
                            </Typography>
                        </div>

                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader placeholder={''}>
                                {TABS.map(({ label, value }) => (
                                    <Tab onClick={()=> router.push(`/admin/orders?page=${page}&filter=${value}`)} className={'whitespace-nowrap'} placeholder={''} key={value} value={value}>
                                        &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                    </Tab>
                                ))}
                            </TabsHeader>
                        </Tabs>
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
                    isLoading ? <Loading/> : <TableOrder tableHeade={["نام مشتری" , "محصولات" , "وضیعت سفارش" , ""]} tableRow={data?.data.data || {orders : []}}/>
                }
                <CardFooter placeholder={''} className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography placeholder={''} variant="small" color="blue-gray" className="font-normal">
                        صفحه {data?.data.page} از {data?.data.total_pages}
                    </Typography>
                    <div className="flex gap-2">
                        <Button disabled={Number(page) <=1} placeholder={''} variant="outlined" size="sm" onClick={()=> router.push(`/admin/product?page=${Number(page) -1  }&filter=${filter}`)}>
                            صفحه قبل
                        </Button>
                        <Button disabled={Number(page) >= data?.data.total_pages!} placeholder={''} variant="outlined" size="sm" onClick={()=> router.push(`/admin/product?page=${Number(page) + 1}&filter=${filter}`)}>
                            صفحه بعد
                        </Button>
                    </div>
                </CardFooter>
            </div>
        </>
    )
}
export default Order