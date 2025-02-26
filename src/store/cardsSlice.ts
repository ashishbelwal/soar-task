import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TransactionHistory {
    transaction_id: string;
    updated_balance: number;
    updated_at: string;
}

interface Card {
    id: string;
    emp_id: string;
    type: string;
    display_id: string;
    validity: string;
    cvv: string;
    balance: number;
    history: TransactionHistory[];
}

interface CardsState {
    cards: Card[];
}

const initialState: CardsState = {
    cards: [],
};

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<Card>) => {
            state.cards.push(action.payload);
        },
        updateCard: (state, action: PayloadAction<Card>) => {
            const index = state.cards.findIndex(card => card.id === action.payload.id);
            if (index !== -1) {
                state.cards[index] = action.payload;
            }
        },
        deleteCard: (state, action: PayloadAction<string>) => {
            state.cards = state.cards.filter(card => card.id !== action.payload);
        }
    }
});

export const { addCard, updateCard, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
