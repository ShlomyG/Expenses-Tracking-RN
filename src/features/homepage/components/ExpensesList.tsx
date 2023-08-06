import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../constants/colors';
import {modalTypeEnum} from '../../../models/expensesModel';
import {Emojis, HomeStrings} from '../../../constants/strings';
import ExpenseCard from './ExpenseCard';
import {useAppDispatch, useAppSelector} from '../../../store/Store';
import {batch} from 'react-redux';
import {setModalTypeAndOpenModal} from '../../expenseModal/state/ExpenseSlice';
import {resetFilter, setCurrentExpenseIndex} from '../state/HomeSlice';
import {filterModeCheck} from '../../expenseModal/utils/ExpenseModalUtils';
import {updateExpensesListInStorage} from '../state/HomeAction';

const ExpensesList = () => {
  const dispatch = useAppDispatch();
  const {expensesData, filterData, filterDetails, username} = useAppSelector(state => state.homepage);
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
        {ExpenseCard(item)}
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

  useEffect(() => {
    if (expensesData.length) {
      updateExpensesListInStorage(username, expensesData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expensesData]);

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
