import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const deleteTransaction = async (
  transactionId: string,
) => {
  try {
    const transactionRef = doc(db, "transactions", transactionId);
    await deleteDoc(transactionRef);
    console.log("Transaction deleted successfully");
    return true;
  } catch (error) {
    console.error("Error deleting transaction:", error);
    throw error;
  }
};
