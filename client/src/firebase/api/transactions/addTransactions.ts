import { DocumentData, doc, getDoc, setDoc } from "firebase/firestore";
import { Transaction } from "../../../types/transactions.types";
import { db } from "../../firebase.config";

export const addIncome = async (userId: string, incomeObj: Transaction) => {
  const userTransactionDoc = doc(db, "transactions", userId);
  const docSnap = (await getDoc(userTransactionDoc)) as DocumentData;
  await setDoc(userTransactionDoc, {
    ...docSnap.data(),
    income: [...docSnap.data().income, incomeObj],
  });
  console.log("Transaction registered");
};

export const addExpense = async (userId: string, expenseObj: Transaction) => {
  const userTransactionDoc = doc(db, "transactions", userId);
  const docSnap = (await getDoc(userTransactionDoc)) as DocumentData;
  await setDoc(userTransactionDoc, {
    ...docSnap.data(),
    expenses: [...docSnap.data().expenses, expenseObj],
  });
  console.log("Transaction registered");
};
