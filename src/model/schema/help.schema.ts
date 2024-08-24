import mongoose, { Document } from "mongoose";
// import { User } from "./user.schema";

export interface IHelpRequest extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  title: string;
  description: string;
  //help_type: string;
  amount: number;
  createdBy: mongoose.Schema.Types.ObjectId;
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

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  serviceType: { type: String },

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