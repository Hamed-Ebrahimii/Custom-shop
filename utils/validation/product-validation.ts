import {z} from "zod";

export const productValidation = z.object({
    "name" : z.string().min(1 , 'نام محصول نمیتواند خالی باشد ' ) ,
    "category" : z.string().min(1 , 'لطفا دسته بندی محصول را انتخاب کنید') ,
    "brand" : z.string().min(1 , 'محصولت برند نداره؟ فکر کنم یادت رفته'),
    "subcategory" : z.string().min(1 , 'لطفا زیر مجموعه دسته بندی را انتخاب کنید'),
    "price" : z.string().min(1 , 'قیمت که نمیتواند صفر باشد میخواین محصول رو مجانی بدین؟'),
    "quantity": z.string().min(0 , 'داداش مگه میشه تعداد محصول زیر صفر باشه اخه؟'),
    "thumbnail" : z.instanceof(File).refine((file) => file.size < 2 * 1024 * 1024, 'File size must be less than 2MB'),
    "images" : z
        .array(
            z
                .instanceof(File)
                .refine((file) => file.size < 2 * 1024 * 1024, 'File size must be less than 2MB'),
        )
        .min(1, 'At least 1 file is required')
        .refine(
            (files) => files.every((file) => file.size < 2 * 1024 * 1024),
            'File size must be less than 2MB',
        ),
    "description" : z.string().min(1 , 'محصولت توضیح داشته باشه فروشش بیشتره !'),
})
export type ProductValidationType = z.infer<typeof productValidation>