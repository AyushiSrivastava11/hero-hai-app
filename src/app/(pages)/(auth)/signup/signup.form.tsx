"use client";

import React, { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import signUpFormSchema from "@/zod_schema/signup.schema";
import axios from "axios";


const SignUpForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      emailAddress: "",
      name: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const [users, setUsers] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUpSubmit = async (
    values: z.infer<typeof signUpFormSchema>
  ) => {
    users.name = values.name;
    users.email = values.emailAddress;
    users.password = values.password;
    console.log(users);

    try {
      const response = await axios.post("/api/users/sign-up", users);
      console.log("Signup success", response.data);
      toast({
        title: "Account Created Successfully",
      });
      router.push("/");
    } catch (error: any) {
      console.log("Signup failed", error.message);
      toast({
        variant: "destructive",
        title: "Account Already Exists",
        description: "Please use another email.",
      });
    }
  };

  return (
    <div className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col text-center px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignUpSubmit)}>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="emailAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="example@gmail.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="py-3">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
        <Link className="text-xs text-gray-500" href="/login">
          Already have an account? Login Here.
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
