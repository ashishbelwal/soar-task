export type NavigationOption = {
  icon: string;
  name: string;
  path: string;
};
export type NavigationOptions = NavigationOption[];

export interface Address {
  present: string;
  permanent: string;
  city: string;
  country: string;
  postal_code: string;
}

export interface Employee {
  id: string;
  name: string;
  profile_image: string;
  username: string;
  email: string;
  dob: string;
  password: string;
  address: Address;
}

export interface EmployeesState {
  employees: Employee[];
}

export const employeeInitialState: EmployeesState = {
  employees: [],
};

export interface TransactionHistory {
  transaction_id: string;
  updated_balance: number;
  updated_at: string;
}

export interface Card {
  id: string;
  emp_id: string;
  type: string;
  display_id: string;
  validity: string;
  cvv: string;
  balance: number;
  history: TransactionHistory[];
}

export interface CardsState {
  cards: Card[];
}

export const cardInitialState: CardsState = {
  cards: [],
};

export interface CreditCardProps {
  cardNumber: string;
  cardType: string;
  expiryDate: string;
  balance: number;
  cardHolderName: string;
  cvv: string;
  id: number;
}

export interface Transection {
  type: string;
  amount: number;
  date: string;
  description: string;
  status: string;
  source: string;
  id: number;
}

export interface WeeklyActivity {
  id: string;
  withdraw: number;
  deposit: number;
  label: string;
}

export interface ExpenseStatistics {
  label: string;
  value: number;
}

export interface MyContact {
  id: string;
  name: string;
  image: string;
  title: string;
}
