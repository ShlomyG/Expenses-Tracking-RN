import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import {LoginStrings} from '../../constants/strings';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {getNameStringValid} from '../../utils/StringsUtil';
import {getUsersList, loginSubmit} from './state/LoginAction';

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [nameInput, setNameInput] = useState('');
  const {users} = useAppSelector(state => state.login);

  useEffect(() => {
    dispatch(getUsersList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>{LoginStrings.TITLE}</Text>
        <AppInput
          value={nameInput}
          onChange={text => {
            setNameInput(text);
          }}
          label={LoginStrings.LABEL_INPUT}
        />
        <AppButton
          text={LoginStrings.BUTTON_TEXT}
          onPress={() => {
            dispatch(loginSubmit(getNameStringValid(nameInput), users));
          }}
          enable={nameInput !== ''}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title_text: {
    fontWeight: '700',
    fontSize: 28,
  },
});

export default LoginScreen;
