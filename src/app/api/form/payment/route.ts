import { NextApiRequest, NextApiResponse } from "next";
import { connectToDatabase } from "@/lib/db";
import Payment from "@/models/Payment";

/**
 * Handles payment-related API requests
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  // Connect to the database
  await connectToDatabase();

  switch (req.method) {
    case "POST":
      await handleCreatePayment(req, res);
      break;
    case "GET":
      await handleGetPayments(req, res);
      break;
    default:
      res.status(405).json({ message: "Method not allowed" });
  }
};

export default handler;

/**
 * Create a new payment
 */
const handleCreatePayment = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, helpRequestId, amount } = req.body;

  try {
    const newPayment = new Payment({
      userId,
      helpRequestId,
      amount,
      status: 'pending',
      paymentDate: new Date(),
    });

    const savedPayment = await newPayment.save();

    res.status(201).json({ message: "Payment created successfully", payment: savedPayment });
  } catch (error) {
    res.status(500).json({ message: "Payment creation failed", error: error.message });
  }
};

/**
 * Retrieve all payments or filter based on userId or helpRequestId
 */
const handleGetPayments = async (req: NextApiRequest, res: NextApiResponse) => {
  const { userId, helpRequestId } = req.query;

  try {
    const filter: any = {};
    if (userId) filter.userId = userId;
    if (helpRequestId) filter.helpRequestId = helpRequestId;

    const payments = await Payment.find(filter);

    res.status(200).json({ message: "Payments retrieved successfully", payments });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve payments", error: error.message });
  }
};
