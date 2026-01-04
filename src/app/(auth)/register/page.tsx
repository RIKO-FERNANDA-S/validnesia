"use client";
import React from "react";
import Link from "next/link";
import { Dancing_Script } from "next/font/google";
import Inner from "@/components/layouts/inner/page";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";

// Font Dencing Script
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const formSchema = z.object({
  username: z.string().min(2, {
    message: "nama mu kurang tolol yang bener aja lu",
  }),
  password: z.string().min(6, {
    message: "password anjing kurang panjang",
  }),
});
function Signup() {
  const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        password: "",
      },
    });
  
    type FormValues = {
      username: string;
      password: string;
    };
  
    const dahOn = (data: FormValues) => {
      console.log(data);
    };
  return (
    <Inner>
  <main className="w-full h-screen flex justify-center">
      <div className="w-1/2 h-screen bg-[url('/img/imgAuth.jpg')] bg-cover bg-center flex justify-center items-center flex-col">
        <h2
          className={`${dancingScript.className} text-white text-9xl font-extrabold `}
        >
          Register
        </h2>
        <Link href="/" className="flex justify-center items-center backdrop-blur-sm py-3 px-8 border-2 border-white rounded-full text-white">
        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          <h3 className="">back to home</h3>
        </Link>
      </div>
      <div className="w-1/2 h-screen flex flex-col justify-center items-center gap-10">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(dahOn)}
            className="w-4/5 flex flex-col gap-7"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Email mu tol"
                      className="py-6"
                      {...field}
                    ></Input>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="password mu tol"
                      className="py-6"
                      {...field}
                    ></Input>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="w-full flex justify-center mt-2">
              <Button type="submit" className="w-[90%] py-5 cursor-pointer">
                Join Us <ArrowRight className="ml-2" />
              </Button>
            </div>
            <div className="w-full justify-between flex">
              <p>Do have an account? </p>
              <a href="/login" className="text-blue-500">
                Login
              </a>
            </div>
          </form>
        </Form>
        <div className="flex justify-center items-center gap-5">
          <span className="w-[17rem] bg-[#7c7b7b] h-[.5]" />
          <p>Or</p>
          <span className="w-[17rem] bg-[#7c7b7b] h-[.5]" />
        </div>

        {/* Button Google & Apple Account Start*/}
        <div className="w-full flex flex-col justify-center items-center gap-5">
          <div className=" w-[80%] flex justify-center border border-black text-lg items-center py-2 px-20 gap-3 rounded-xl cursor-pointer ">
            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
            <h1 className="">Login with Google</h1>
          </div>
          <div className=" w-[80%] bg-black flex justify-center border border-black text-lg items-center py-2 px-20 gap-3 rounded-xl cursor-pointer text-white">
            <FontAwesomeIcon icon={faApple} className="fa-lg"></FontAwesomeIcon>
            <h1 className="">Login with Apple</h1>
          </div>
        </div>
      </div>
      {/* Button Google & Apple Account End*/}
    </main>
      </Inner>

  )
}

export default Signup;
