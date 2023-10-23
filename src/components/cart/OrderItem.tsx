import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Order} from '../../types';
import {MyApp, MyColors, MyDimesions, MyFonts} from '../../constants';
import AmountBar from './AmountBar';

interface Props {
  order: Order;
  style?: StyleProp<ViewStyle>;
}

export default function OrderItem({order, style}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Image
        source={{
          uri: `${MyApp.baseUrl}${MyApp.imageProductsApi}${order.product.imageCover}`,
        }}
        width={100}
        height={134}
        resizeMode="cover"
      />
      <View style={styles.infoContainer}>
        <View>
          <Text style={[MyFonts.bodyStyle, styles.name]} numberOfLines={2}>
            {order.product.name}
          </Text>
          <Text style={[MyFonts.bodyStyle, styles.subText]}>
            <Text style={styles.price}>{order.product.price} VND</Text>{' '}
            {` Size: ${order.size}`}
          </Text>
        </View>
        <AmountBar amount={order.amount} />
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
