import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {MyColors, MyDimesions, MyStylers} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  image: ImageSourcePropType;
  onPress?: () => void;
}

export default function CircleIconButton({onPress, image, style}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        style,
        styles.resize,
        (pressed || !onPress) && MyStylers.press,
      ]}
      onPress={onPress}>
      <Image style={styles.icon} source={image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  resize: {
    width: 36,
    height: 36,
    backgroundColor: MyColors.background,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 36,
    position: 'absolute',
    bottom: MyDimesions.kPaddingSmall,
    right: MyDimesions.kPaddingSmall,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
