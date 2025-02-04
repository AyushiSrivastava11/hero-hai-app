import { z } from "zod";

const signUpFormSchema = z
  .object({
    emailAddress: z.string().email(),
    name: z.string(),
    password: z.string().min(8),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  );

export default signUpFormSchema;
