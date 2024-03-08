"use client"
import {
    Card,
    Typography,
    CardBody,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import {Orders} from "@/utils/types/global";
import {TbDeviceTabletSearch} from "react-icons/tb";
import {useQuery} from "@tanstack/react-query";
import {getUserById} from "@/api/getUserById";
import {getProductById} from "@/api/getProductById";
const Username = ({id}:{id : string}) =>{
    const {data} = useQuery({
        queryKey : [id],
        queryFn : () => getUserById(id)
    })
    return(
        <Typography
            placeholder={''}
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70"
        >
            {data?.data.data.user.username}
        </Typography>
    )
}
const ProductName = ({id}:{id : string}) =>{
    const {data} = useQuery({
        queryKey : [id],
        queryFn : () => getProductById(id)
    })
    return(
        <Typography
            placeholder={''}
            variant="small"
            color="blue-gray"
            className="font-normal opacity-70"
        >
            {data?.data.data.product.name}
        </Typography>
    )
}
export  function Table({tableHeade  , tableRow } : {tableHeade : string[] ,tableRow : Orders }) {

    return (
        <Card placeholder={''} className="w-full mt-10">
            <CardBody placeholder={''} className="overflow-scroll px-0">
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
                    {tableRow.orders.map(({user , products , deliveryStatus} , index) => {
                            const isLast = index === tableRow.orders.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={user}>
                                    <td className={classes} >
                                        <Username id={user} />
                                    </td>
                                    <td className={classes}>
                                        <div className="flex flex-col">
                                            <Typography
                                                        placeholder={''}
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                            >
                                                <ProductName id={products[0].product}/>
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
                                            {deliveryStatus ?  'سفارش انجام شده' : 'سفارش درحال ارسال است'}
                                        </Typography>
                                    </td>

                                    <td className={classes}>

                                        <Tooltip content="مشاهده جزییات">
                                            <IconButton placeholder={''} variant="text">
                                                <TbDeviceTabletSearch className="h-4 w-4" />
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
    );
}
export default Table