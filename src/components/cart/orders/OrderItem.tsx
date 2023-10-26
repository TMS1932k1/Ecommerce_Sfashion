import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Order} from '../../../types';
import {MyApp, MyColors, MyDimesions, MyFonts} from '../../../constants';
import AmountBar from '../AmountBar';
import FastImage from 'react-native-fast-image';
import {useAppDispatch} from '../../../stores/store';
import {
  descreaseAmountOrder,
  increaseAmountOrder,
} from '../../../stores/cart/cartSlice';

interface Props {
  order: Order;
  style?: StyleProp<ViewStyle>;
}

export default function OrderItem({order, style}: Props) {
  const dispatch = useAppDispatch();

  function increaseAmount() {
    dispatch(increaseAmountOrder(order));
  }

  function descreaseAmount() {
    dispatch(descreaseAmountOrder(order));
  }

  return (
    <View style={[styles.container, style]}>
      <FastImage
        style={styles.image}
        source={{
          uri: `${MyApp.baseUrl}${MyApp.imageProductsApi}${order.product.imageCover}`,
        }}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={[MyFonts.bodyStyle, styles.name]} numberOfLines={2}>
            {order.product.name}
          </Text>
          <Text style={[MyFonts.bodyStyle, styles.subText]}>
            <Text style={styles.price}>
              {order.product.price.toLocaleString()} VND
            </Text>{' '}
            {` Size: ${order.size}`}
          </Text>
        </View>
        <AmountBar
          amount={order.amount}
          onIncrease={increaseAmount}
          onDecrease={descreaseAmount}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 134,
    flexDirection: 'row',
  },
  infoContainer: {
    flex: 1,
    padding: MyDimesions.kPaddingSmall,
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 134,
  },
  name: {
    fontSize: 16,
    overflow: 'hidden',
  },
  subText: {
    marginTop: MyDimesions.kPaddingSmall / 2,
    fontSize: 13,
  },
  price: {
    color: MyColors.secondary,
  },
});
