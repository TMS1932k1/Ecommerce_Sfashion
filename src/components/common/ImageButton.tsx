import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import {MyStylers} from '../../constants';

interface Props {
  image: ImageSourcePropType;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function ImageButton({image, style, onPress}: Props) {
  return (
    <Pressable
      style={({pressed}) => [style, (pressed || !onPress) && MyStylers.press]}
      onPress={onPress}>
      <Image source={image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
