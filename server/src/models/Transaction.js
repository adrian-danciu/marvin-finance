import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  id: { type: String },
  title: { type: String },
  user_id: { type: String },
  date: { type: String },
  type: { type: String },
  amount: { type: Number },
  account: { type: String },
  category: { type: String },
  currency: { type: String },
  created_at: { types: String },
  updated_at: { type: String },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;
