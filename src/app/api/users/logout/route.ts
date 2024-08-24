import { NextRequest, NextResponse } from "next/server";
import { serialize, CookieSerializeOptions } from "cookie";

/**
 * Logout user by clearing the authentication cookie
 */

export const POST = async (req: NextRequest) => {
  try {
    // Clear the cookie by setting it with a past expiration date
    const cookieOptions: CookieSerializeOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure it's only secure in production
      sameSite: "none",
      expires: new Date(0), // Set the cookie to expire in the past
    };

    const cookie = serialize("access_token", "", cookieOptions);

    return NextResponse.json(
      { message: "User logged out successfully" },
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while logging out" },
      { status: 500 }
    );
  }
};
