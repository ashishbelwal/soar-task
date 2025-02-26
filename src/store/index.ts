import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from './employeesSlice';
import cardsReducer from './cardsSlice';
import transactionsReducer from './transactionsSlice';

export const store = configureStore({
    reducer: {
        employees: employeesReducer,
        cards: cardsReducer,
        transactions: transactionsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
