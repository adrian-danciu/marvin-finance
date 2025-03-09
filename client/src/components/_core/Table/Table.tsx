import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import {
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  CalendarIcon,
  TrashIcon,
  PencilSquareIcon,
  EyeIcon,
  ReceiptRefundIcon,
} from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEditTransactionContent } from "../../../constants/editTransaction.content";
import { getDeleteTransactionContent } from "../../../constants/deleteTransaction.content";
import { deleteTransaction } from "../../../firebase/api/transactions/deleteTransaction";
import { updateTransaction } from "../../../firebase/api/transactions/updateTransaction";
import { statuses } from "../../../mocks/transactions.mock";
import { updateTransactions } from "../../../store/actions";
import { Transaction } from "../../../types/transactions.types";
import DialogComponent from "../Dialog/Dialog";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type SortType = "date-asc" | "date-desc" | "amount-asc" | "amount-desc";

export default function Table({
  transactions,
  showLatestOnly = false,
}: {
  transactions: Transaction[];
  showLatestOnly?: boolean;
}) {
  const [isEditOpen, setEditOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [sortType, setSortType] = useState<SortType>("date-asc");
  const [searchQuery, setSearchQuery] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Transaction>();
  const dispatch = useDispatch();

  const handleEditClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setEditOpen(true);
  };

  const handleDeleteClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setDeleteOpen(true);
    
  };

  const handleDelete = async () => {
    if (selectedTransaction) {
      try {
        await deleteTransaction(selectedTransaction.id);
        const updatedTransactions = transactions.filter(t => t.id !== selectedTransaction.id);
        dispatch(updateTransactions(updatedTransactions));
        setDeleteOpen(false);
      } catch (error) {
        console.error("Error deleting transaction:", error);
      }
    }
  };

  const handleUpdate = async (data: Partial<Transaction>) => {
    if (selectedTransaction) {
      await updateTransaction(selectedTransaction.user_id, {
        ...selectedTransaction,
        ...data,
      });
      setEditOpen(false);

      const index = transactions.findIndex(
        (transaction) => transaction.id === selectedTransaction.id
      );
      transactions[index] = { ...selectedTransaction, ...data };

      dispatch(updateTransactions(transactions));
    }
  };

  if (!transactions || transactions.length === 0) {
    return (
      <div className="mt-10 bg-white rounded-xl">
        <div className="px-4 sm:px-6 lg:px-8 py-4 bg-black w-full rounded-t-xl">
          <h2 className="text-base font-semibold leading-6 text-white">
            {showLatestOnly ? "Recent Transactions" : "Transactions"}
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center py-12">
          <ReceiptRefundIcon className="mx-auto h-12 w-12 text-custom-green" />
          <h3 className="mt-2 text-sm font-semibold text-gray-900">No transactions</h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new transaction.
          </p>
        </div>
      </div>
    );
  }

  const sortTransactions = (transactions: Transaction[]) => {
    const sortedTransactions = [...transactions];

    switch (sortType) {
      case "date-asc":
        return sortedTransactions.sort((a, b) =>
          a.date && b.date
            ? new Date(a.date).getTime() - new Date(b.date).getTime()
            : 0
        );
      case "date-desc":
        return sortedTransactions.sort((a, b) =>
          a.date && b.date
            ? new Date(b.date).getTime() - new Date(a.date).getTime()
            : 0
        );
      case "amount-asc":
        return sortedTransactions.sort(
          (a, b) => (Number(a.amount) || 0) - (Number(b.amount) || 0)
        );
      case "amount-desc":
        return sortedTransactions.sort(
          (a, b) => (Number(b.amount) || 0) - (Number(a.amount) || 0)
        );
      default:
        return sortedTransactions;
    }
  };

  // Filter and sort transactions
  const filteredAndSortedTransactions = showLatestOnly
    ? [...transactions]
        .filter((t) => t.date)
        .sort(
          (a, b) => new Date(a.date!).getTime() - new Date(b.date!).getTime()
        )
        .slice(-5)
    : sortTransactions(
        transactions.filter(
          (t) =>
            t.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            t.category?.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );

  return (
    <div className="mt-10 bg-white rounded-xl">
      <div className="px-4 sm:px-6 lg:px-8 py-4 bg-black w-full rounded-t-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h2 className="text-base font-semibold leading-6 text-white">
            {showLatestOnly ? "Recent Transactions" : "Transactions"}
          </h2>

          {!showLatestOnly && (
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
              <div className="relative w-full sm:w-64">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search transactions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-custom-green sm:text-sm sm:leading-6"
                />
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setSortType(
                      sortType === "date-asc" ? "date-desc" : "date-asc"
                    )
                  }
                  className={classNames(
                    "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium",
                    sortType.startsWith("date")
                      ? "bg-custom-green text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <CalendarIcon className="h-4 w-4" />
                  {sortType === "date-asc" ? "Oldest" : "Newest"}
                </button>

                <button
                  onClick={() =>
                    setSortType(
                      sortType === "amount-asc" ? "amount-desc" : "amount-asc"
                    )
                  }
                  className={classNames(
                    "inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium",
                    sortType.startsWith("amount")
                      ? "bg-custom-green text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  )}
                >
                  <CurrencyDollarIcon className="h-4 w-4" />
                  {sortType === "amount-asc" ? "Smallest" : "Largest"}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="overflow-hidden border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <table className="w-full text-left">
              <thead className="sr-only">
                <tr>
                  <th>Amount</th>
                  <th className="hidden sm:table-cell">Client</th>
                  <th>More details</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                <Fragment>
                  {filteredAndSortedTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td className="relative py-5 pr-6">
                        <div className="flex gap-x-6">
                          {transaction.type === "income" ? (
                            <ArrowUpCircleIcon
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            />
                          ) : (
                            <ArrowDownCircleIcon
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            />
                          )}

                          <div className="flex-auto">
                            <div className="flex items-start gap-x-3">
                              <div className="text-sm font-medium leading-6 text-gray-900">
                                {transaction.amount} $
                              </div>
                              <div
                                className={classNames(
                                  statuses[
                                    transaction.status as keyof typeof statuses
                                  ],
                                  "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset first-letter:capitalize"
                                )}
                              >
                                {transaction.status}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                        <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                      </td>
                      <td className="hidden py-5 pr-6 sm:table-cell">
                        <div className="text-sm leading-6 text-gray-900 first-letter:capitalize">
                          {transaction.category}
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500 first-letter:capitalize">
                          {transaction.title}
                        </div>
                      </td>
                      <td className="py-5 text-right">
                        <div className="flex justify-end gap-2">
                          {!showLatestOnly ? (
                            <>
                              <button
                                onClick={() => handleEditClick(transaction)}
                                className="text-sm font-medium leading-6 text-custom-blue hover:opacity-70"
                              >
                                <PencilSquareIcon className="h-5 w-5" />
                              </button>
                              <button
                                onClick={() => handleDeleteClick(transaction)}
                                className="text-sm font-medium leading-6 text-red-600 hover:opacity-70"
                              >
                                <TrashIcon className="h-5 w-5" />
                              </button>
                            </>
                          ) : null}
                          <Link
                            to={`/app/transactions/${transaction.id}`}
                            className="text-sm font-medium leading-6 text-custom-green hover:opacity-70"
                          >
                            <EyeIcon className="h-5 w-5" />
                          </Link>
                        </div>
                        <div className="mt-1 text-xs leading-5 text-gray-500">
                          Transaction date:{" "}
                          <span className="text-gray-900">
                            {transaction.date}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </Fragment>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {isEditOpen && selectedTransaction && (
        <DialogComponent
          open={isEditOpen}
          setOpen={setEditOpen}
          content={getEditTransactionContent(
            () => setEditOpen(false),
            selectedTransaction
          )}
          register={register}
          handleSubmit={handleSubmit(handleUpdate)}
          errors={errors}
        />
      )}
      {isDeleteOpen && selectedTransaction && (
        <DialogComponent
          open={isDeleteOpen}
          setOpen={setDeleteOpen}
          content={getDeleteTransactionContent(
            () => setDeleteOpen(false),
            handleDelete,
            selectedTransaction.title
          )}
          register={register}
          handleSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            handleDelete();
          }}
          errors={errors}
        />
      )}
    </div>
  );
}
