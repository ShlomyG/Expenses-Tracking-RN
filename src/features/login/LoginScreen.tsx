import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback, Keyboard} from 'react-native';
import AppButton from '../../components/AppButton';
import AppInput from '../../components/AppInput';
import {LoginStrings} from '../../constants/strings';
import {useAppDispatch} from '../../store/Store';
import {loginSubmit} from './state/LoginAction';

const LoginScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  const [nameInput, setNameInput] = useState('');

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text>Login Screen</Text>
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
            dispatch(loginSubmit(nameInput));
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
});

export default LoginScreen;
