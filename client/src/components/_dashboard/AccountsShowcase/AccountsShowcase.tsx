import React, { useState } from "react";
import { CreditCardIcon, PencilIcon } from "@heroicons/react/24/solid";
import useAnimatedNumber from "../../../hooks/useAnimatedNumber";

interface AccountData {
  type: string;
  balance: number;
}

const accounts: AccountData[] = [
  { type: "Current", balance: 23432.03 },
  { type: "Investment", balance: 57600.5 },
  { type: "Savings", balance: 8900.0 },
  { type: "Debt", balance: -1500.0 },
];

const AccountShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeAccount = accounts[activeIndex];

  const animatedBalance = useAnimatedNumber(activeAccount.balance, 1000); // Animation duration is 1000ms

  const displayBalance = animatedBalance.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200">
      <div className="flex items-center justify-between gap-x-4 border-b border-gray-900/5 bg-black p-6">
        <div className="flex items-center gap-x-4">
          <CreditCardIcon className="h-8 w-8 text-white" />
          <div className="text-md font-medium leading-6 text-white">
            {activeAccount.type} account
          </div>
        </div>
        <button>
          <PencilIcon className="h-8 w-8 rounded-xl bg-gray-100 p-2 text-gray-500" />
        </button>
      </div>
      <dl className="-my-3 divide-y divide-gray-100 bg-gray-50 px-6 py-4 text-sm leading-6">
        <div className="flex justify-between gap-x-4 py-3">
          <dd className="flex flex-col items-start gap-y-2">
            <div className="text-4xl font-medium text-gray-900 lg:text-3xl">
              {displayBalance}
            </div>
          </dd>
        </div>
        <div className="flex justify-between gap-x-4 py-3">
          <dt className="text-gray-500">Balance</dt>
          <dd className="flex items-center justify-center text-gray-700">
            {accounts.map((_, index) => (
              <span
                key={index}
                className={`mx-1 block h-3 w-3 rounded-full ${index === activeIndex ? "bg-green-400" : "bg-gray-700"} cursor-pointer`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default AccountShowcase;
