import {ExpenseStrings} from '../../../constants/strings';
import {expenseDetails, modalTypeDetails, modalTypeEnum} from '../../../models/expensesModel';
import store from '../../../store/Store';
import {setEditExpense, setFilterData, setFilterDetails, setNewExpense} from '../../homepage/state/HomeSlice';

export const filterModeCheck = filterDetails => {
  return !Object.values(filterDetails).every(x => x === undefined || x === '');
};

export const expenseModalTypeDictionary: modalTypeDetails[] = [
  {
    title: ExpenseStrings.CREATE,
    onPress: (modalDetails: expenseDetails) => {
      store.dispatch(setNewExpense(modalDetails));
    },
    type: modalTypeEnum.CREATE,
  },
  {
    title: ExpenseStrings.EDIT,
    onPress: (modalDetails: expenseDetails) => {
      store.dispatch(setEditExpense(modalDetails));
    },
    type: modalTypeEnum.EDIT,
  },
  {
    title: ExpenseStrings.FILTERS,
    onPress: (modalDetails: expenseDetails) => {
      store.dispatch(setFilterData(modalDetails));
      store.dispatch(setFilterDetails(modalDetails));
    },
    type: modalTypeEnum.FILTER,
  },
];
