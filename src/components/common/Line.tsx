import {Image, ImageStyle, StyleProp} from 'react-native';

interface Props {
  style?: StyleProp<ImageStyle>;
}

export default function Line({style}: Props) {
  return (
    <Image style={style} source={require('../../../assets/images/line.png')} />
  );
}
