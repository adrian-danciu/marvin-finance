import { BanknotesIcon } from "@heroicons/react/20/solid";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

export const getAddIncomeContent = (handleCancel: () => void) => ({
  title: "Add Income",
  description:
    "Please fill in the details of the income including title, date, and amount.",
  icon: (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
      <BanknotesIcon className="text-custom-green h-8 w-8" aria-hidden="true" />
    </div>
  ),
  children: (register: UseFormRegister<FieldValues>, errors: FieldErrors) => (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <input
          {...register("title", { required: true })}
          placeholder="Title"
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
        {errors.title && (
          <span className="text-xs px-2 text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div>
        <input
          type="date"
          {...register("date", { required: true })}
          placeholder="Date"
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
        {errors.date && (
          <span className="text-xs px-2 text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div className="-mt-3">
        <label htmlFor="account" className="text-xs px-2">
          Select the account:
        </label>
        <select
          {...register("account", { required: true })}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        >
          <option value="current">Current Account</option>
          <option value="savings">Savings Account</option>
          <option value="investment">Investment Account</option>
          <option value="debt">Debt Account</option>
        </select>
        {errors.account && (
          <span className="text-xs px-2 text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div className="-mt-3">
        <label htmlFor="account" className="text-xs px-2">
          Select the category:
        </label>
        <select
          {...register("category", { required: true })}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        >
          <option value="work">Work</option>
          <option value="investments">Investments return</option>
          <option value="side">Side income</option>
        </select>
        {errors.category && (
          <span className="text-xs px-2 text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div>
        <input
          type="number"
          {...register("amount", { required: true })}
          placeholder="Amount"
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        />
        {errors.amount && (
          <span className="text-xs px-2 text-red-500">
            This field is required
          </span>
        )}
      </div>
      <div className="-mt-3">
        <label htmlFor="account" className="text-xs px-2">
          Select the currency:
        </label>
        <select
          {...register("currency", { required: true })}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        >
          <option value="€">EUR</option>
          <option value="$">USD</option>
          <option value="RON">RON</option>
        </select>
        {errors.currency && (
          <span className="text-xs px-2 text-red-500">
            This field is required
          </span>
        )}
      </div>
    </div>
  ),
  btnText: "Add Income",
  btnSubmit: () => {},
  btnCancel: handleCancel,
});
