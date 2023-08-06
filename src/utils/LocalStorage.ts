import AsyncStorage from '@react-native-async-storage/async-storage';
import {expenseDetails} from '../models/expensesModel';
import {userDetails} from '../models/usersModel';

// Save the array of users to local storage
export const saveUsersToLocalStorage = async (users: userDetails[]) => {
  try {
    const usersJSON = JSON.stringify(users);
    await AsyncStorage.setItem('users', usersJSON);
  } catch (error) {
    console.error('Error saving users to local storage:', error);
  }
};

// Retrieve the array of users from local storage
export const getUsersFromLocalStorage = async () => {
  try {
    const usersJSON = await AsyncStorage.getItem('users');
    return usersJSON ? JSON.parse(usersJSON) : [];
  } catch (error) {
    console.error('Error getting users from local storage:', error);
    return [];
  }
};

// Save the list of object items for a specific user to local storage
export const saveItemsForUserToLocalStorage = async (username: string, items: expenseDetails[]) => {
  try {
    const itemsJSON = JSON.stringify(items);
    await AsyncStorage.setItem(`items_${username}`, itemsJSON);
  } catch (error) {
    console.error('Error saving items for user to local storage:', error);
  }
};

// Retrieve the list of object items for a specific user from local storage
export const getItemsForUserFromLocalStorage = async (username: string) => {
  try {
    const itemsJSON = await AsyncStorage.getItem(`items_${username}`);
    return itemsJSON ? JSON.parse(itemsJSON) : [];
  } catch (error) {
    console.error('Error getting items for user from local storage:', error);
    return [];
  }
};

// Delete the list of object items for a specific user from local storage
export const deleteItemsForUserFromLocalStorage = async (username: string) => {
  try {
    await AsyncStorage.removeItem(`items_${username}`);
  } catch (error) {
    console.error('Error deleting items for user from local storage:', error);
  }
};
