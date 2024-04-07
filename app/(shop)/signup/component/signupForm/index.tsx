"use client"
import Input from "@/component/input";
import BtnRed from "@/component/btn/btn-red";
import Link from "next/link";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {UserSignupValidation, UserLoginValidationType} from "@/utils/validation/userSignupValidation";
import {useDispatch, useSelector} from "react-redux";
import {AddUser} from "@/utils/types/global";
import {addUser} from "@/redux/slice/userSlice";
import {useState} from "react";
import Modal from "@/component/modal";
import ModalRole from "@/app/(shop)/signup/component/modal";
import {RootState} from "@/redux/store";

const SignupForm = () =>{
    const dispatch = useDispatch()
    const {control , formState  : {errors} , handleSubmit} = useForm<UserLoginValidationType>({
        mode : 'onBlur',
        resolver : zodResolver(UserSignupValidation)
    })
    const user = useSelector((data : RootState)=> data.user)
    const [modal , setModal] = useState(false)
    const onSubmit = (data : UserLoginValidationType) =>{

        dispatch(addUser({...user , password: data.password , username : data.username}))
        setModal(true)
    }
    return(
        <>
            {
                modal && <Modal isOpen={modal}>
                    <ModalRole openModal={setModal}/>
                </Modal>
            }
        <form onSubmit={handleSubmit(onSubmit)} className={'flex flex-col items-center space-y-7 px-10 py-6 rounded-lg border'}>
            <h2 className={'text-lg font-medium mb-7 mx-auto'}>ثبت نام</h2>
            <div className={'space-y-2'}>
                <label htmlFor={'username'} className={'text-gray-400'}>نام کاربری</label>
                <Controller render={({field})=>(
                    <Input {...field} id={'username'} placeholder={'نام کاربری را وارد کنید '}/>
                )} name={'username'} control={control}/>
            </div>
            <div className={'space-y-2'}>
                <label htmlFor={'password'} className={'text-gray-400'}>رمز عبور</label>
                <Controller render={({field})=>(
                    <Input {...field} placeholder={'رمز عبور را وارد کنید'} type={'password'} id={'password'}/>
                )} name={'password'} control={control}/>
            </div>
            <div className={'space-y-2'}>
                <label htmlFor={'confirmPassword'} className={'text-gray-400'}>تکرار رمز عبور</label>
                <Controller render={({field})=>(
                    <Input {...field} placeholder={'تکرار رمز عبور را وارد کنید'} type={'password'} id={'confirmPassword'}/>
                )} name={'passwordConfirm'} control={control}/>
            </div>
            <p className={'font-semibold text-xs'}>ورود و عضویت شما به منزله پذیرفتن قوانین و مقررات می باشد.</p>
            <BtnRed className={'w-full'}>
                ثبت نام در سایت
            </BtnRed>
            <Link href={'/signup'} className={'text-red-custom'}>
                ورود به سایت
            </Link>
        </form>
        </>
    )
}
export default SignupForm