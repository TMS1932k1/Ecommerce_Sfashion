import {
  Image,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
  Text,
} from 'react-native';
import {Product} from '../../types';
import {MyApp, MyColors, MyDimesions, MyFonts} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  product: Product;
}

export default function ProductItem({style, product}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{uri: `${MyApp.baseUrl}${MyApp.imageApi}${product.imageCover}`}}
      />
      <Text style={[MyFonts.bodyStyle, styles.name]} numberOfLines={2}>
        {product.name}
      </Text>
      <Text style={[MyFonts.bodyStyle, styles.price]} numberOfLines={1}>
        {product.price} VND
      </Text>
    </View>
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
