import React from 'react';
import {StyleSheet, View, ViewStyle, Text} from 'react-native';
import {colors} from '../../constants/colors';

interface TabItemProps {
  text?: string;
  isFocused: boolean;
  style?: ViewStyle;
}

const TabItem = ({text, isFocused, style}: TabItemProps) => {
  return (
    <View style={[styles.tabView, style]} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
      {text && (
        <View style={styles.textView}>
          <Text style={[styles.textStyle, {color: isFocused ? colors.yellow_text : colors.gray}]}>{text}</Text>
        </View>
      )}
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 15,
  },
});
