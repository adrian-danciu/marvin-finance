import {
  DocumentData,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { Transaction } from "../../../types/transactions.types";
import { db } from "../../firebase.config";

export const addTransaction = async (
  userID: string,
  transactionDetails: Transaction
) => {
  const userTransactionDoc = doc(db, "transactions", userID);
  const docSnap = (await getDoc(userTransactionDoc)) as DocumentData;
  if (docSnap.exists()) {
    await updateDoc(userTransactionDoc, {
      ...docSnap.data(),
      [transactionDetails.id]: { ...transactionDetails },
    });
    console.log("Transaction registered");
  } else {
    await setDoc(userTransactionDoc, {
      [transactionDetails.id]: { ...transactionDetails },
    });
    console.log("Transaction registered");
  }
};
