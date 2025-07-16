// models/Contact.js

import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    message: { type: String, required: true },
  },
  { timestamps: true }
);

export const Contact =
  mongoose.models.Contact || mongoose.model("Contact", ContactSchema);
