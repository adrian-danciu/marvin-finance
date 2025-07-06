import { db } from "../../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Transaction } from "../../../types/transactions.types";

export async function fetchAllTransactions(userID: string) {
  try {
    const q = query(
      collection(db, "transactions"),
      where("user_id", "==", userID)
    );
    
    const querySnapshot = await getDocs(q);
    const transactions = querySnapshot.docs.map(doc => doc.data() as Transaction);
    
    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}
