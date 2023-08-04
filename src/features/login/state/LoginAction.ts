import {Screens} from '../../../constants/strings';
import {resetTo} from '../../../navigation/RootNavigation';
import {AppThunk} from '../../../store/Store';
import {setUsername} from '../../homepage/state/HomeSlice';

export const loginSubmit =
  (username: string): AppThunk =>
  async dispatch => {
    //TODO!!!
    ///check if user exist in storage and get data
    // else...
    dispatch(setUsername(username));
    resetTo(Screens.HOME_SCREEN);

    // try {
    // } catch (error) {
    // } finally {
    //   dispatch(setIsAuthLoading(false));
    // }
  };
