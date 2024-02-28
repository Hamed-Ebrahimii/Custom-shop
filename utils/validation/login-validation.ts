import {z} from "zod";

export const loginValidation = z.object({
    username : z.string().min(1 , 'داداش حداقال یک حرف بزم دلمون خوش باشه'),
    password : z.string().min(1 , 'داداش حداقال یک حرف بزم دلمون خوش باشه'),
})
export type loginValidationType = z.infer<typeof loginValidation>