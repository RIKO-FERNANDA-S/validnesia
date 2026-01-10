
import {z} from "zod";

export const formSchema = z.object({
  name: z.string().min(2, {
    message: "nama mu kurang tolol yang bener aja lu",
  }),
  email: z.string().email({
    message: "email mu gak valid anjing",
  }),
  password: z.string().min(6, {
    message: "password anjing kurang panjang",
  }),
});

export type FormValues = z.infer<typeof formSchema>;