import {Avatar, Typography} from "@material-tailwind/react";

import {Product} from "@/utils/types/global";

const TableRow = ({tableRow} : {tableRow : Product[]}) =>{

    return(
        <tbody>
        {tableRow.map(
                ({name  , thumbnail , price , quantity  }, index) => {
                    const isLast = index === tableRow.length - 1;
                    const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                    return (
                        <tr key={name}>
                            <td className={classes}>
                                <div className="flex items-center">
                                    <Avatar placeholder={''} src={'http://127.0.0.1:8000/images/products/thumbnails/'+thumbnail} alt={name} size="sm" />
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
                                <div className="flex flex-col">
                                    <Typography
                                        placeholder={''}
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {quantity}
                                    </Typography>

                                </div>
                            </td>
                            <td className={classes}>
                                <Typography
                                    placeholder={''}
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                >
                                    {price}
                                </Typography>
                            </td>

                        </tr>
                    );
                },
            )}
        </tbody>
    )
}
export default TableRow