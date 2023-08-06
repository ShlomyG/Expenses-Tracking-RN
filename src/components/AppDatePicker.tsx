import React from 'react';
import DatePicker from 'react-native-date-picker';
import {ExpenseStrings, GeneralStrings} from '../constants/strings';
import {setDatePickerVisible} from '../features/expenseModal/state/ExpenseSlice';
import {useAppDispatch} from '../store/Store';

interface AppDatePickerProps {
  value: Date;
  onChange: (date: Date) => void;
  onCancel?: () => void;
  visible: boolean;
}
const AppDatePicker: React.FC<AppDatePickerProps> = ({value, onChange, onCancel, visible}) => {
  const dispatch = useAppDispatch();
  return (
    <DatePicker
      modal
      date={new Date(value)}
      open={visible}
      title={ExpenseStrings.DATE}
      onCancel={() => {
        onCancel && onCancel();
        dispatch(setDatePickerVisible(false));
      }}
      mode="date"
      locale="he"
      theme="light"
      confirmText={GeneralStrings.CONFIRM}
      cancelText={GeneralStrings.CANCEL}
      onConfirm={date => {
        onChange(date);
        dispatch(setDatePickerVisible(false));
      }}
    />
  );
};

export default AppDatePicker;
