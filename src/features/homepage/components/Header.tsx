import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import AppButton from '../../../components/AppButton';
import {colors} from '../../../constants/colors';
import {getDollar} from '../../../utils/MoneyUtil';

interface Props {
  total: number;
  label?: string;
}
const Header: React.FC<Props> = ({total, label = 'Total Expenses'}) => {
  return (
    <View style={styles.wrapper_container}>
      <View style={styles.total_container}>
        <Text style={styles.sum_style}>{getDollar(total)}</Text>
        <Text style={styles.text_style}>{label}</Text>
      </View>
      <View style={styles.button_container}>
        <AppButton
          text={'filter'}
          onPress={() => {
            console.log('filter');
          }}
          styleButton={styles.button_style}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper_container: {
    alignItems: 'center',
    backgroundColor: colors.black_10_opacity,
    flex: 1,
    justifyContent: 'flex-end',
  },
  button_container: {
    alignSelf: 'center',
  },
  total_container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  sum_style: {
    color: colors.black,
    fontSize: 40,
  },
  text_style: {
    fontSize: 16,
  },
  button_style: {
    width: 100,
    height: 30,
  },
});
