import {expenseDetails} from '../../../models/expensesModel';
import {saveItemsForUserToLocalStorage} from '../../../utils/LocalStorage';

export const updateExpensesListInStorage = async (username: string, expansesList: expenseDetails[]) => {
  await saveItemsForUserToLocalStorage(username, expansesList);
};
