import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Order} from '../../../types';
import {MyDimesions} from '../../../constants';
import OrderItem from './OrderItem';

interface Props {
  orders: Order[];
  style?: StyleProp<ViewStyle>;
}

export default function OrderList({orders, style}: Props) {
  return (
    <View style={style}>
      {orders.map(item => (
        <OrderItem
          key={`${item.product.id}${item.size}`}
          style={styles.item}
          order={item}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: MyDimesions.kPaddingSmall,
  },
});
