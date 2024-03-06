"use client"
import Image from "next/image";
import {Button, Input} from "@material-tailwind/react";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {loginValidation, loginValidationType} from "@/utils/validation/login-validation";
import {useMutation} from "@tanstack/react-query";
import {loginAdmin} from "@/api/login-admin";
import {useRouter} from "next/navigation";
import {useEffect} from "react";
const Login = () =>{
    const router = useRouter()
    const {control  , reset , handleSubmit , formState : {errors}} = useForm<loginValidationType>({
        resolver : zodResolver(loginValidation),
        mode : 'onBlur'
    })
    const { status , isPending , mutate  } = useMutation({
        mutationKey : ['loginValidation'],
        mutationFn : (data : loginValidationType) => loginAdmin(data)
    })
    const onSubmit = async (data : loginValidationType) =>{

          mutate(data)
    }
    useEffect(() => {
        if (status === "success"){
           router.push('/admin')
        }
    }, [status]);
    return(
        <div className={'w-full h-screen flex flex-col gap-4 justify-center items-center bg-gray-custom'}>
            <h1 className={'text-2xl font-medium text-gray-600'} >خوش آمدی (:</h1>
            <div className={'bg-white rounded-xl p-3 w-8/12 flex items-center'}>
            <div className={'w-1/2'}>
                <form onSubmit={handleSubmit(onSubmit)} className={'w-full flex flex-col justify-center items-center gap-10'}>
                    <p className={'text-lg font-medium text-gray-400'}>ورود</p>
                    <div className={'w-2/4'}>
                        <Controller
                            control={control}
                            render={({  field})=> (
                                <Input {...field} crossOrigin={''} className={'!border-red-custom'} variant={'static'} label="نام کاربری"
                                       placeholder={"نام کاربری"}/>
                            )}

                            name={'username'}/>
                        { errors.username && <p className={'text-red-400 text-xs '}>{errors.username.message}</p>}
                    </div>
                    <div className={'w-2/4'}>
                        <Controller
                            control={control}
                            render={({  field})=> (
                                <Input {...field} crossOrigin={''} type={'password'} className={'!border-red-custom'} variant={'static'} label="رمز عبور"
                                       placeholder={"رمز عبور"}/>
                            )}

                            name={'password'}/>
                        { errors.password && <p className={'text-red-400 text-xs '}>{errors.password.message}</p>}
                    </div>
                    <div className={'w-2/4'}>
                        <Button type={'submit'} placeholder={''} color="red" className={'w-full disabled:opacity-50'} loading={isPending}> {isPending ? 'لطفا صبر کنید' : 'ورود'}</Button>
                    </div>
                </form>
            </div>
                <div className={'w-1/2 flex justify-center items-center bg-red-custom py-4 rounded-lg'}>
                    <Image src={'/img/login.png'} alt={''} width={500} height={500} className={'w-1/3'}/>
                </div>
            </div>
        </div>
    )
}
export default Login