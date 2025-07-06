import { doc, updateDoc } from "firebase/firestore";
import { Transaction } from "../../../types/transactions.types";
import { db } from "../../firebase.config";

export const updateTransaction = async (
  userId: string,
  transactionDetails: Transaction
) => {
  try {
    const transactionRef = doc(db, "transactions", transactionDetails.id);
    await updateDoc(transactionRef, {
      ...transactionDetails,
      user_id: userId,
      updated_at: new Date().toISOString()
    });
    console.log("Transaction updated successfully");
    return true;
  } catch (error) {
    console.error("Error updating transaction:", error);
    throw error;
  }
};
