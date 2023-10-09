import {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Product} from '../../types';
import ProductItem from './ProductItem';
import {MyDimesions} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  products: Product[];
}

export default function ProductList({products, style}: Props) {
  return (
    <FlatList
      horizontal
      style={[styles.container, style]}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={products}
      renderItem={({item}) => (
        <ProductItem style={styles.item} product={item} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  item: {
    marginRight: MyDimesions.kPaddingSmall,
  },
});
