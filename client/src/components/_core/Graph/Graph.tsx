import React from "react";
import { GraphComponentProps } from "../../../types/graph.types";
import Bar from "./Bar";

const GraphComponent: React.FC<GraphComponentProps> = ({ data }) => {
  return (
    <div className="flex justify-between px-4 py-2">
      {data.map((item, index) => (
        <Bar key={index} {...item} />
      ))}
    </div>
  );
};
export default GraphComponent;
