import Transaction from "../models/Transaction.js";

export const addTransaction = async (req, res) => {
  const {
    id,
    title,
    user_id,
    date,
    type,
    amount,
    account,
    category,
    currency,
    created_at,
    updated_at,
  } = req.body;
  const newTransaction = new Transaction({
    id,
    title,
    user_id,
    date,
    type,
    amount,
    account,
    category,
    currency,
    created_at,
    updated_at,
  });

  //to do data validation before try / saving object

  try {
    await newTransaction.save();
    res.status(201).json(newTransaction);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).json(transactions);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    const transaction = await Transaction.findById(id);
    if (!transaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(transaction);
  } catch (error) {
    res
      .status(404)
      .json({ message: "Error getting transaction", error: error.message });
  }
};

export const getTransactionsByUserId = async (req, res) => {};

export const updateTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedTransaction = await Transaction.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!updatedTransaction) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json(updatedTransaction);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating transaction", error: error.message });
  }
};

export const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Transaction.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: "Transaction not found" });
    }
    res.json({ message: "Transaction deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting transaction", error: error.message });
  }
};
