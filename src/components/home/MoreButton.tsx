import {
  Image,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import {MyDimesions, MyFonts, MyStylers} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function MoreButton({style, onPress}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        style,
        (pressed || !onPress) && MyStylers.press,
      ]}>
      <Text style={[MyFonts.bodyStyle, styles.text]}>Explore More</Text>
      <Image source={require('../../../assets/images/forward_arrow.png')} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    padding: MyDimesions.kPaddingSmall,
  },
  text: {
    marginRight: MyDimesions.kPaddingSmall,
    fontSize: MyDimesions.kBodyLarge,
  },
});
