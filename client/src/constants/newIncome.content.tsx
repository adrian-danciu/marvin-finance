import { BanknotesIcon } from "@heroicons/react/20/solid";

export const getAddIncomeContent = (
  formData: { title: string; date: string; amount: string },
  handleFormDataChange: (key: string, value: string) => void,
  onSubmit: () => void,
  onCancel: () => void
) => ({
  title: "Add Income",
  description:
    "Please fill in the details of the income including title, date, and amount.",
  icon: (
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
      <BanknotesIcon className="text-custom-green h-8 w-8" aria-hidden="true" />
    </div>
  ),
  children: (
    <div className="flex flex-col gap-4 mt-4">
      <div>
        <input
          type="text"
          name="income-title"
          id="income-title"
          onChange={(e) => handleFormDataChange("title", e.target.value)}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Your income needs a name"
        />
      </div>
      <div>
        <input
          type="date"
          name="income-date"
          id="income-date"
          onChange={(e) => handleFormDataChange("date", e.target.value)}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Your income needs a date"
        />
      </div>
      <div>
        <input
          type="number"
          name="income-amount"
          id="income-amount"
          onChange={(e) => handleFormDataChange("amount", e.target.value)}
          className="focus:ring-custom-green ring-custom-green block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
          placeholder="Your income needs an amount"
        />
      </div>
    </div>
  ),
  btnText: "Add Income",
  btnSubmit: onSubmit,
  btnCancel: onCancel,
});
