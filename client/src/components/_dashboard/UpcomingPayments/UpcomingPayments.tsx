import { CurrencyEuroIcon } from "@heroicons/react/20/solid";
import { upcomingPayments } from "../../../mocks/upcoming.mock";

const UpcomingPayments = () => {
  return (
    <div className="lg:col-span-4 col-span-12 bg-white rounded-xl">
      <div className="px-4 sm:px-6 lg:px-8 py-4 bg-black w-full  rounded-t-xl">
        <h2 className="mx-auto w-full text-base font-semibold leading-6 text-white text-left">
          Upcoming payments
        </h2>
      </div>
      {upcomingPayments.map((payment) => (
        <div
          className="flex justify-start items-center p-2 gap-2 border-2 rounded-md"
          key={payment.id}
        >
          <CurrencyEuroIcon className="w-6 text-gray-900" />

          <div className="flex justify-between items-center text-xs w-full">
            <div className=" text-left w-full">
              <p>{payment.description}</p>
              <p className="text-[10px] text-gray-500">{payment.category}</p>
            </div>
            <div className="text-right">
              <p className="text-custom-green font-bold">{payment.amount}</p>
              <p className="text-[10px] text-gray-500">{payment.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UpcomingPayments;
