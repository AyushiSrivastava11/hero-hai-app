import type { NextApiRequest, NextApiResponse } from "next";
import { serialize, CookieSerializeOptions } from "cookie";

/**
 * Logout user by clearing the authentication cookie
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    // Clear the cookie by setting it with a past expiration date
    const cookieOptions: CookieSerializeOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure it's only secure in production
      sameSite: "none",
      expires: new Date(0), // Set the cookie to expire in the past
    };

    res.setHeader("Set-Cookie", serialize("access_token", "", cookieOptions));
    return res.status(200).json({ message: "User logged out successfully" });
  }

  return res.status(405).json({ message: "Method not allowed" });
};

export default handler;
