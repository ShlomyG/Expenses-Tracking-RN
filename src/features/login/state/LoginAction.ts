import {ScreensList} from '../../../constants/screens';
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
    resetTo(ScreensList.MAIN_TABS_SCREEN);

    // try {
    // } catch (error) {
    // } finally {
    //   dispatch(setIsAuthLoading(false));
    // }
  };
