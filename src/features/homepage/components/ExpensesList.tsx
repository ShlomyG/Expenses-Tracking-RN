import React from 'react';
import {FlatList, StyleSheet, View, Text} from 'react-native';
import {useAppDispatch} from '../../../store/Store';
// import {TransactionSavingDetailsResponse} from '../models/savingsModel';
import {colors} from '../../../constants/colors';
import {expenseDetails} from '../../../models/expensesModel';
// import ExpenseCard from './ExpenseCard';
import {Emojis, HomeStrings} from '../../../constants/strings';
import ExpenseCard from './ExpenseCard';

const ExpensesList = () => {
  //   const dispatch = useAppDispatch();
  //   const [transactionsList, setTransactionsList] = useState<TransactionSavingDetailsResponse[]>([]);

  const expensesMockData: expenseDetails[] = [
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
  const renderEmptyTransaction = (
    <View style={styles.emptyList}>
      <View style={styles.emptyIconContainer}>
        <Text style={styles.emptyIcon}>{Emojis.FLY_DOLLAR}</Text>
      </View>
      <Text style={styles.emptyListText}>{HomeStrings.NO_EXPENSES}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.listStyle}
        data={expensesMockData}
        contentContainerStyle={styles.listContainer}
        // ListHeaderComponent={renderRecurringDeposit}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => ExpenseCard(item)}
        ListEmptyComponent={renderEmptyTransaction}
        // onEndReachedThreshold={0.2}
        // onEndReached={handleEndReached}
        // ListFooterComponent={renderListFooterLoader()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    overflow: 'hidden',
    backgroundColor: colors.white,
    width: '100%',
  },
  listContainer: {
    paddingBottom: 15,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 15,
  },
  emptyIconContainer: {
    marginTop: 30,
    marginBottom: 10,
  },
  emptyIcon: {
    fontSize: 30,
  },
  emptyListText: {
    color: colors.light_gray,
    fontSize: 16,
    textAlign: 'center',
  },
});

export default ExpensesList;
