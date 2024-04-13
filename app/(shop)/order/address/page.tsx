"use client"
import { RiErrorWarningLine } from "react-icons/ri";
import { getUserById } from "@/api/getUserById";
import AddressBox from "./component/addressBox";
import CartTotalPrice from "../component/cartTotalPrice";
import { useQuery } from "@tanstack/react-query";
import DatePicker, { DateObject } from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { useState } from "react";
const Address = () => {
    const id = sessionStorage.getItem('userId')
    const { data } = useQuery({
        queryKey: ["address"],
        queryFn: () => getUserById(id || '')
    })
    const [date, setDate] = useState< DateObject >(null!)
    return (
        <div className={'w-full flex py-8 px-12'}>
            <div className={'w-8/12 space-y-4'}>
                <p className={'text-lg font-medium'}>آدرس</p>
                <hr />
                <div className={'mt-6 space-y-4 flex flex-col items-center justify-center'}>
                    <AddressBox user={data?.data.data || { user: { _id: "", address: '', createdAt: '', firstname: '', lastname: "", phoneNumber: '', role: '', updatedAt: '', username: '' } }} />
                </div>
                <div className="w-full">
                    <p className="text-xl font-medium text-gray-600">
                        زمان ارسال
                    </p>
                    <hr className="mt-4" />
                    <div className="flex items-center gap-4 py-6">
                        <p className="text-gray-500 font-medium text-sm">
                            لطفا زمان ارسال را انخاب کنید
                        </p>
                        <DatePicker
                            
                            onChange={(e)=> {e && !Array.isArray(e) && setDate(e)}}
                            minDate={new DateObject({ calendar: persian }).set('day' , new DateObject({ calendar: persian, locale: persian_fa }).day + 1)}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                        />
                    </div>
                </div>
            </div>
            <div className={'w-1/3 space-y-4'}>
                <CartTotalPrice date={date?.format()}/>
                <div className={'border mx-auto w-10/12 rounded-lg px-5 py-4 space-y-4'}>
                    <RiErrorWarningLine className={'size-5 text-orange-300'} />
                    <ul className={'list-disc space-y-2'}>
                        <li className={'text-sm font-medium text-gray-500'}>
                            ارسال رایگان برای سفارش های بالای ۷۰۰.۰۰۰ تومن
                        </li>
                        <li className={'text-sm font-medium text-gray-500'}>
                            در صورت اتمام موجودی‌، کالاها از سبد خرید حذف میشوند.
                        </li>
                        <li className={'text-sm font-medium text-gray-500'}>
                            لطفا در طول مراحل خرید فیلتر شکن خود را خاموش کنید.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Address