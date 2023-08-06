import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../../../constants/colors';
import {Emojis, GeneralStrings} from '../../../constants/strings';
import {expenseDetails} from '../../../models/expensesModel';
import {getFormattedDate} from '../../../utils/DatesUtils';

const ExpenseCard = (item: expenseDetails) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <View style={styles.imageContainer}>
          <Text style={styles.Icon}>{Emojis.CREDIT_CARD}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text>{item?.title}</Text>
          <Text style={styles.subTitleText}>{getFormattedDate(item?.date)}</Text>
        </View>
      </View>
      <View style={styles.leftContainer}>
        <Text style={styles.amountText}>
          {GeneralStrings.DOLLAR_SIGN}
          {item.amount}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 30,
    paddingVertical: 20,
    borderColor: colors.black,
    borderWidth: 0.5,
  },
  rightContainer: {
    flex: 0.7,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 55,
  },
  textContainer: {
    flex: 1,
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 150,
  },
  subTitleText: {
    fontSize: 10,
    color: colors.gray,
  },
  leftContainer: {
    flex: 0.3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexDirection: 'row',
  },
  amountText: {
    fontSize: 16,
  },
  titleStyle: {
    color: colors.black,
    fontSize: 12,
  },
  Icon: {
    fontSize: 30,
  },
});
export default ExpenseCard;
