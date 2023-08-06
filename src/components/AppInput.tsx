import {KeyboardTypeOptions, StyleSheet, View, Text, TextInput} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

interface AppInputProps {
  value: string | number;
  onChange: (text: string) => void;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
}

const AppInput: React.FC<AppInputProps> = ({label, value, onChange, keyboardType = 'default', editable = true}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text_name}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput
          autoCapitalize={'none'}
          style={styles.text_input}
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          editable={editable}
          selectTextOnFocus={editable}
        />
      </View>
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 24,
  },
  input_container: {
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
  text_input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    textAlign: 'left',
  },
  text_name: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
