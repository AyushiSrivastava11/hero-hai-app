import type { NextApiRequest, NextApiResponse } from "next";
import { User } from "@/model/schemas";
import { hashPassword } from "@/utils/cryptography.util";

/**
 * Sign Up Route Handler
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ email, hashedPassword });
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  }
  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
