import {
    Radio,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";

export function RadioBtn() {
    return (
        <Card placeholder={''} className="w-full">
            <List placeholder={''} className="flex-row">
                <ListItem placeholder={''} className="p-0">
                    <label
                        htmlFor="horizontal-list-react"
                        className="flex w-full justify-center cursor-pointer items-center px-1 gap-2 py-2"
                    >
                        <ListItemPrefix placeholder={''} className="mr-3">
                            <Radio
                               crossOrigin={''}
                                placeholder={''}
                                name={'horizontal-list'}
                                id="horizontal-list-react"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                            />
                        </ListItemPrefix>
                        <Typography placeholder={''}
                            color="blue-gray"
                            className="font-medium text-blue-gray-400"
                        >
                            همه سفارشات
                        </Typography>
                    </label>
                </ListItem>
                <ListItem placeholder={''} className="p-0">
                    <label
                        htmlFor="horizontal-list-vue"
                        className="flex justify-center w-full cursor-pointer items-center px-1 gap-2 py-2"
                    >
                        <ListItemPrefix placeholder={''} className="mr-3">
                            <Radio
                                crossOrigin={''}
                                name="horizontal-list"
                                id="horizontal-list-vue"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                            />
                        </ListItemPrefix>
                        <Typography
                            placeholder={''}
                            color="blue-gray"
                            className="font-medium text-blue-gray-400 whitespace-nowrap"
                        >
                            سفارشات درحال انجام
                        </Typography>
                    </label>
                </ListItem>
                <ListItem className="p-0" placeholder={''}>
                    <label
                        htmlFor="horizontal-list-svelte"
                        className="flex w-full justify-center cursor-pointer items-center px-1 gap-2 py-2"
                    >
                        <ListItemPrefix placeholder={''} className="mr-3">
                            <Radio
                                crossOrigin={''}
                                name="horizontal-list"
                                id="horizontal-list-svelte"
                                ripple={false}
                                className="hover:before:opacity-0"
                                containerProps={{
                                    className: "p-0",
                                }}
                            />
                        </ListItemPrefix>
                        <Typography
                            placeholder={''}
                            color="blue-gray"
                            className="font-medium text-blue-gray-400 whitespace-nowrap"
                        >
                            سفارشات تکمیل شده
                        </Typography>
                    </label>
                </ListItem>
            </List>
        </Card>
    );
}
export default RadioBtn