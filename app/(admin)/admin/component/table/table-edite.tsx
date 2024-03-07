"use client"

import {
    Card,
    Typography,
    CardBody,
} from "@material-tailwind/react";
import {Product} from "@/utils/types/global";

import TableRow from "@/app/(admin)/admin/component/table/table-row";

export function TableEdite({tableHeade  , tableRow , setEdite} : {tableHeade : string[] ,tableRow : Product[] , setEdite : (value : boolean)=> void }) {

    return (
        <Card placeholder={''} className="w-full mt-10">
            <CardBody placeholder={''} className="overflow-scroll px-0">
                <table className="mt-4 w-full table-auto text-right">
                    <thead>
                    <tr>
                        {tableHeade.map((head , index) => (
                            <th
                                key={index}
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
                    <TableRow setEdite={setEdite} tableRow={tableRow}/>
                    </tbody>
                </table>
            </CardBody>

        </Card>
    );
}
export default TableEdite