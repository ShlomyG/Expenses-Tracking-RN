import {RootStackParamList} from '../navigation/AppNavigator';
import {RootTabsParamList} from '../navigation/TabsNavigator';

export namespace ScreensList {
  export const LOGIN_SCREEN: keyof RootStackParamList = 'login';
  export const MAIN_TABS_SCREEN: keyof RootStackParamList = 'mainTabs';
}

export namespace TabsScreens {
  export const HOME_SCREEN: keyof RootTabsParamList = 'homeScreen';
  export const ADD_EXPENSE: keyof RootTabsParamList = 'addExpenseScreen';
  export const PROFILE_SCREEN: keyof RootTabsParamList = 'profileScreen';
}
