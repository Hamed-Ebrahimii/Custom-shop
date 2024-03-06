"use client"
import {useSearchParams} from "next/navigation";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {getAllProduct} from "@/api/getAllProduct";
import {Button, CardFooter, CardHeader, Input, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import Table from "@/app/(admin)/admin/component/table/Table";
import FullFeaturedCrudGrid from "@/app/(admin)/admin/component/table/table-edite";

const Inventory = () =>{
    const params = useSearchParams()
    const page = params.get('page')
    const perPage = params.get('perPage')

    const {data} = useQuery({
        queryKey : [page , perPage],
        queryFn : () => getAllProduct(page! , perPage!)
    })
    const TABS = [
        {
            label: "همه",
            value: "all",
        },
        {
            label: "موجود",
            value: "monitored",
        },
        {
            label: "اتمام موجودی",
            value: "unmonitored",
        },
    ];
    return(
        <>

            <div className={'w-full bg-white p-5'}>
                <CardHeader placeholder={''} floated={false} shadow={false} className="rounded-none">
                    <div className="mb-8 flex items-center justify-between gap-8">
                        <div>
                            <Typography placeholder={''} variant="h5" color="blue-gray">
                                لیست موجودی و قیمت
                            </Typography>
                            <Typography placeholder={''} color="gray" className="mt-1 font-normal">
                                در این قسمت لیست موجودی و قیمت محصولات سایت رو مشاهده میکنید
                            </Typography>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                        <Tabs value="all" className="w-full md:w-max">
                            <TabsHeader placeholder={''}>
                                {TABS.map(({ label, value }) => (
                                    <Tab className={'whitespace-nowrap'} placeholder={''} key={value} value={value}>
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
                        <div className={'w-full flex items-center justify-end mt-4'}>
                            <Button placeholder={''} className="flex items-center gap-3" size="sm" >
                                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> ذخیره
                            </Button>
                        </div>
                </CardHeader>

                <CardFooter placeholder={''} className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                    <Typography placeholder={''} variant="small" color="blue-gray" className="font-normal">
                        صفحه 1 از 10
                    </Typography>
                    <div className="flex gap-2">
                        <Button placeholder={''} variant="outlined" size="sm">
                            صفحه قبل
                        </Button>
                        <Button placeholder={''} variant="outlined" size="sm">
                            صفحه بعد
                        </Button>
                    </div>
                </CardFooter>
            </div>
        </>
    )
}
export default Inventory
