import { Schema, model } from "mongoose";

const OrderSchema = new Schema(
  {
    items: [
      {
        name: String,
        price: Number,
        quantity: Number
      }
    ],
    totalAmount: Number,
    customerName: String,
    address: String
  },
  { timestamps: true }
);

export default model("Order", OrderSchema);
