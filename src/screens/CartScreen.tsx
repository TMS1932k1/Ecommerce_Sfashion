import {StyleSheet, Text, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../constants';
import {OrderList, SumSession, TextSession} from '../components';
import {useAppSelector} from '../stores/store';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'ProductScreen'>;
}

export default function CartScreen({navigation}: Props) {
  const orders = useAppSelector(state => state.cartState.orders);

  useLayoutEffect(() => {
    // Set header
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <View style={MyStylers.rootContainer}>
      <TextSession styleText={styles.title} style={styles.titleContainer}>
        C H E C K O U T
      </TextSession>
      {orders.length <= 0 && (
        <View style={styles.emptyContainer}>
          <Text style={[MyFonts.bodyStyle, styles.emptyText]}>
            Your cart is empty
          </Text>
        </View>
      )}
      {orders.length > 0 && <OrderList style={styles.orders} orders={orders} />}
      <SumSession />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  title: {
    textShadowColor: MyColors.background,
  },
  orders: {
    flex: 1,
    marginTop: MyDimesions.kPaddingLarge,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    color: MyColors.placeholder,
  },
});
