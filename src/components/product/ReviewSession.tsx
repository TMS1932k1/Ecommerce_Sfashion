import {StyleProp, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
  id: string;
}

export default function ReviewSession({style, id}: Props) {
  return <View style={[style]}></View>;
}
