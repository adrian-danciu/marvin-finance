import { doc, getDoc, updateDoc } from "firebase/firestore";
import { Transaction } from "../../../types/transactions.types";
import { db } from "../../firebase.config";

export const updateTransaction = async (
  userId: string,
  transactionDetails: Transaction
) => {
  try {
    const userTransactionsDocRef = doc(db, "transactions", userId);
    const userTransactionsDocSnap = await getDoc(userTransactionsDocRef);

    if (userTransactionsDocSnap.exists()) {
      const transactionsData = userTransactionsDocSnap.data();

      if (transactionsData[transactionDetails.id]) {
        const updatedTransaction = {
          ...transactionsData[transactionDetails.id],
          ...transactionDetails,
        };

        await updateDoc(userTransactionsDocRef, {
          [transactionDetails.id]: updatedTransaction,
        });

        console.log("Transaction updated successfully.");
      } else {
        console.error("Transaction not found.");
      }
    } else {
      console.error("User transactions document not found.");
    }
  } catch (error) {
    console.error("Error updating transaction:", error);
  }
};
