import {Pressable, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {MyColors, MyStylers} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  name: string;
  onPress?: () => void;
}

export default function IconButton({style, onPress, name}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        style,
        (pressed || !onPress) && MyStylers.press,
      ]}
      onPress={onPress}>
      <Icon name={name} color={MyColors.background} size={24} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
  },
});
