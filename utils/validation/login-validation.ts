import {z} from "zod";

export const loginValidation = z.object({
    username : z.string({required_error : 'نام کاربری نیمتواند خالی باشد'}).min(3 , 'حداقال نام کاربری باید 4 حرف باشد.'),
    password : z.string({required_error : 'رمز عبور نمیتواند خالی باشد'}).min(7 , 'حداقل رمز عبور باید 8 حرف باشد'),
})
export type loginValidationType = z.infer<typeof loginValidation>