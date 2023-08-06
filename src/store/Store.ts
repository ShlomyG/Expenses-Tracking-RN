import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import ExpenseSlice from '../features/expenseModal/state/ExpenseSlice';
import HomeSlice from '../features/homepage/state/HomeSlice';
import LoginSlice from '../features/login/state/LoginSlice';
const appReducer = combineReducers({
  login: LoginSlice,
  homepage: HomeSlice,
  expenseModal: ExpenseSlice,
});

export const resetState = () => ({
  type: 'RESET_STATE',
});

const rootReducer = (state, action: Action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined;
  }

  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
