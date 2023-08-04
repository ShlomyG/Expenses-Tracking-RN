import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useAppSelector} from '../../store/Store';

const HomeScreen: React.FC = () => {
  const {username} = useAppSelector(state => state.homepage);

  return (
    <View style={styles.container}>
      <Text>{username}</Text>
      <Text>HomePage Screen</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
  },
});

export default HomeScreen;
