import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../constants/strings';
import LoginScreen from '../features/login/LoginScreen';
import {DefaultTheme} from '@react-navigation/native';
import HomeScreen from '../features/homepage/HomeScreen';

export type RootStackParamList = {
  login: undefined;
  homeScreen: undefined;
};

const StackNavigator = createNativeStackNavigator<RootStackParamList>();
const AppNavigator: React.FC = () => {
  return (
    <StackNavigator.Navigator screenOptions={{headerShown: false}} initialRouteName={Screens.LOGIN}>
      <StackNavigator.Screen name={Screens.LOGIN} component={LoginScreen} />
      <StackNavigator.Screen name={Screens.HOME_SCREEN} component={HomeScreen} />
      {/* <StackNavigator.Screen name={Screens.SPLASH} component={Splash} /> */}
    </StackNavigator.Navigator>
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
