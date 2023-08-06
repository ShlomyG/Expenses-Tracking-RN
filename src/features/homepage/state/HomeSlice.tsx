import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {expenseDetails} from '../../../models/expensesModel';
import {getFormattedDate} from '../../../utils/DatesUtils';

interface HomeScreenState {
  expensesData: expenseDetails[];
  filterData: expenseDetails[];
  filterDetails: expenseDetails;
  username: string;
  currentExpenseIndex: number;
}

const initialState: HomeScreenState = {
  expensesData: [],
  filterData: [],
  username: '',
  currentExpenseIndex: -1,
  filterDetails: {
    title: '',
    amount: undefined,
    date: undefined,
  },
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
    setEditExpense(state, action: PayloadAction<expenseDetails>) {
      state.expensesData[state.currentExpenseIndex] = action.payload;
    },
    setFilterDetails(state, action: PayloadAction<expenseDetails>) {
      state.filterDetails = action.payload;
    },
    resetFilter(state) {
      state.filterDetails = initialState.filterDetails;
      state.filterData = initialState.filterData;
    },
    setFilterData(state, action: PayloadAction<expenseDetails>) {
      state.filterData = state.expensesData.filter(item => {
        const nameMatch = !action.payload.title || item.title.includes(action.payload.title);
        const amountMatch =
          !action.payload.amount || item?.amount?.toString().includes(action.payload.amount.toString());
        const dateMatch =
          !action.payload.date || getFormattedDate(item?.date) === getFormattedDate(action.payload.date);
        return nameMatch && amountMatch && dateMatch;
      });
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setCurrentExpenseIndex(state, action: PayloadAction<number>) {
      state.currentExpenseIndex = action.payload;
    },
    resetHomeState: () => initialState,
  },
});

export const {
  resetHomeState,
  setExpensesData,
  setNewExpense,
  setEditExpense,
  setUsername,
  setCurrentExpenseIndex,
  setFilterData,
  setFilterDetails,
  resetFilter,
} = HomeSlice.actions;
export default HomeSlice.reducer;
