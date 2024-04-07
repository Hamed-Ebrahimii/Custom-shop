"use client"
import Input from "@/component/input";
import BtnRed from "@/component/btn/btn-red";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserInfoValidation, UserInfoValidationTType} from "@/utils/validation/userInfoValidation";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";
import {addUser} from "@/redux/slice/userSlice";
import {useMutation} from "@tanstack/react-query";
import {AddUser} from "@/utils/types/global";
import {AddUserApi} from "@/api/addUser";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const UserSignup = () =>{
    const {control , handleSubmit , formState : {errors} , reset} = useForm<UserInfoValidationTType>({
        mode : "onBlur",
        resolver : zodResolver(UserInfoValidation)
    })
    const {mutate} = useMutation(({
        mutationFn : (data : AddUser) => AddUserApi(data),
        onSuccess : () =>{
            router.push('/')
        },
        onError : (error) => toast(error.message)
    }))
    const router = useRouter()
    const user = useSelector((data : RootState)=> data.user)
    const dispatch = useDispatch()
    const onSubmit = (data : UserInfoValidationTType) =>{
        dispatch(addUser(
            {...user , ...data}
        ))
        mutate(user)
    }

    return(
        <div className={'w-full flex items-center justify-center gap-14 py-9 px-28'}>
            <ToastContainer/>
            <div className={'w-1/2 space-y-10'}>
                <p className={'text-lg font-medium text-red-custom'}>فرم ثبت اطلاعات</p>
                <form onSubmit={handleSubmit(onSubmit)} className={'px-9 py-6 border rounded-xl'}>
                    <div className={'grid grid-cols-2 grid-rows-2 gap-6'}>
                        <div className={'space-y-2'}>
                            <label>نام</label>
                            <Controller render={({field})=>(
                                <Input {...field}  placeholder={'نام  را وارد کنید '}/>
                            )} name={"firstname"} control={control}/>

                        </div>
                        <div className={'space-y-2'}>
                            <label>نام خانوادگی</label>
                            <Controller render={({field})=>(
                                <Input {...field} placeholder={'نام خانوادگی را وارد کنید '}/>
                            )} name={"lastname"} control={control}/>

                        </div>
                        <div className={'space-y-2'}>
                            <label>شماره تماس</label>
                            <Controller render={({field})=>(
                                <Input {...field} placeholder={'شماره تماس  را وارد کنید '}/>
                            )} name={"phoneNumber"} control={control}/>

                        </div>
                        <div className={'space-y-2'}>
                            <label>آدرس پستی</label>
                            <Controller render={({field})=> (
                                <textarea {...field} id={'username'} placeholder={'ادرس پستی  را وارد کنید '}
                                          className={'w-full h-10 px-3 rounded-lg border border-gray-100 placeholder:text-gray-400 outline-0'}/>

                            )} name={"address"} control={control}/>
                        </div>
                        <BtnRed className={'w-1/2'}>
                            ثبت اطلاعات
                        </BtnRed>
                    </div>
                </form>
            </div>
            <div className={'flex items-center justify-center'}>
                <img src="/img/Illustration.png" alt=""/>
            </div>
        </div>
    )
}
export default UserSignup