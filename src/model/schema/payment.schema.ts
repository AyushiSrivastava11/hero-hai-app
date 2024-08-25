import mongoose, { Document } from "mongoose";

export interface IPayment extends Document {
  to: string;
  from: string;
  amount: number;
  createdAt: Date;
}

// Define the Payment schema
const PaymentSchema = new mongoose.Schema({
  to: {
    type: String,
    required: true,
  },
  from: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//export default mongoose.model<IPayment>("Payment", PaymentSchema);
export const Payment = mongoose.model<IPayment>("Payment", PaymentSchema);

