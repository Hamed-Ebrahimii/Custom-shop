"use client"
import { PencilIcon} from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    CardBody,
    IconButton,
    Tooltip,
    Avatar,
} from "@material-tailwind/react";
import {SubCategoriesItem} from "@/utils/types/global";
import {TrashIcon} from "@heroicons/react/16/solid";
import TableRowSubcategory from "./table-row-subcategory";
export function TableSubCategory({tableHeade  , tableRow} : {tableHeade : string[] ,tableRow : SubCategoriesItem[] }) {

    return (
        <Card placeholder={''} className="w-full mt-10">

            <CardBody placeholder={''} className="overflow-auto px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left" dir="rtl">
                    <thead className="">
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
                        ({_id , category , icon , name}, index) => {
                            const isLast = index === tableRow.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                            return (
                                <tr key={_id}>
                                    <td className={classes}>
                                        <div>
                                            <Avatar placeholder={''} src={icon ?'http://127.0.0.1:8000/images/categories/icons/'+icon : 'http://127.0.0.1:8000/images/categories/icons/categories-icons-default.png' } alt={name} size="sm" />
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
                                    <td className={classes}>
                                    <TableRowSubcategory id={category}/>

                                    </td>
                                    <td className={classes}>
                                        <Tooltip content="ویرایش دسته بندی">
                                            <IconButton placeholder={''} variant="text">
                                                <PencilIcon className="h-4 w-4" />
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip content="حذف دسته بندی">
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
    );
}
export default TableSubCategory