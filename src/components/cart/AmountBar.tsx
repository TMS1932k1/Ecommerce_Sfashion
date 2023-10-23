import {Pressable, StyleSheet, Text, View} from 'react-native';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../../constants';

interface Props {
  amount: number;
  onIncrease?: () => void;
  onDecrease?: () => void;
}

export default function AmountBar({amount, onIncrease, onDecrease}: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          (pressed || !onDecrease) && MyStylers.press,
        ]}
        onPress={onDecrease}>
        <Text style={MyFonts.bodyStyle}>-</Text>
      </Pressable>
      <Text style={[MyFonts.bodyStyle, styles.number]}>{amount}</Text>
      <Pressable
        style={({pressed}) => [
          styles.button,
          (pressed || !onIncrease) && MyStylers.press,
        ]}
        onPress={onIncrease}>
        <Text style={MyFonts.bodyStyle}>+</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  number: {
    marginHorizontal: MyDimesions.kPaddingSmall,
  },
  button: {
    width: 22,
    height: 22,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: MyColors.placeholder,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
