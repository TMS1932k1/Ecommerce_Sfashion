import {StyleSheet, Text, View} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../constants';
import {useAppSelector} from '../../stores/store';

export default function SumSession() {
  const sum = useAppSelector(state => state.cartState.sum);

  return (
    <View style={styles.container}>
      <Text style={[MyFonts.bodyStyle, styles.title]}>
        {'E S T .  T O T A L'}
      </Text>
      <Text style={[MyFonts.bodyStyle, styles.price]}>
        {sum.toLocaleString()} VND
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    padding: MyDimesions.kPaddingSmall,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: MyDimesions.kBodyMedium,
  },
  price: {
    fontSize: MyDimesions.kBodyMedium,
    color: MyColors.secondary,
  },
});
