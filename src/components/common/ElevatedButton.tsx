import {
  StyleSheet,
  StyleProp,
  ViewStyle,
  Text,
  TextStyle,
  Pressable,
} from 'react-native';
import {MyColors, MyFonts, MyStylers} from '../../constants';
import {ReactNode} from 'react';

interface Props {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export default function ElevatedButton({
  style,
  children,
  styleText,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.container,
        style,
        (pressed || !onPress) && MyStylers.press,
      ]}
      onPress={onPress}>
      <Text style={[MyFonts.labelStyle, styles.text, styleText]}>
        {children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    height: 54,
    borderRadius: 27,
    backgroundColor: MyColors.titleActive,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: MyColors.background,
  },
});
