import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {expenseDetails, modalTypeEnum} from '../../../models/expensesModel';

interface ExpenseSliceState {
  modalVisible: boolean;
  currentModalType: modalTypeEnum;
  expenseModalDetails: expenseDetails;
  datePickerVisible: boolean;
}

const initialState: ExpenseSliceState = {
  modalVisible: false,
  currentModalType: modalTypeEnum.CREATE,
  expenseModalDetails: {
    title: '',
    amount: undefined,
    date: undefined,
  },
  datePickerVisible: false,
};

const ExpenseSlice = createSlice({
  name: 'expenseSlice',
  initialState,
  reducers: {
    setModalVisible(state, action: PayloadAction<boolean>) {
      state.modalVisible = action.payload;
    },
    setModalTypeAndOpenModal(state, action: PayloadAction<modalTypeEnum>) {
      state.currentModalType = action.payload;
      state.modalVisible = true;
    },
    setExpenseDetails(state, action: PayloadAction<expenseDetails>) {
      state.expenseModalDetails = action.payload;
    },
    setExpenseTitle(state, action: PayloadAction<string>) {
      state.expenseModalDetails.title = action.payload;
    },
    setExpenseAmount(state, action: PayloadAction<number>) {
      state.expenseModalDetails.amount = action.payload;
    },
    setExpenseDate(state, action: PayloadAction<Date>) {
      state.expenseModalDetails.date = action.payload;
    },
    setDatePickerVisible(state, action: PayloadAction<boolean>) {
      state.datePickerVisible = action.payload;
    },
    resetModalState: () => initialState,
  },
});

export const {
  resetModalState,
  setModalVisible,
  setModalTypeAndOpenModal,
  setExpenseTitle,
  setExpenseAmount,
  setExpenseDate,
  setExpenseDetails,
  setDatePickerVisible,
} = ExpenseSlice.actions;
export default ExpenseSlice.reducer;
