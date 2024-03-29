import {z} from "zod";

export const loginValidation = z.object({
    username : z.string({required_error : 'نام کاربری نیمتواند خالی باشد'}).min(4 , 'حداقال نام کاربری باید 4 حرف باشد.'),
    password : z.string({required_error : 'رمز عبور نمیتواند خالی باشد'}).min(4 , 'حداقل رمز عبور باید 4 حرف باشد'),
})
export type loginValidationType = z.infer<typeof loginValidation>