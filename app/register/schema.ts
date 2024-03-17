import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().refine((value) => value, "Enter Name"),
  email: z.string().email(),
  password: z.string().refine((value) => value, "Enter Password"),
  phone: z.coerce.string().refine((value) => value, "Enter Phone No"),
});
