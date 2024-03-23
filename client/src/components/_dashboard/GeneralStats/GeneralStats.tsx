import {
  ArrowDownRightIcon,
  ArrowUpLeftIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import AccountShowcase from "../AccountsShowcase/AccountsShowcase";
import useAnimatedNumber from "../../../hooks/useAnimatedNumber";

interface Client {
  id: number;
  name: string;
  icon: JSX.Element;
  lastInvoice: {
    date: string;
    dateTime: string;
    amount: number;
    status: string;
  };
}

// Define your clients array with the appropriate icons instead of the imageUrl
const clients: Client[] = [
  {
    id: 1,
    name: "Income",
    icon: <ArrowUpLeftIcon className="h-6 w-6 text-green-100" />,
    lastInvoice: {
      date: "December 13, 2022",
      dateTime: "2022-12-13",
      amount: 2000,
      status: "Overdue",
    },
  },
  {
    id: 2,
    name: "Expenses",
    icon: <ArrowDownRightIcon className="h-6 w-6 text-red-100" />,
    lastInvoice: {
      date: "January 22, 2023",
      dateTime: "2023-01-22",
      amount: 14000,
      status: "Paid",
    },
  },
];

export default function GeneralStats() {
  const formatAmount = (amount: number) => {
    return amount.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-3 xl:gap-x-8">
      {clients.map((client) => {
        //eslint-disable-next-line
        const animatedAmount = useAnimatedNumber(client.lastInvoice.amount);

        return (
          <li
            key={client.id}
            className="overflow-hidden rounded-xl border border-gray-200"
          >
            <div
              className={`flex items-center justify-between gap-x-4 border-b border-gray-900/5 ${client.name === "Income" ? "bg-custom-green" : "bg-red-500"} p-6`}
            >
              <div className="flex items-center gap-x-4">
                {client.icon}
                <div
                  className={`text-md font-medium leading-6 ${client.name === "Income" ? "text-green-100" : "text-red-100"}`}
                >
                  {client.name}
                </div>
              </div>
              <button>
                <PlusIcon
                  className={`h-8 w-8 rounded-xl p-2  ${client.name === "Income" ? "bg-green-100" : "bg-red-100"} ${client.name === "Income" ? "text-custom-green" : "text-red-500"}`}
                />
              </button>
            </div>
            <dl className="-my-3 divide-y divide-gray-100 bg-gray-50 px-6 py-4 text-sm leading-6">
              <div className="flex justify-between gap-x-4 py-3">
                <dd className="flex items-start gap-x-2">
                  <div className="text-4xl font-medium text-gray-900 lg:text-3xl">
                    ${formatAmount(animatedAmount)}
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
        );
      })}
      <AccountShowcase />
    </ul>
  );
}
