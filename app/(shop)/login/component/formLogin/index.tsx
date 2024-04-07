"use client"
import Input from "@/component/input";
import BtnRed from "@/component/btn/btn-red";
import Link from "next/link";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginValidation, loginValidationType} from "@/utils/validation/login-validation";
import {useMutation} from "@tanstack/react-query";
import {loginAdmin} from "@/api/login-admin";
import {useRouter} from "next/navigation";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
import ErrorMassage from "@/app/(shop)/component/errorMassage";

const FormLogin = () =>{
    const router = useRouter()
    const {control , formState : {errors} , handleSubmit , reset} = useForm<loginValidationType>({
        mode : "onBlur",
        resolver : zodResolver(loginValidation)
    })
    const {mutate} = useMutation({
        mutationFn : (data : loginValidationType) => loginAdmin(data),
        onSuccess : ()=>{
            router.push('/')
        },
        onError : (error)=> toast(error.message)
    })
    const onSubmit = (data : loginValidationType)=>{
        mutate(data)
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col items-center space-y-10 px-10 py-6 rounded-lg border'}>
            <ToastContainer/>
            <h2 className={'text-lg font-medium mb-7 mx-auto'}>ورود</h2>
            <div className={'space-y-2'}>
                <label htmlFor={'username'} className={'text-gray-400'}>نام کاربری</label>
                <Controller render={
                    ({field})=>(
                        <Input {...field} placeholder={'نام کاربری را وارد کنید '}/>
                    )
                } name={'username'} control={control}/>
                {errors.username?.message && <ErrorMassage errorMassage={errors.username.message}/>}
            </div>
            <div className={'space-y-2'}>

                <label htmlFor={'username'} className={'text-gray-400'}>رمز عبور</label>
                <Controller render={({field})=>(
                    <Input {...field} placeholder={'رمز عبور را وارد کنید'} type={'password'}/>
                )} name={'password'} control={control}/>
                ${errors.password?.message && <ErrorMassage errorMassage={errors.password.message}/>}
            </div>
            <p className={'font-semibold text-xs'}>ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.</p>
            <BtnRed className={'w-full'}>
                 ورود به سایت
            </BtnRed>
            <Link href={'/signup'} className={'text-red-custom'}>
                    ثبت نام در سایت
            </Link>
        </form>
    )
}
export default FormLogin