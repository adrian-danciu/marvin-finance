export interface Transaction {
  id: string;
  title: string;
  user_id: string;
  date?: string;
  amount: number;
  category: string;
  currency: string;
  created_at: string;
  updated_at: string;
}
