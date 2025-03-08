import { useSelector } from "react-redux";
import Table from "../../../components/_core/Table/Table";
import { Transaction } from "../../../types/transactions.types";

const Transactions = () => {
  const userTransactions = useSelector(
    (state: { userTransactions: { transactions: Transaction[] } }) =>
     Object.values(state.userTransactions.transactions),
  );

  return (
    <div>
      <Table transactions={userTransactions} />
    </div>
  );
};

export default Transactions;
