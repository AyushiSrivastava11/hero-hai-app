// const logInFormSchema = z.object({
//   emailAddress: z.string().email(),
//   password: z.string().min(8),
// });

// export default logInFormSchema;
import { z } from "zod";
import mongoose from "mongoose";

// Define the User schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

// Define the Project schema

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  contributers: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
      responsibility: {
        type: String,
        required: true,
      },
    },
  ],
  tasks: [
    {
      title: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["pending", "in-progress", "completed"],
        default: "pending",
      },
    },
  ],
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
});

// Export models
export const User = mongoose.model("User", userSchema);
export const Project = mongoose.model("Project", projectSchema);
