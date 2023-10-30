import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {MyColors, MyDimesions} from '../../../constants';
import AddCartButton from './AddCartButton';
import IconButton from '../../common/IconButton';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPressAddCart?: () => void;
  onPressFavorite?: () => void;
}

export default function AddCartBar({
  style,
  onPressAddCart,
  onPressFavorite,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.addContainer}>
        <AddCartButton onPress={onPressAddCart} />
      </View>
      <IconButton name="heart-o" onPress={onPressFavorite} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    backgroundColor: MyColors.titleActive,
    padding: MyDimesions.kPaddingSmall,
    alignItems: 'center',
  },
  addContainer: {
    flex: 1,
  },
});
