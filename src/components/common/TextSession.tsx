import {ReactNode} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../constants';
import Line from './Line';

interface Props {
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  children: ReactNode;
}

export default function TextSession({style, children, styleText}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[MyFonts.bodyStyle, styles.text, styleText]}>
        {children}
      </Text>
      <Line />
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
