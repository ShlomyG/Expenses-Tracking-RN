import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userDetails} from '../../../models/usersModel';

interface LoginSliceState {
  users: userDetails[];
}

const initialState: LoginSliceState = {
  users: [],
};

const LoginSlice = createSlice({
  name: 'loginSlice',
  initialState,
  reducers: {
    setUsersList(state, action: PayloadAction<userDetails[]>) {
      state.users = action.payload;
    },
    setNewUser(state, action: PayloadAction<userDetails>) {
      state.users.push(action.payload);
    },
    // setEditExpense(state, action: PayloadAction<expenseDetails>) {
    //   state.expensesData[state.currentExpenseIndex] = action.payload;
    // },
    resetState: () => initialState,
  },
});

export const {resetState, setUsersList, setNewUser} = LoginSlice.actions;
export default LoginSlice.reducer;
