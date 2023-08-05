import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useAppSelector} from '../../store/Store';
import ExpensesList from './components/ExpensesList';
import Header from './components/Header';

const HomeScreen: React.FC = () => {
  const {username} = useAppSelector(state => state.homepage);

  return (
    <View style={styles.container}>
      <View style={styles.upper_section}>
        <Text>{username}</Text>
        <Header total={2500} />
      </View>
      <View style={styles.bottom_section}>
        <ExpensesList />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  upper_section: {flex: 0.25, width: '100%'},
  bottom_section: {flex: 0.75, width: '100%'},
});

export default HomeScreen;
