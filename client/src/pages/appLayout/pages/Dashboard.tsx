import Table from "../../../components/_core/Table/Table";
import BudgetOverview from "../../../components/_dashboard/BudgetOverview/BudgetOverview";
import GeneralStats from "../../../components/_dashboard/GeneralStats/GeneralStats";
import UpcomingPayments from "../../../components/_dashboard/UpcomingPayments/UpcomingPayments";

const Dashboard = () => {
  return (
    <>
      <GeneralStats />
      <Table />
      <div className="grid grid-cols-12 mt-10 gap-6 xl:gap-8">
        <BudgetOverview />
        <UpcomingPayments />
      </div>
    </>
  );
};

export default Dashboard;
