import {FlatList, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {Product} from '../../../types';
import ProductItem from './ProductItem';
import {MyDimesions} from '../../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  products: Product[];
  onClickProduct?: (product: Product) => void;
}

export default function ProductList({products, style, onClickProduct}: Props) {
  return (
    <FlatList
      horizontal
      style={[styles.container, style]}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
      data={products}
      renderItem={({item}) => (
        <ProductItem
          style={styles.item}
          product={item}
          onClickProduct={onClickProduct}
        />
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
