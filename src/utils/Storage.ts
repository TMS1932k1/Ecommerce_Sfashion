import AsyncStorage from '@react-native-async-storage/async-storage';
import {Order, User} from '../types';

export const saveUser = async (user: User): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem('sfashion-user', jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const readUser = async (): Promise<User | undefined> => {
  try {
    const jsonValue = await AsyncStorage.getItem('sfashion-user');
    return jsonValue != null ? JSON.parse(jsonValue) : undefined;
  } catch (e) {
    console.log(e);
  }
  return undefined;
};

export const removeUser = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem('sfashion-user');
  } catch (e) {
    console.log(e);
  }
};

export const readCart = async (): Promise<Order[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem('sfashion-cart');
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log(e);
  }
  return [];
};

export const saveCart = async (orders: Order[]): Promise<void> => {
  try {
    const jsonValue = JSON.stringify(orders);
    await AsyncStorage.setItem('sfashion-cart', jsonValue);
  } catch (e) {
    console.log(e);
  }
};
