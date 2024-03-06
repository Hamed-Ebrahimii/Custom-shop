"use client"
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Alert,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    ChevronRightIcon,
    ChevronDownIcon,
    CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import LogoMobile from "@/component/layout/header/icon/logo-mobile";
import {useRouter} from "next/navigation";

export function Sidebar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);

    const handleOpen = (value : number) => {
        setOpen(open === value ? 0 : value);
    };
    const router = useRouter()
    return (
        <Card placeholder={''} className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
            <div className="mb-2 flex items-center gap-4 p-4">
                <LogoMobile className={'size-8'}/>
                <Typography placeholder={''} variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <List placeholder={''}>
                <Accordion
                    placeholder={''}
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem placeholder={''} className="p-0" selected={open === 1}>
                        <AccordionHeader placeholder={''} onClick={() => handleOpen(1)} className="border-b-0 p-3">
                            <ListItemPrefix placeholder={''}>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography placeholder={''} color="blue-gray" className="mr-auto font-normal">
                                داشبورد
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List placeholder={''} className="p-0">
                            <ListItem placeholder={''}>
                                <ListItemPrefix placeholder={''}>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Analytics
                            </ListItem>
                            <ListItem placeholder={''}>
                                <ListItemPrefix placeholder={''}>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Reporting
                            </ListItem>
                            <ListItem placeholder={''}>
                                <ListItemPrefix placeholder={''}>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                Projects
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    placeholder={''}
                    open={open === 2}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                        />
                    }
                >
                    <ListItem placeholder={''} className="p-0" selected={open === 2}>
                        <AccordionHeader placeholder={''} onClick={() => handleOpen(2)} className="border-b-0 p-3">
                            <ListItemPrefix placeholder={''}>
                                <ShoppingBagIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography placeholder={''} color="blue-gray" className="mr-auto font-normal">
                                فروشگاه
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List placeholder={''} className="p-0">
                            <ListItem placeholder={''} onClick={()=> router.push('inventory')}>
                                <ListItemPrefix placeholder={''}>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                موجودی/قیمت
                            </ListItem>
                            <ListItem placeholder={''} onClick={()=> router.push('/admin/product?page=1')}>
                                <ListItemPrefix placeholder={''}>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                محصولات
                            </ListItem>
                            <ListItem placeholder={''}>
                                <ListItemPrefix placeholder={''}>
                                    <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                </ListItemPrefix>
                                سفارشات
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>
                <hr className="my-2 border-blue-gray-50" />
                <ListItem placeholder={''}>
                    <ListItemPrefix placeholder={''}>
                        <InboxIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    پیغام
                    <ListItemSuffix placeholder={''}>
                        <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                </ListItem>
                <ListItem placeholder={''}>
                    <ListItemPrefix placeholder={''}>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    پروفایل
                </ListItem>
                <ListItem placeholder={''}>
                    <ListItemPrefix placeholder={''}>
                        <Cog6ToothIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    تنظیمات
                </ListItem>
                <ListItem placeholder={''}>
                    <ListItemPrefix placeholder={''}>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    خروج
                </ListItem>
            </List>

        </Card>
    );
}
export default Sidebar