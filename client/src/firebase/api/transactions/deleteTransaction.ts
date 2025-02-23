import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const deleteTransaction = async (
  userId: string,
  transactionId: string,
) => {
  const transactionRef = doc(
    db,
    "users",
    userId,
    "transactions",
    transactionId,
  );
  await deleteDoc(transactionRef);
  console.log("Transaction deleted successfully");
  return true;
};
