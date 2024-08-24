import { NextRequest, NextResponse } from "next/server";
import { HelpRequest } from "@/model/schema/help.schema";
import dbConnect from "@/lib/db";

/**
 * Create Form Route Handler
 */
export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { userId, title, description, amount, status } = await req.json();

    // Validate request body
    if (!userId || !title || !description || !amount || !status) {
      return NextResponse.json(
        { message: "All required fields must be filled." },
        { status: 400 }
      );
    }

    // Create a new HelpRequest document in the database
    const newHelpRequest = new HelpRequest({
      userId,
      title,
      description,
      amount,
      status,
    });

    await newHelpRequest.save();

    // Respond with success message
    return NextResponse.json(
      { success: true, message: "Your form has been submitted successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in Create Form Route Handler", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
