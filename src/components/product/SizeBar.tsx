import {
  StyleProp,
  View,
  ViewStyle,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  sizes: string[];
  value?: number;
  onPress?: (index: number) => void;
}

export default function SizeBar({style, sizes, value = 0, onPress}: Props) {
  return (
    <View style={[style, styles.container]}>
      <Text style={[MyFonts.bodyStyle, styles.text]}>Size</Text>
      {sizes.map((item, index) => (
        <Pressable
          key={item}
          style={({pressed}) => [
            styles.sizeContainer,
            sizes[value] === item && styles.currentContainer,
            (pressed || !onPress) && MyStylers.press,
          ]}
          onPress={onPress ? () => onPress(index) : null}>
          <Text
            style={[
              MyFonts.bodyStyle,
              styles.sizeText,
              sizes[value] === item && styles.currentText,
            ]}>
            {item}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: MyDimesions.kBodySmall,
    marginRight: MyDimesions.kPaddingSmall,
  },
  sizeContainer: {
    width: 30,
    height: 30,
    borderRadius: 30,
    borderColor: MyColors.placeholder,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: MyDimesions.kPaddingSmall,
  },
  currentContainer: {
    backgroundColor: MyColors.body,
    borderColor: MyColors.body,
  },
  sizeText: {
    fontSize: MyDimesions.kBodySmall,
  },
  currentText: {
    color: MyColors.white,
  },
});
