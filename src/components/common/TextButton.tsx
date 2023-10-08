import {ReactNode} from 'react';
import {Pressable, StyleProp, Text, TextStyle, ViewStyle} from 'react-native';
import {MyFonts, MyStylers} from '../../constants';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  onPress?: () => void;
}

export default function TextButton({
  children,
  style,
  styleText,
  onPress,
}: Props) {
  return (
    <Pressable
      style={({pressed}) => [style, pressed && MyStylers.press]}
      onPress={onPress}>
      <Text style={[MyFonts.bodyStyle, styleText]}>{children}</Text>
    </Pressable>
  );
}
