import { z } from "zod";

const helpFormSchema = z.object({
  title: z.string().min(1),
  username: z.string().min(1),
  donation: z.string().min(1),
  helpline: z.string().min(10),
});

export default helpFormSchema;
