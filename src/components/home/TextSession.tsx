import {ReactNode} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export default function TextSession({style, children}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[MyFonts.bodyStyle, styles.text]}>{children}</Text>
      <Image source={require('../../../assets/images/line.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: MyDimesions.kPaddingMedium,
  },
  text: {
    fontSize: MyDimesions.kLabelMedium,
    textShadowColor: MyColors.placeholder,
    textShadowOffset: {height: 2, width: 1},
    textShadowRadius: 10,
  },
});
