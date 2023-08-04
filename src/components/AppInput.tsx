import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleSheet,
  TextInputFocusEventData,
  View,
  Text,
  TextInput,
} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

interface AppInputProps {
  value: string;
  onChange: (text: string) => void;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  // onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const AppInput: React.FC<AppInputProps> = ({label, value, onChange, keyboardType = 'default'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textName}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          autoCapitalize={'none'}
          style={styles.textInput}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          // onBlur={onBlur}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {width: '100%', alignSelf: 'center', marginTop: 24},
  inputContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 55,
    width: 260,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderColor: colors.gray,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 6,
  },
  textInput: {flex: 1, fontSize: 16, color: colors.black, textAlign: 'left'},
  textName: {color: colors.black, fontSize: 14, textAlign: 'center'},
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
