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