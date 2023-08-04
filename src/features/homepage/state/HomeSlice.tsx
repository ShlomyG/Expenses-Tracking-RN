import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {expenseDetails} from '../../../models/expensesModel';

interface HomeScreenState {
  expensesData: expenseDetails[];
  username: string;
}

const initialState: HomeScreenState = {
  expensesData: [],
  username: '',
};

const HomeSlice = createSlice({
  name: 'homeScreen',
  initialState,
  reducers: {
    setExpensesData(state, action: PayloadAction<expenseDetails[]>) {
      state.expensesData = action.payload;
    },
    setNewExpense(state, action: PayloadAction<expenseDetails>) {
      state.expensesData.push(action.payload);
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    resetSavingState: () => initialState,
  },
});

export const {resetSavingState, setExpensesData, setNewExpense, setUsername} = HomeSlice.actions;
export default HomeSlice.reducer;
