import {FlatList, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {Order} from '../../types';
import {MyDimesions} from '../../constants';
import OrderItem from './OrderItem';

interface Props {
  orders: Order[];
  style?: StyleProp<ViewStyle>;
}

export default function OrderList({orders, style}: Props) {
  return (
    <View style={style}>
      <FlatList
        data={orders}
        keyExtractor={item => `${item.product.id}${item.size}`}
        renderItem={({item}) => <OrderItem style={styles.item} order={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: MyDimesions.kPaddingSmall,
  },
});
