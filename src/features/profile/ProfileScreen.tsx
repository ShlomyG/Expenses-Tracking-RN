import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from '../../components/AppButton';
import {ScreensList} from '../../constants/screens';
import {Emojis, ProfileStrings} from '../../constants/strings';
import {resetTo} from '../../navigation/RootNavigation';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {resetHomeState} from '../homepage/state/HomeSlice';

const ProfileScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const {username} = useAppSelector(state => state.homepage);

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>{`${username} ${Emojis.PROFILE}`}</Text>
      <AppButton
        text={ProfileStrings.LOGOUT}
        onPress={() => {
          dispatch(resetHomeState());
          resetTo(ScreensList.LOGIN_SCREEN);
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title_text: {
    fontWeight: '700',
    fontSize: 28,
  },
});

export default ProfileScreen;
