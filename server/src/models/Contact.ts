import { Schema, model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String
  },
  { timestamps: true }
);

export default model("Contact", ContactSchema);
