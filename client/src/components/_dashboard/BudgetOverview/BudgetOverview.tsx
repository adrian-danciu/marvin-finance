import { budgetMock } from "../../../mocks/budget.mock";
import GraphComponent from "../../_core/Graph/Graph";

const BudgetOverview = () => {
  return (
    <div className="lg:col-span-8 col-span-12 bg-white rounded-xl">
      <div className="px-4 sm:px-6 lg:px-8 py-4 bg-black w-full  rounded-t-xl">
        <h2 className="mx-auto w-full text-base font-semibold leading-6 text-white text-left">
          Budget overview
        </h2>
      </div>
      <div className="flex flex-col xl:flex-row xl:items-start items-center justify-center p-10 gap-10">
        <GraphComponent data={budgetMock} />

        <ul className="flex flex-col items-start justify-start w-full  gap-2">
          {budgetMock.map((element) => (
            <li className="text-[12px]  font-bold text-gray-800" key={element.name}>
              {element.name}:
              <span className="text-gray-400 font-normal text-left">
                {element.value}$/{element.limit}$
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BudgetOverview;
