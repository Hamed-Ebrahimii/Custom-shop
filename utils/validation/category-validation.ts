import { z } from "zod";

export const categoryValidation = z.object({
    name : z.string().min(1 , "نام نمیتواند خالی باشد"),
    icon : z.instanceof(File).optional()
})
export type typeCategoryValidation = z.infer<typeof categoryValidation>