import { useSelector } from "react-redux";
import Table from "../../../components/_core/Table/Table";
import { Transaction } from "../../../types/transactions.types";

interface TransactionsProps {
  showLatestOnly?: boolean;
}

const Transactions = ({ showLatestOnly = false }: TransactionsProps) => {
  const userTransactions = useSelector(
    (state: { userTransactions: { transactions: Transaction[] } }) =>
     Object.values(state.userTransactions.transactions),
  );

  return (
    <div>
      <Table transactions={userTransactions} showLatestOnly={showLatestOnly} />
    </div>
  );
};

export default Transactions;
