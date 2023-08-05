import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../features/login/LoginScreen';
import {DefaultTheme} from '@react-navigation/native';
import {ScreensList} from '../constants/screens';
import TabsNavigator from './TabsNavigator';

export type RootStackParamList = {
  login: undefined;
  mainTabs: undefined;
};

const StackNavigator = createNativeStackNavigator<RootStackParamList>();
const AppNavigator: React.FC = () => {
  return (
    <>
      <StackNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName={ScreensList.LOGIN_SCREEN}>
        <StackNavigator.Screen name={ScreensList.LOGIN_SCREEN} component={LoginScreen} />
        <StackNavigator.Screen name={ScreensList.MAIN_TABS_SCREEN} component={TabsNavigator} />
      </StackNavigator.Navigator>
    </>
  );
};

export const NavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    background: 'white',
  },
};

export default AppNavigator;
