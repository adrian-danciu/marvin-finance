import React from "react";
import { DataPoint } from "../../../types/graph.types";

const Bar: React.FC<DataPoint> = ({ value, limit, name }) => {
  const valuePercentage = Math.min(100, (value / limit) * 100);
  const limitPercentage = 100;

  return (
    <div className="flex flex-col space-1">
      <div className="relative h-48 w-20">
        <div
          style={{ height: `${limitPercentage}%` }}
          className="bg-black w-3 absolute bottom-0 left-3 border-0 rounded-t-[5px]"
        />

        <div
          style={{ height: `${valuePercentage}%` }}
          className="bg-custom-green w-3 absolute bottom-0 border-0 rounded-t-[5px]"
        />
      </div>
      <p className="text-[10px] w-[50%] mt-1 truncate text-left ">{name}</p>
    </div>
  );
};

export default Bar;
