import {z} from "zod";

export const EditProductValidation = z.object({
    "name" : z.string().min(1 , 'نام محصول نمیتواند خالی باشد ' ).optional() ,
    "category" : z.string().min(1 , 'لطفا دسته بندی محصول را انتخاب کنید').optional() ,
    "brand" : z.string().min(1 , 'محصولت برند نداره؟ فکر کنم یادت رفته').optional() ,
    "subcategory" : z.string().min(1 , 'لطفا زیر مجموعه دسته بندی را انتخاب کنید').optional(),
    "price" : z.string().min(1 , 'قیمت که نمیتواند صفر باشد میخواین محصول رو مجانی بدین؟').optional(),
    "quantity": z.string().min(0 , 'داداش مگه میشه تعداد محصول زیر صفر باشه اخه؟').optional(),
    "thumbnail" : z.instanceof(File).refine((file) => file.size < 2 * 1024 * 1024, 'File size must be less than 2MB').optional(),
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
        ).optional(),
    "description" : z.string().min(1 , 'محصولت توضیح داشته باشه فروشش بیشتره !').optional(),
})
export type EditProductValidationType = z.infer<typeof EditProductValidation>