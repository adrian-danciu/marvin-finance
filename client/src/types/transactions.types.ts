export interface Transaction {
  id: string;
  title: string;
  user_id: string;
  type: "income" | "expense" | null;
  date?: string;
  amount: number;
  account: string;
  category: string;
  currency: string;
  created_at: string;
  updated_at: string;
  status: string;
}
