import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

interface AppButtonProps {
  text: string;
  onPress: () => void;
  enable?: boolean;
  styleButton?: ViewStyle;
}
const AppButton: React.FC<AppButtonProps> = ({onPress, text, enable = true, styleButton}) => {
  return (
    <TouchableOpacity
      disabled={!enable}
      style={[
        styles.button,
        {
          backgroundColor: !enable ? colors.gray : colors.light_gray,
        },
        styleButton,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 20,
    height: 43,
    width: 200,
    marginVertical: 20,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default AppButton;
