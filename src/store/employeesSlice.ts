import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface Address {
    present: string;
    permanent: string;
    city: string;
    country: string;
    postal_code: string;
}

interface Employee {
    id: string;
    name: string;
    profile_image: string;
    username: string;
    email: string;
    dob: string;
    password: string;
    address: Address;
}

interface EmployeesState {
    employees: Employee[];
}

const initialState: EmployeesState = {
    employees: [],
};

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers: {
        addEmployee: (state, action: PayloadAction<Employee>) => {
            state.employees.push(action.payload);
        },
        updateEmployee: (state, action: PayloadAction<Employee>) => {
            const index = state.employees.findIndex(emp => emp.id === action.payload.id);
            if (index !== -1) {
                state.employees[index] = action.payload;
            }
        },
        deleteEmployee: (state, action: PayloadAction<string>) => {
            state.employees = state.employees.filter(emp => emp.id !== action.payload);
        }
    }
});

export const { addEmployee, updateEmployee, deleteEmployee } = employeesSlice.actions;


export const getUserById = (state: RootState, id: string) => {
    return state.employees.employees.find(emp => emp.id === id);
  };
  

export default employeesSlice.reducer;
