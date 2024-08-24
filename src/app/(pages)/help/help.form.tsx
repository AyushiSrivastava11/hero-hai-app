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
import helpFormSchema from "@/zod_schema/help.schema";

const HelpForm = () => {
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof helpFormSchema>>({
    resolver: zodResolver(helpFormSchema),
    defaultValues: {
      title: "",
      username: "",
      donation: "",
      helpline: "",
    },
  });

  const [help, setHelp] = useState({
    title: "",
    username: "",
    donation: "",
    helpline: "",
  });

  const handleSignUpSubmit = async (values: z.infer<typeof helpFormSchema>) => {
    help.username = values.username;
    help.title = values.title;
    help.donation = values.donation;
    help.helpline = values.helpline;
    console.log(help);

    // try {
    //   const response = await axios.post("/api/user/signup", users);
    //   console.log("Signup success", response.data);
    //   toast({
    //     title: "Account Created Successfully",
    //   });
    //   router.push("/login");
    // } catch (error: any) {
    //   console.log("Signup failed", error.message);
    //   toast({
    //     variant: "destructive",
    //     title: "Account Already Exists",
    //     description: "Please use another email.",
    //   });
    // }
  };

  return (
    <div className="flex flex-col text-left h-3/5 w-[320px] sm:w-[400px]">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Ask for Help</CardTitle>
        <CardDescription>
          Please provide the details for required help.
        </CardDescription>
      </CardHeader>
      <div className="flex flex-col text-center px-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSignUpSubmit)}>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
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
                name="username"
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
                name="donation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Donation</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="string" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col py-2 text-left">
              <FormField
                control={form.control}
                name="helpline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Helpline</FormLabel>
                    <FormControl>
                      <Input placeholder="" type="text" {...field} />
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
      </div>
    </div>
  );
};

export default HelpForm;
