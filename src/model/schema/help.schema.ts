import mongoose, { Document } from "mongoose";
// import { User } from "./user.schema";

export interface IHelpRequest extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  amount: number;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

const helpRequestSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },


  amount: {
    type: Number,
    required: true,
  },

  

  status: {
    type: String,
    enum: ["open", "closed"],
    default: "open",
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date(),
  }
});

export const HelpRequest = mongoose.model<IHelpRequest>(
  "HelpRequest",
  helpRequestSchema
);