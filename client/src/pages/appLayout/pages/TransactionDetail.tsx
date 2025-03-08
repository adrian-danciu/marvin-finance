import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Transaction } from "../../../types/transactions.types";
import { ArrowDownCircleIcon, ArrowUpCircleIcon } from "@heroicons/react/20/solid";
import { statuses } from "../../../mocks/transactions.mock";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TransactionDetail = () => {
  const { id } = useParams();
  const transaction = useSelector(
    (state: { userTransactions: { transactions: Transaction[] } }) =>
      Object.values(state.userTransactions.transactions).find((t) => t.id === id)
  );

  if (!transaction) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-gray-500">Transaction not found</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow">
      <div className="px-4 sm:px-6 lg:px-8 py-4 bg-black w-full h-full rounded-t-xl">
        <h2 className="mx-auto w-full text-base font-semibold leading-6 text-white text-left">
          Transaction Details
        </h2>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          {transaction.type === "income" ? (
            <ArrowUpCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
          ) : (
            <ArrowDownCircleIcon className="h-8 w-8 text-gray-400" aria-hidden="true" />
          )}
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{transaction.title}</h3>
            <p className="text-sm text-gray-500 first-letter:capitalize">{transaction.category}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Amount</h4>
              <p className="mt-1 text-lg font-semibold text-gray-900">${transaction.amount}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Status</h4>
              <div className="mt-1">
                <span
                  className={classNames(
                    statuses[transaction.status as keyof typeof statuses],
                    "inline-flex rounded-md py-1 px-2 text-sm font-medium ring-1 ring-inset first-letter:capitalize"
                  )}
                >
                  {transaction.status}
                </span>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Transaction Date</h4>
              <p className="mt-1 text-gray-900">{transaction.date}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Description</h4>
              <p className="mt-1 text-gray-900">{transaction.description || "No description provided"}</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Transaction ID</h4>
              <p className="mt-1 text-gray-900 font-mono text-sm">{transaction.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionDetail; 