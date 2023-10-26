import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function AddCartButton({style, onPress}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        style,
        (pressed || !onPress) && MyStylers.press,
      ]}
      onPress={onPress}>
      <Image
        style={styles.addImage}
        source={require('../../../../assets/images/plus.png')}
      />
      <Text style={[MyFonts.bodyStyle, styles.text]}>ADD TO CART</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  addImage: {
    marginRight: MyDimesions.kPaddingSmall,
  },
  text: {
    color: MyColors.background,
  },
});
