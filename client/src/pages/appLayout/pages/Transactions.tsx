import { useSelector } from "react-redux";
import { Transaction } from "../../../types/transactions.types";

const Transactions = () => {
  const userTransactions = useSelector(
    (state: { userTransactions: { transactions: Transaction[] } }) =>
      state.userTransactions.transactions,
  );

  console.log(userTransactions);

  return <div>Transactions</div>;
};

export default Transactions;
