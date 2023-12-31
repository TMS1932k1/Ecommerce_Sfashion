import {
  Image,
  StyleProp,
  StyleSheet,
  ViewStyle,
  Text,
  Pressable,
} from 'react-native';
import {Product} from '../../../types';
import {
  MyApp,
  MyColors,
  MyDimesions,
  MyFonts,
  MyStylers,
} from '../../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  product: Product;
  onClickProduct?: (product: Product) => void;
}

export default function ProductItem({style, product, onClickProduct}: Props) {
  return (
    <Pressable
      onPress={onClickProduct ? () => onClickProduct(product) : undefined}
      style={({pressed}) => [
        styles.container,
        style,
        (pressed || !onClickProduct) && MyStylers.press,
      ]}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: `${MyApp.baseUrl}${MyApp.imageProductsApi}${product.imageCover}`,
        }}
      />
      <Text style={[MyFonts.bodyStyle, styles.name]} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={[MyFonts.bodyStyle, styles.price]} numberOfLines={1}>
        {product.price} VND
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 275,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '75%',
  },
  name: {
    marginTop: 4,
    textAlign: 'center',
    height: 40,
  },
  price: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: MyDimesions.kBodyMedium,
    color: MyColors.secondary,
  },
});
