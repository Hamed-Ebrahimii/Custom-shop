import {z} from "zod";

export const UserInfoValidation = z.object({
    "firstname" : z.string({required_error : ' نام نمیتواند خالی باشد'}).min(2 , 'نام نمیتواند زیر ۲ حرف باشد'),
    "lastname" : z.string({required_error : ' نام خانوادگی نمیتواند خالی باشد'}).min(2 , 'نام خانوادگی نمیتواند زیر ۲ حرف باشد'),
    "address" : z.string({required_error : ' ادرس نمیتواند خالی باشد'}).min(4 , 'ادرس نمیتواند زیر ۴ حرف باشد'),
    "phoneNumber" : z.string({required_error : ' شماره تماس نمیتواند خالی باشد'}).min(11 , 'شماره تماس نمیتواند زیر ۱۱ رقم باشد').max(11, "شماره تماس نمیتواند بالای ۱۲ رقم باشد").refine((data)=> data.startsWith('0') , "شماره تماس با 0 شروع میشود"),
})
export type UserInfoValidationTType = z.infer<typeof UserInfoValidation>