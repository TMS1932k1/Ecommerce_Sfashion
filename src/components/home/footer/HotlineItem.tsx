import {Image, ImageSourcePropType, Pressable} from 'react-native';
import {MyStylers} from '../../../constants';

interface Props {
  onPress?: (id: number) => void;
  id: number;
  image: ImageSourcePropType;
}

export default function HotlineItem({onPress, image, id}: Props) {
  return (
    <Pressable
      style={({pressed}) => [(pressed || !onPress) && MyStylers.press]}
      onPress={onPress ? () => onPress(id) : undefined}>
      <Image source={image} />
    </Pressable>
  );
}
