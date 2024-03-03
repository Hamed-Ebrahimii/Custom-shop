"use client"
import Table from "@/app/(admin)/admin/component/table/Table";
import {Button, CardHeader, Input, Tab, Tabs, TabsHeader, Typography} from "@material-tailwind/react";
import {UserPlusIcon} from "@heroicons/react/24/solid";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";

const Product = () =>{
    const TABS = [
        {
            label: "All",
            value: "all",
        },
        {
            label: "Monitored",
            value: "monitored",
        },
        {
            label: "Unmonitored",
            value: "unmonitored",
        },
    ];
    return(
        <div className={'w-full bg-white p-5'}>
            <CardHeader placeholder={''} floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography placeholder={''} variant="h5" color="blue-gray">
                            لیست محصولات
                        </Typography>
                        <Typography placeholder={''} color="gray" className="mt-1 font-normal">
                            در این قسمت لیست تمامی محصولات سایت رو مشاهده میکنید
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">

                        <Button placeholder={''} className="flex items-center gap-3" size="sm">
                            <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> اضافه کردن محصول
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <Tabs value="all" className="w-full md:w-max">
                        <TabsHeader placeholder={''}>
                            {TABS.map(({ label, value }) => (
                                <Tab placeholder={''} key={value} value={value}>
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
            <Table tableHeade={['تصویر',"نام" , "برند" , "تعداد" , "دسته بندی" , "زیر دسته بندی" , "قیمت"]} tableRow={[]}/>
        </div>
    )
}
export default Product