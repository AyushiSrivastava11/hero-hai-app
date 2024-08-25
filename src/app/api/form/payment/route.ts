import { NextRequest, NextResponse } from "next/server";
import { Payment } from "@/model/schema/payment.schema"; // Ensure correct import
import dbConnect from "@/lib/db";

/**
 * Handles payment-related API requests
 */
export const POST = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { userId, helpRequestId, amount } = await req.json();

    const newPayment = new Payment({
      userId,
      helpRequestId,
      amount,
      status: "pending",
      paymentDate: new Date(),
    });

    const savedPayment = await newPayment.save();

    return NextResponse.json(
      { message: "Payment created successfully", payment: savedPayment },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in creating payment", error);
    return NextResponse.json({ message: "Payment creation failed" }, { status: 500 });
  }
};

/**
 * Retrieve all payments or filter based on userId or helpRequestId
 */
export const GET = async (req: NextRequest) => {
  try {
    await dbConnect();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");
    const helpRequestId = searchParams.get("helpRequestId");

    const filter: any = {};
    if (userId) filter.userId = userId;
    if (helpRequestId) filter.helpRequestId = helpRequestId;

    const payments = await Payment.find(filter);

    return NextResponse.json(
      { message: "Payments retrieved successfully", payments },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in retrieving payments", error);
    return NextResponse.json({ message: "Failed to retrieve payments" }, { status: 500 });
  }
};
// import { NextApiRequest, NextApiResponse } from "next";
// import dbConnect from "@/lib/db";
// //import { Payment } from "@/model/schema";
// //import { Payment } from "@/model/schema/payment.schema";
// //import Payment from "@/models/schema/payment.schema";
// import { Payment } from "@/model/schema/payment.schema";

// /**
//  * Handles payment-related API requests
//  */
// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//   // Connect to the database
//   await dbConnect();

//   switch (req.method) {
//     case "POST":
//       await handleCreatePayment(req, res);
//       break;
//     case "GET":
//       await handleGetPayments(req, res);
//       break;
//     default:
//       res.status(405).json({ message: "Method not allowed" });
//   }
// };

// export default handler;

// /**
//  * Create a new payment
//  */
// const handleCreatePayment = async (
//   req: NextApiRequest,
//   res: NextApiResponse
// ) => {
//   const { userId, helpRequestId, amount } = req.body;

//   try {
//     const newPayment = new Payment({
//       userId,
//       helpRequestId,
//       amount,
//       status: "pending",
//       paymentDate: new Date(),
//     });

//     const savedPayment = await newPayment.save();

//     res
//       .status(201)
//       .json({ message: "Payment created successfully", payment: savedPayment });
//   } catch (error) {
//     res.status(500).json({ message: "Payment creation failed" });
//   }
// };

// /**
//  * Retrieve all payments or filter based on userId or helpRequestId
//  */
// const handleGetPayments = async (req: NextApiRequest, res: NextApiResponse) => {
//   const { userId, helpRequestId } = req.query;

//   try {
//     const filter: any = {};
//     if (userId) filter.userId = userId;
//     if (helpRequestId) filter.helpRequestId = helpRequestId;

//     const payments = await Payment.find(filter);

//     res
//       .status(200)
//       .json({ message: "Payments retrieved successfully", payments });
//   } catch (error) {
//     res.status(500).json({ message: "Failed to retrieve payments" });
//   }
// };
