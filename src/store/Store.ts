import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import HomeSlice from '../features/homepage/state/HomeSlice';
const appReducer = combineReducers({
  homepage: HomeSlice,
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
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
