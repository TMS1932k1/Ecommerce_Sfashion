import {
  ActivityIndicator,
  ColorValue,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {MyColors, MyDimesions} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  size?: number | 'large' | 'small';
  color?: ColorValue;
}

export default function Indicator({
  style,
  size,
  color = MyColors.titleActive,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
