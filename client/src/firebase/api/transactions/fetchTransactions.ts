import { db } from "../../firebase.config";
import { doc, getDoc, DocumentData } from "firebase/firestore";

export async function fetchAllTransactions(userID: string) {
  const transactionRef = doc(db, "transactions", userID);
  const transactions = (await getDoc(transactionRef)) as DocumentData;

  if (!transactions.exists()) {
    throw new Error("User has no transactions");
  }

  return transactions.data();
}
