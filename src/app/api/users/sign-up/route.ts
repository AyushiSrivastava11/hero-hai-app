import { NextRequest, NextResponse } from "next/server";
import User from "@/model/schema/user.schema";
import { hashPassword } from "@/utils/cryptography.util";
import dbConnect from "@/lib/db";

/**
 * Sign Up Route Handler
 */
export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await hashPassword(password);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();
    return NextResponse.json({ message: "User created successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error in Sign Up Route Handler", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
};
