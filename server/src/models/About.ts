import { Schema, model } from "mongoose";

const AboutSchema = new Schema({
  title: String,
  description: String,
  location: String
});

export default model("About", AboutSchema);
