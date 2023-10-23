import {StyleProp, View, ViewStyle, Text, StyleSheet} from 'react-native';
import {Product} from '../../types';
import {MyColors, MyDimesions, MyFonts} from '../../constants';
import SizeBar from './SizeBar';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../stores/store';
import {chooseProductSize} from '../../stores/product/productSlice';

interface Props {
  style?: StyleProp<ViewStyle>;
  product: Product;
}

export default function Infomation({style, product}: Props) {
  const dispatch = useAppDispatch();
  const sizeIndex = useAppSelector(state => state.productState.size);

  // Set current size to show with index
  function onSelectSize(index: number) {
    dispatch(chooseProductSize(index));
  }

  return (
    <View style={[style]}>
      <Text style={[MyFonts.bodyStyle, styles.name]} numberOfLines={2}>
        {product.name.toLocaleUpperCase()}
      </Text>
      <Text style={[MyFonts.bodyStyle, styles.price]}>
        {`${product.price} VND`}
      </Text>
      <SizeBar
        style={styles.sizebar}
        sizes={product.sizes}
        value={sizeIndex}
        onPress={onSelectSize}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: MyDimesions.kBodyLarge,
    color: MyColors.label,
    overflow: 'hidden',
  },
  price: {
    marginTop: MyDimesions.kPaddingSmall,
    fontSize: MyDimesions.kBodyLarge,
    color: MyColors.primary,
  },
  sizebar: {
    marginTop: MyDimesions.kPaddingSmall,
  },
});
