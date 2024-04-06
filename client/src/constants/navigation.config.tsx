import {
  BanknotesIcon,
  BuildingLibraryIcon,
  CalendarIcon,
  CreditCardIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "dashboard", icon: HomeIcon },
  { name: "Accounts", href: "accounts", icon: CreditCardIcon },
  {
    name: "Budgets",
    href: "budgets",
    icon: BuildingLibraryIcon,
  },
  { name: "Calendar", href: "calendar", icon: CalendarIcon },
  {
    name: "Transactions",
    href: "transactions",
    icon: BanknotesIcon,
  },
];
export const userNavigation = [
  { name: "Your profile", href: "profile" },
  { name: "Sign out", href: "#" },
];
