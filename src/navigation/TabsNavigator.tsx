import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsScreens} from '../constants/screens';
import {colors} from '../constants/colors';
import {IS_IOS} from '../constants/responsive';
import HomeScreen from '../features/homepage/HomeScreen';
import {StyleSheet} from 'react-native';
import TabItem from './components/TabItem';
import {TabsStrings} from '../constants/strings';

export type RootTabsParamList = {
  homeScreen: undefined;
  addExpenseScreen: undefined;
  profileScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={TabsScreens.HOME_SCREEN}
      backBehavior="history"
      screenOptions={({}) => ({
        tabBarActiveTintColor: colors.yellow_text,
        tabBarInactiveTintColor: colors.black,
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarItemStyle: styles.tabBarItem,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: !IS_IOS,
      })}>
      <Tab.Screen
        name={TabsScreens.PROFILE_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabItem text={TabsStrings.PROFILE} isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name={TabsScreens.ADD_EXPENSE}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabItem text={TabsStrings.ADD_EXPENSE} isFocused={focused} />,
        }}
      />
      <Tab.Screen
        name={TabsScreens.HOME_SCREEN}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabItem text={TabsStrings.HOME} isFocused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    height: 84,
    alignItems: 'center',
    alignSelf: 'center',
  },
  tabBarItem: {
    height: 84,
  },
});
