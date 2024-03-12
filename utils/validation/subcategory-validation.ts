import { z } from "zod";

export const subcategoryValidation = z.object({
    name : z.string().min(1 , 'نام نمیتواند خالی باشد '),
    category : z.string().min(1 , 'باید یک ایتم انتخاب کنید '),
    
})
export type subcategoryValidationType = z.infer<typeof subcategoryValidation>