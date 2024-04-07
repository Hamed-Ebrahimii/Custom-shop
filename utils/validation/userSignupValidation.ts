import {z} from "zod";

export const UserSignupValidation  = z.object({
    username : z.string({required_error : 'نام کاربری نمیتواند خالی باشد'}).min(4 , 'نام کاربری نمیتواند زیر ۴ حرف باشد'),
    password : z.string({required_error : 'رمز عبور نمیتواند خالی باشد '}).min(4 , 'رمز عبور نمیتواند زیر ۴ حرف باشد'),
    passwordConfirm : z.string({required_error : 'تکرار رمز عبور نمیتواند خالی باشد'}).min(4 , 'تکرار رمز عبور نمیتواند زیر ۴ حرف باشد ')
}).refine(data =>data.password === data.passwordConfirm , {
    message : 'رمز عبور و تکرار رمز عبور باید یکسان باشد',
    path : ['passwordConfirm']
})
export type UserLoginValidationType = z.infer<typeof UserSignupValidation>