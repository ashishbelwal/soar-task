import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Transaction {
    id: string;
    card_id: string;
    type: string; // withdrawal | credit
    amount: number;
    created_at: string;
    emp_id: string;
    platform: string; // PayPal, from card
    tag: string;
}

interface TransactionsState {
    transactions: Transaction[];
}

const initialState: TransactionsState = {
    transactions: [],
};

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            state.transactions.push(action.payload);
        },
        deleteTransaction: (state, action: PayloadAction<string>) => {
            state.transactions = state.transactions.filter(trx => trx.id !== action.payload);
        }
    }
});

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
