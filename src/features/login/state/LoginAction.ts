import {ScreensList} from '../../../constants/screens';
import {userDetails} from '../../../models/usersModel';
import {resetTo} from '../../../navigation/RootNavigation';
import {AppThunk} from '../../../store/Store';
import {
  getItemsForUserFromLocalStorage,
  getUsersFromLocalStorage,
  saveUsersToLocalStorage,
} from '../../../utils/LocalStorage';
import {setExpensesData, setUsername} from '../../homepage/state/HomeSlice';
import {setNewUser, setUsersList} from './LoginSlice';

export const getUsersList = (): AppThunk => async dispatch => {
  const usersListFromStorage = await getUsersFromLocalStorage();
  dispatch(setUsersList(usersListFromStorage));
};

export const loginSubmit =
  (username: string, usersList: userDetails[]): AppThunk =>
  async (dispatch, getState) => {
    const userExist = usersList.find(user => user.name.toLowerCase() === username);

    if (userExist) {
      const expensesListFromStorage = await getItemsForUserFromLocalStorage(username);
      dispatch(setExpensesData(expensesListFromStorage));
    } else {
      dispatch(setNewUser({id: usersList.length + 1, name: username}));
      dispatch(setUsername(username));
      const updateList = getState().login.users;
      await saveUsersToLocalStorage(updateList);
    }
    dispatch(setUsername(username));
    resetTo(ScreensList.MAIN_TABS_SCREEN);
  };

export const checkIfUserExist = (username, usersList) => {
  return usersList.find(user => user.name === username);
};
