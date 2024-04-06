export type DataPoint = {
  value: number;
  limit: number;
  name: string;
};

export type GraphComponentProps = {
  data: DataPoint[];
};
