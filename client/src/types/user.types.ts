export interface UserCredentials {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  createdAt: string;
  accounts?: {
    current: CurrentAccount;
    savings: SavingsAccount;
    investments: InvestmentsAccount;
    debt: DebtAccount;
  };
}

interface CurrentAccount {
  amount: number;
  lastIncome: Date;
  lastIncomeAmount: number;
  lastExpense: Date;
  lastExpenseAmount: number;
}

interface SavingsAccount {
  amount: number;
  lastDeposit: Date;
  lastDepositAmount: number;
  lastWithdrawal: Date;
  lastWithdrawalAmount: number;
}

interface InvestmentsAccount {
  amount: number;
  lastDeposit: Date;
  lastDepositAmount: number;
  lastWithdrawal: Date;
  lastWithdrawalAmount: number;
}

interface DebtAccount {
  amount: number;
  lastReturn: Date;
  lastReturnAmount: number;
  lastAddition: Date;
  lastAdditionAmount: number;
}
