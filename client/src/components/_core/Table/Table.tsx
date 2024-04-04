import { Fragment } from "react";
import { days, statuses } from "../../../mocks/transactions.mock";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Table() {
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
                {days.map((day) => (
                  <Fragment key={day.dateTime}>
                    {day.transactions.map((transaction) => (
                      <tr key={transaction.id}>
                        <td className="relative py-5 pr-6">
                          <div className="flex gap-x-6">
                            <transaction.icon
                              className="hidden h-6 w-5 flex-none text-gray-400 sm:block"
                              aria-hidden="true"
                            />
                            <div className="flex-auto">
                              <div className="flex items-start gap-x-3">
                                <div className="text-sm font-medium leading-6 text-gray-900">
                                  {transaction.amount}
                                </div>
                                <div
                                  className={classNames(
                                    statuses[
                                      transaction.status as keyof typeof statuses
                                    ],
                                    "rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset"
                                  )}
                                >
                                  {transaction.status}
                                </div>
                              </div>
                              {transaction.tax ? (
                                <div className="mt-1 text-xs leading-5 text-gray-500">
                                  {transaction.tax} tax
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                          <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                        </td>
                        <td className="hidden py-5 pr-6 sm:table-cell">
                          <div className="text-sm leading-6 text-gray-900">
                            {transaction.category}
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            {transaction.description}
                          </div>
                        </td>
                        <td className="py-5 text-right">
                          <div className="flex justify-end">
                            <a
                              href={transaction.href}
                              className="text-sm font-medium leading-6 text-custom-green hover:opacity-70"
                            >
                              View
                              <span className="hidden sm:inline">
                                {" "}
                                transaction
                              </span>
                              <span className="sr-only">
                                , invoice #{transaction.invoiceNumber},{" "}
                                {transaction.category}
                              </span>
                            </a>
                          </div>
                          <div className="mt-1 text-xs leading-5 text-gray-500">
                            Invoice{" "}
                            <span className="text-gray-900">
                              #{transaction.invoiceNumber}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
