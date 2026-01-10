"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import { formSchema, FormValues } from "@/lib/validationsSchema/users";
import ButtonRegisterGoogle from "@/components/fragments/button-login-google";
import ButtonRegisterGithub from "@/components/fragments/button-register-github";

// Font
import { Dancing_Script } from "next/font/google";
import Inner from "@/components/layouts/inner/page";

// Notify

// React Hook Form & Zod Resolver
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

// Icons
import { ArrowRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { toast } from "sonner";
import ButtonRegisterSubmit from "@/components/fragments/button-register-submit-form";

// Font Dencing Script
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function Signup() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setLoading(true);

    const res = await fetch("/api/auth/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setLoading(false);

    if (!res.ok) {
      console.error(await res.json());
      return;
    }

    form.reset();
  }

  return (
    <Inner>
      <main className="w-full h-screen flex justify-center">
        <div className="w-1/2 h-screen bg-[url('/img/imgAuth.jpg')] bg-cover bg-center flex justify-center items-center flex-col">
          <h2
            className={`${dancingScript.className} text-white text-9xl font-extrabold `}
          >
            Register
          </h2>
          <Link
            href="/"
            className="flex justify-center items-center backdrop-blur-sm py-3 px-8 border-2 border-white rounded-full text-white"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            <h3 className="">back to home</h3>
          </Link>
        </div>
        <div className="w-1/2 h-screen flex flex-col justify-center items-center gap-10">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-4/5 flex flex-col gap-7"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Nama mu kocak"
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
                name="email"
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
                <ButtonRegisterSubmit loading={loading}>
                  {!loading ? (
                    <span className="flex gap-2 items-center">
                      Register
                      <ArrowRight className="ml-2" />
                    </span>
                  ) : (
                    "sabar"
                  )}
                </ButtonRegisterSubmit>
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
            <ButtonRegisterGoogle />
            <ButtonRegisterGithub />
          </div>
        </div>
        {/* Button Google & Apple Account End*/}
      </main>
    </Inner>
  );
}

export default Signup;
