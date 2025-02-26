import { useSelector } from "react-redux";
import Table from "../../../components/_core/Table/Table";
import BudgetOverview from "../../../components/_dashboard/BudgetOverview/BudgetOverview";
import GeneralStats from "../../../components/_dashboard/GeneralStats/GeneralStats";
import UpcomingPayments from "../../../components/_dashboard/UpcomingPayments/UpcomingPayments";
import { Transaction } from "../../../types/transactions.types";

const Dashboard = () => {
  const userTransactions = useSelector(
    (state: { userTransactions: { transactions: Transaction[] } }) =>
      state.userTransactions.transactions
  );
  return (
    <>
      <GeneralStats />
      <Table transactions={Object.values(userTransactions)} />
      <div className="grid grid-cols-12 mt-10 gap-6 xl:gap-8">
        <BudgetOverview />
        <UpcomingPayments />
      </div>
    </>
  );
};

export default Dashboard;
