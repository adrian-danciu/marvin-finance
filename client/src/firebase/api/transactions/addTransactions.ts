import { doc, setDoc } from "firebase/firestore";
import { Transaction } from "../../../types/transactions.types";
import { db } from "../../firebase.config";

export const addTransaction = async (
  userID: string,
  transactionDetails: Transaction
) => {
  try {
    const transactionRef = doc(db, "transactions", transactionDetails.id);
    await setDoc(transactionRef, {
      ...transactionDetails,
      user_id: userID
    });
    console.log("Transaction registered");
    return true;
  } catch (error) {
    console.error("Error adding transaction:", error);
    throw error;
  }
};
