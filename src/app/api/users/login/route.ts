import { NextRequest, NextResponse } from "next/server";
import { serialize, CookieSerializeOptions } from "cookie";
import dbConnect from "@/lib/db";

import { createToken } from "@/utils/jwt.util";
import { checkPassword } from "@/utils/cryptography.util";
import User from "@/model/schema/user.schema";

/**
 * Login user by checking if the user already exists
 */
export const POST = async (req: NextRequest) => {
  await dbConnect();
  const { email, password } = await req.json();
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

    const cookie = serialize("access_token", access_token, cookieOptions);
    return NextResponse.json(
      { message: "Login successful" },
      { status: 200, headers: { "Set-Cookie": cookie } }
    );
  }
  return NextResponse.json(
    { message: "Invalid email or password" },
    { status: 401 }
  );
};
