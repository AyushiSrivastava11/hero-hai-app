import type { NextApiRequest, NextApiResponse } from "next";
import { serialize, CookieSerializeOptions } from "cookie";
import { User } from "@/model/schemas";
import { createToken } from "@/utils/jwt.util";
import { checkPassword } from "@/utils/cryptography.util";

/**
 * Login user by checking if the user already exists
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (
      user &&
      typeof user.password === "string" &&
      (await checkPassword(password, user.password))
    ) {
      const cookieOptions: CookieSerializeOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // Check for production environment
        sameSite: "none",
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      };
      const access_token: string = createToken({ email: user.email });

      res.setHeader(
        "Set-Cookie",
        serialize("access_token", access_token, cookieOptions)
      );
      return res.status(200).json({ message: "User logged in successfully" });
    }

    return res
      .status(404)
      .json({ message: "User not found or incorrect password" });
  }

  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
