import React, {useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {useAppDispatch, useAppSelector} from '../../store/Store';
import {colors} from '../../constants/colors';
import AppInput from '../../components/AppInput';
import {ExpenseStrings, GeneralStrings} from '../../constants/strings';
import {
  resetModalState,
  setDatePickerVisible,
  setExpenseAmount,
  setExpenseDate,
  setExpenseDetails,
  setExpenseTitle,
  setModalVisible,
} from './state/ExpenseSlice';
import {modalTypeEnum} from '../../models/expensesModel';
import {expenseModalTypeDictionary} from './utils/ExpenseModalUtils';
import AppDatePicker from '../../components/AppDatePicker';
import {getFormattedDate} from '../../utils/DatesUtils';
import AppButton from '../../components/AppButton';
import {batch} from 'react-redux';
import {resetFilter} from '../homepage/state/HomeSlice';

interface Props {
  isModalVisible: boolean;
  modalType: modalTypeEnum;
}

const ExpenseModal: React.FC<Props> = ({isModalVisible, modalType}) => {
  const dispatch = useAppDispatch();
  const {title, amount, date} = useAppSelector(state => state.expenseModal.expenseModalDetails);
  const {datePickerVisible, expenseModalDetails} = useAppSelector(state => state.expenseModal);
  const currentExpenseIndex = useAppSelector(state => state.homepage.currentExpenseIndex);
  const {expensesData} = useAppSelector(state => state.homepage);
  const closeModal = () => {
    dispatch(setModalVisible(false));
  };
  const modalTypeDetails = expenseModalTypeDictionary[modalType];
  const submitEnabled = !!title && !!amount && !!date;
  const isFilterType = modalType === modalTypeEnum.FILTER;

  useEffect(() => {
    if (modalType === modalTypeEnum.EDIT) {
      dispatch(setExpenseDetails(expensesData[currentExpenseIndex]));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalType, expensesData]);

  return (
    <View>
      <Modal
        isVisible={isModalVisible}
        style={styles.modal_view}
        swipeDirection={['down']}
        onSwipeComplete={() => {
          closeModal();
        }}>
        <View style={styles.modal_wrapper}>
          <View style={styles.modal_container}>
            <Text style={styles.modal_title}>{modalTypeDetails.title}</Text>
            <View style={styles.inputs_container}>
              <AppInput
                value={title}
                onChange={(text: string) => {
                  dispatch(setExpenseTitle(text));
                }}
                label={ExpenseStrings.TITLE}
              />
              <AppInput
                value={amount && amount?.toString()}
                onChange={text => {
                  dispatch(setExpenseAmount(parseInt(text)));
                }}
                label={ExpenseStrings.AMOUNT}
              />
              <TouchableOpacity
                onPress={() => {
                  dispatch(setDatePickerVisible(true));
                }}>
                <AppInput
                  editable={false}
                  value={getFormattedDate(date)}
                  onChange={text => {}}
                  label={ExpenseStrings.DATE}
                />
              </TouchableOpacity>
            </View>
            <AppButton
              text={GeneralStrings.CONFIRM}
              onPress={() => {
                modalTypeDetails.onPress(expenseModalDetails);
                dispatch(resetModalState());
              }}
              enable={submitEnabled || isFilterType}
            />
            <AppButton
              text={GeneralStrings.CANCEL}
              styleButton={styles.cancel_button}
              onPress={() => {
                batch(() => {
                  dispatch(setModalVisible(false));
                  dispatch(isFilterType ? resetFilter() : resetModalState());
                });
              }}
            />
          </View>
        </View>
      </Modal>
      <AppDatePicker
        onChange={newDate => {
          dispatch(setExpenseDate(newDate));
        }}
        value={date ?? new Date()}
        visible={datePickerVisible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modal_view: {
    margin: 0,
  },
  modal_wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modal_container: {
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
    height: '80%',
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    selfAlign: 'center',
  },
  inputs_container: {
    marginBottom: 40,
  },
  modal_title: {
    color: colors.gray,
    fontWidth: '700',
    fontSize: 20,
  },
  cancel_button: {
    backgroundColor: colors.red_dot,
    borderColor: 'black',
    borderWith: 1,
    marginTop: 0,
  },
});

export default ExpenseModal;
