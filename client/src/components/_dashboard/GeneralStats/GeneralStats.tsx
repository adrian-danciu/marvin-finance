import { ArrowDownRightIcon, ArrowUpLeftIcon } from "@heroicons/react/24/solid";

const statuses = {
  Paid: "text-green-700 bg-green-50 ring-green-600/20",
  Withdraw: "text-gray-600 bg-gray-50 ring-gray-500/10",
  Overdue: "text-red-700 bg-red-50 ring-red-600/10",
};
const clients = [
  {
    id: 1,
    name: "Income",
    imageUrl: (
      <ArrowUpLeftIcon className="text-custom-green h-8 w-8 rounded-xl bg-green-100 p-2" />
    ),
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: "$2,000.00",
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "Expenses",
    imageUrl: (
      <ArrowDownRightIcon className="h-8 w-8 rounded-xl bg-red-100 p-2 text-red-500" />
    ),
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: "$14,000.00",
      status: "Paid",
    },
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function GeneralStats() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8"
    >
      {clients.map((client) => (
        <li
          key={client.id}
          className=" overflow-hidden rounded-xl border border-gray-200"
        >
          <div
            className={`flex items-center gap-x-4 border-b border-gray-900/5 ${client.name === "Income" ? "bg-custom-green" : "bg-red-400"} p-6`}
          >
            {client.imageUrl}
            <div
              className={`text-md font-medium leading-6 ${client.name === "Income" ? "text-green-100" : "text-red-100"}`}
            >
              {client.name}
            </div>
          </div>
          <dl className="-my-3 divide-y divide-gray-100 bg-gray-50 px-6 py-4 text-sm leading-6">
            <div className="flex justify-between gap-x-4 py-3">
              {/* <dt className="text-gray-500">Amount</dt> */}
              <dd className="flex items-start gap-x-2">
                <div className="text-4xl font-medium text-gray-900">
                  {client.lastInvoice.amount}
                </div>
              </dd>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <dt className="text-gray-500">
                Last {client.name === "Income" ? "Income" : "Expense"}
              </dt>
              <dd className="text-gray-700">
                <time dateTime={client.lastInvoice.dateTime}>
                  {client.lastInvoice.date}
                </time>
              </dd>
            </div>
          </dl>
        </li>
      ))}
    </ul>
  );
}
