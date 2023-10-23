import {ScrollView, StyleSheet, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {useEffect, useLayoutEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../stores/store';
import {fetchGetProduct} from '../stores/product/productSlice';
import {MyDimesions, MyFonts} from '../constants';
import {
  AddCartBar,
  CarouselImage,
  DescriptionSession,
  Footer,
  Indicator,
  Infomation,
  ReviewSession,
} from '../components';
import {addOrder} from '../stores/cart/cartSlice';
import {showToast} from '../utils';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'ProductScreen'>;
  route: RouteProp<RootNavigatorParams, 'ProductScreen'>;
}

export default function ProductScreen({navigation, route}: Props) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.productState.isLoading);
  const product = useAppSelector(state => state.productState.product);
  const sizeIndex = useAppSelector(state => state.productState.size);

  useLayoutEffect(() => {
    // Set header
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
      headerTitleAlign: 'center',
    });
  }, [navigation, route]);

  useEffect(() => {
    // Fetch product data
    dispatch(fetchGetProduct(route.params.id));
  }, []);

  // Set  resize picture with url
  function onShowPicResize(image: string) {
    navigation.navigate('ResizePictureScreen', {
      image: image,
    });
  }

  // Add product to cart add show toast to notify add successfully
  function addCart() {
    dispatch(
      addOrder({
        product: product!,
        amount: 1,
        size: product!.sizes[sizeIndex!],
      }),
    );
    showToast('Add to cart successfully');
  }

  // Add product to favorite
  function addFavorite() {}

  // If is loading fetch product data
  if (isLoading) {
    return <Indicator style={styles.loadingContainer} size={'large'} />;
  }

  return (
    <ScrollView>
      {product && (
        <View style={styles.container}>
          <CarouselImage
            images={[product!.imageCover, ...product!.images]}
            onPressResize={onShowPicResize}
          />
          <Infomation style={styles.information} product={product} />
          <AddCartBar
            style={styles.addCart}
            onPressAddCart={addCart}
            onPressFavorite={addFavorite}
          />
          <DescriptionSession
            style={styles.desciptionSession}
            material={product.material}
            desciption={product.description}
          />
          <ReviewSession style={styles.review} id={product.id} />
          <Footer style={styles.footer} />
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
  },
  information: {
    width: '100%',
    marginTop: MyDimesions.kPaddingLarge,
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
  addCart: {
    marginTop: MyDimesions.kPaddingLarge * 2,
  },
  desciptionSession: {
    width: '100%',
    marginTop: MyDimesions.kPaddingLarge,
  },
  review: {
    width: '100%',
    marginTop: MyDimesions.kPaddingLarge,
  },
  footer: {
    marginTop: MyDimesions.kPaddingLarge * 3,
  },
});
