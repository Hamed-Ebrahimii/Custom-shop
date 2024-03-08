import {z} from "zod";

export const loginValidation = z.object({
    username : z.string().min(4 , 'حداقال نام کاربری باید 4 حرف باشد.'),
    password : z.string().min(4 , 'حداقل رمز عبور باید 4 حرف باشد'),
})
export type loginValidationType = z.infer<typeof loginValidation>