import { Schema, model } from "mongoose";

const MenuItemSchema = new Schema({
  name: String,
  price: Number,
  image: String,
  description: String,
  category: String
});

export default model("MenuItem", MenuItemSchema);
