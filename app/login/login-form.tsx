"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { loginSchema } from "./schema";
import Image from "next/image";
import logo from "@/public/logo.png"
import Input from "@/components/ui/input";

export default function LoginForm(){
  const {register,handleSubmit,formState:{errors}} = useForm<z.infer<typeof loginSchema>>({
    resolver:zodResolver(loginSchema),
  })

  const onSubmit = (values:any)=>{
    console.log(values);
    
  }
  return (
    <section className="">
      <Image src={logo} alt={"logo"} className="w-[65px] h-[65px]"></Image>
      <h3 className="text-heading font-extrabold text-2xl">Login to your account</h3>
      <span className="text-normal font-semibold text-xl">Explore open freelancing oportunities</span>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <Input type="text" placeholder="Email" name="email" />

      </form>
    </section>
  )

}