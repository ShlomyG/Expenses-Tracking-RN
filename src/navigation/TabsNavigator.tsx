import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabsScreens} from '../constants/screens';
import {colors} from '../constants/colors';
import {IS_IOS} from '../constants/responsive';
import HomeScreen from '../features/homepage/HomeScreen';
import {StyleSheet, Pressable, Text} from 'react-native';
import TabItem from './components/TabItem';
import {TabsStrings} from '../constants/strings';
import {useAppDispatch, useAppSelector} from '../store/Store';
import ExpenseModal from '../features/expenseModal/ExpenseModal';
import {setModalTypeAndOpenModal} from '../features/expenseModal/state/ExpenseSlice';
import {modalTypeEnum} from '../models/expensesModel';

export type RootTabsParamList = {
  homeScreen: undefined;
  addExpenseScreen: undefined;
  profileScreen: undefined;
};

const Tab = createBottomTabNavigator<RootTabsParamList>();

const TabsNavigator = () => {
  const dispatch = useAppDispatch();
  const {modalVisible, currentModalType} = useAppSelector(state => state.expenseModal);

  return (
    <>
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
        {/* <Tab.Screen
          name={TabsScreens.ADD_EXPENSE}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => <TabItem text={TabsStrings.ADD_EXPENSE} isFocused={focused} />,
          }}
        /> */}
        <Tab.Screen
          name={TabsScreens.HOME_SCREEN}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => <TabItem text={TabsStrings.HOME} isFocused={focused} />,
          }}
        />
      </Tab.Navigator>
      <Pressable
        onPress={() => {
          dispatch(setModalTypeAndOpenModal(modalTypeEnum.CREATE));
        }}
        style={styles.transfer_container}>
        <Text> ➕ </Text>
        <TabItem text={TabsStrings.ADD_EXPENSE} isFocused={false} />
      </Pressable>
      <ExpenseModal isModalVisible={modalVisible} modalType={currentModalType} />
    </>
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
  transfer_container: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: colors.light_yellow,
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: 70,
    borderRadius: 30,
  },
});
