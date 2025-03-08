import {
  ArrowDownCircleIcon,
  ArrowUpCircleIcon,
} from "@heroicons/react/20/solid";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getEditTransactionContent } from "../../../constants/editTransaction.content";
import { updateTransaction } from "../../../firebase/api/transactions/updateTransaction";
import { statuses } from "../../../mocks/transactions.mock";
import { updateTransactions } from "../../../store/actions";
import { Transaction } from "../../../types/transactions.types";
import DialogComponent from "../Dialog/Dialog";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Table({
  transactions,
}: {
  transactions: Transaction[];
}) {
  const [isEditOpen, setEditOpen] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
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

  const handleUpdate = async (data: Partial<Transaction>) => {

    if (selectedTransaction) {
      await updateTransaction(selectedTransaction.user_id, {
        ...selectedTransaction,
        ...data,
      });
      setEditOpen(false);
      
      // Optionally, dispatch an action to update the Redux store
     const index =  transactions.findIndex((transaction)=>(transaction.id === selectedTransaction.id))
     transactions[index] = {...selectedTransaction, ...data}

      dispatch(
        updateTransactions(transactions)
      );
    }
  };

  if (!transactions) {
    return <p>Loading...</p>;
  }

  return (
    <div className="mt-10 bg-white rounded-xl">
      <div className="px-4 sm:px-6 lg:px-8 py-4 bg-black w-full h-full rounded-t-xl">
        <h2 className="mx-auto w-full text-base font-semibold leading-6 text-white text-left">
          Transactions
        </h2>
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
                  {transactions.map((transaction) => (
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
                          <button
                            onClick={() => handleEditClick(transaction)}
                            className="text-sm font-medium leading-6 text-custom-blue hover:opacity-70 "
                          >
                            Edit
                          </button>
                          <Link
                            to={`/app/transactions/${transaction.id}`}
                            className="text-sm font-medium leading-6 text-custom-green hover:opacity-70"
                          >
                            View
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
    </div>
  );
}
