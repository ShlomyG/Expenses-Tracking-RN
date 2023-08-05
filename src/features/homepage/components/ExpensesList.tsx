import React from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/colors';
import {expenseDetails, modalTypeEnum} from '../../../models/expensesModel';
import {Emojis, HomeStrings} from '../../../constants/strings';
import ExpenseCard from './ExpenseCard';
import {useAppDispatch, useAppSelector} from '../../../store/Store';
import {batch} from 'react-redux';
import {setModalTypeAndOpenModal} from '../../expenseModal/state/ExpenseSlice';
import {resetFilter, setCurrentExpenseIndex} from '../state/HomeSlice';
import {filterModeCheck} from '../../expenseModal/utils/ExpenseModalUtils';

export const expensesMockData: expenseDetails[] = [
  {
    _id: '123123432',
    title: 'Fish Restaurant',
    amount: 106,
    date: new Date('2023-07-29'),
  },
  {
    _id: '144123432',
    title: 'Supermarket',
    amount: 240,
    date: new Date('2023-07-09'),
  },
  {
    _id: '14654632',
    title: 'Fitness Studio',
    amount: 89.9,
    date: new Date('2023-08-01'),
  },
];
const ExpensesList = () => {
  const dispatch = useAppDispatch();
  const {expensesData, filterData, filterDetails} = useAppSelector(state => state.homepage);
  const isFilterMode = filterModeCheck(filterDetails);

  const renderEmptyTransaction = (
    <View style={styles.empty_list}>
      <View style={styles.empty_icon_container}>
        <Text style={styles.empty_icon}>{isFilterMode ? Emojis.FILTER : Emojis.FLY_DOLLAR}</Text>
      </View>
      <Text style={styles.empty_list_text}>{isFilterMode ? HomeStrings.NO_FILTERS : HomeStrings.NO_EXPENSES}</Text>
    </View>
  );

  const renderItem = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => {
          batch(() => {
            dispatch(setCurrentExpenseIndex(index));
            dispatch(setModalTypeAndOpenModal(modalTypeEnum.EDIT));
          });
        }}>
        {ExpenseCard(item, index)}
      </TouchableOpacity>
    );
  };

  const renderCleanFilter = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          dispatch(resetFilter());
        }}>
        <Text style={styles.clean_filter_button}>{HomeStrings.CLEAN_FILTER}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list_style}
        data={isFilterMode ? filterData : expensesData}
        contentContainerStyle={styles.list_container}
        ListHeaderComponent={isFilterMode && renderCleanFilter()}
        showsVerticalScrollIndicator={false}
        renderItem={({item, index}) => renderItem(item, index)}
        key={index => {
          index.toString();
        }}
        ListEmptyComponent={renderEmptyTransaction}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_style: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    width: '100%',
  },
  list_container: {
    paddingBottom: 15,
  },
  empty_list: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  empty_icon_container: {
    marginTop: 30,
    marginBottom: 10,
  },
  empty_icon: {
    fontSize: 30,
  },
  empty_list_text: {
    color: colors.light_gray,
    fontSize: 16,
    textAlign: 'center',
  },
  clean_filter_button: {
    alignSelf: 'center',
    color: colors.blue,
    margin: 6,
    fontSize: 14,
  },
});

export default ExpensesList;
