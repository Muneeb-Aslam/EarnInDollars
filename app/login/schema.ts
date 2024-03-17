import {z} from "zod"

export const loginSchema = z.object({
    email:z.string().refine((value)=>value,"Enter Email"),
    password:z.string().refine((value)=>value,"Enter Password"),
})