import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/model/schema/user.schema";

interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
}

async function storeContactDetails(data: ContactRequestBody): Promise<void> {
  console.log('Storing contact details:', data);
}

async function notifyRecipient(data: ContactRequestBody): Promise<void> {
  console.log('Notifying recipient with data:', data);
}



export const POST = async (req: NextRequest) =>{
  try {
    await dbConnect();
    const { name, email, message } = await req.json();
    if(!name || !email || !message){
      return NextResponse.json({message: "All fields are required"}, {status: 400});
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User does not exist" }, { status: 400 });
    }
    await storeContactDetails({name, email, message});
    await notifyRecipient({name, email, message});
    return NextResponse.json({message: "Your message has been sent successfully"}, {status: 200});
   
  } catch (error) {
    console.log("Error in Contact handler",error);
    return NextResponse.json({message: "Internal Server Error"}, {status: 500});
    
  }
}
