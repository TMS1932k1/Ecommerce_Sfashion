import AsyncStorage from '@react-native-async-storage/async-storage';
import {Order} from '../types';

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
