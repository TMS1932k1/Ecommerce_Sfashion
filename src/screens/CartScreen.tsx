import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../constants';
import {
  AddressSession,
  CheckoutBar,
  OrderList,
  SumSession,
  TextSession,
} from '../components';
import {useAppSelector} from '../stores/store';
import {showToast} from '../utils';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'ProductScreen'>;
}

export default function CartScreen({navigation}: Props) {
  const orders = useAppSelector(state => state.cartState.orders);
  const user = useAppSelector(state => state.authState.user);

  useLayoutEffect(() => {
    // Set header
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  function onCheckoutCart() {
    // To code handle checkout
  }

  // Check is logined to hanlde add or change address
  function addAddress() {
    if (user) {
      // To code handle
      Alert.alert('ADD SHIPPING ADDRESS', 'Input');
    } else {
      navigateAuthScreen();
    }
  }

  function navigateAuthScreen() {
    showToast('You need login to continue checkout');
    navigation.navigate('AuthScreen');
  }

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
      {orders.length > 0 && (
        <ScrollView>
          <View style={styles.content}>
            <OrderList orders={orders} />
            <View style={styles.line} />
            <AddressSession onAddAddress={addAddress} />
          </View>
        </ScrollView>
      )}
      <SumSession />
      <CheckoutBar
        onPress={
          user && user.phone && user.address ? onCheckoutCart : undefined
        }
      />
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
  content: {
    marginTop: MyDimesions.kPaddingLarge,
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: MyColors.placeholder,
    marginTop: MyDimesions.kPaddingMedium,
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
