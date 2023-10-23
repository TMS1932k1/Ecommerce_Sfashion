import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View, Text, Pressable} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../constants';
import {
  ArrivalsSession,
  Banner,
  CategoriesSession,
  CollectionsSession,
  Footer,
  ImageButton,
} from '../components';
import {Product} from '../types';
import {useAppSelector} from '../stores/store';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'HomeScreen'>;
}

export default function HomeScreen({navigation}: Props) {
  const cartOrders = useAppSelector(state => state.cartState.orders);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
      headerTitleAlign: 'center',
      headerLeft: () => (
        <ImageButton
          style={styles.menu}
          image={require('../../assets/images/menu.png')}
        />
      ),
      headerRight: () => (
        <View style={styles.left}>
          <ImageButton
            style={styles.search}
            image={require('../../assets/images/search.png')}
          />
          <Pressable
            style={({pressed}) => [
              styles.cartContainer,
              pressed && MyStylers.press,
            ]}
            onPress={onNavigateCartScreen}>
            <ImageButton
              image={require('../../assets/images/shopping_bag.png')}
              onPress={onNavigateCartScreen}
            />
            {cartOrders.length > 0 && (
              <View style={styles.cartCount}>
                <Text style={[MyFonts.bodyStyle, styles.textCart]}>
                  {cartOrders.length}
                </Text>
              </View>
            )}
          </Pressable>
        </View>
      ),
    });
  }, [navigation, cartOrders]);

  // Set on click banner
  function onExploreCollection() {}

  // Set on click product
  function onClickProduct(product: Product) {
    navigation.navigate('ProductScreen', {
      id: product.id,
    });
  }

  // Navigate cart screen
  function onNavigateCartScreen() {
    navigation.navigate('CartScreen');
  }

  return (
    <ScrollView>
      <View>
        <Banner onPress={onExploreCollection} />
        <View>
          <ArrivalsSession onClickProduct={onClickProduct} />
          <CategoriesSession />
          <CollectionsSession onClickProduct={onClickProduct} />
        </View>
        <Footer style={styles.footer} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartCount: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 18,
    height: 18,
    borderRadius: 18,
    backgroundColor: MyColors.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textCart: {
    color: MyColors.background,
    fontSize: MyDimesions.kCartNumber,
  },
  menu: {
    marginRight: MyDimesions.kPaddingSmall,
  },
  search: {
    marginRight: MyDimesions.kPaddingSmall,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    marginTop: MyDimesions.kPaddingLarge * 3,
  },
});
