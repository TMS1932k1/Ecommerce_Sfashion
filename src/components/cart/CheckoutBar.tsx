import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../../constants';

interface Props {
  onPress?: () => void;
}

export default function CheckoutBar({onPress}: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/shopping_bag_dark.png')}
      />
      <Pressable
        style={({pressed}) => [(pressed || !onPress) && MyStylers.press]}
        onPress={onPress}>
        <Text style={[MyFonts.bodyStyle, styles.text]}>C H E C K O U T</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: MyColors.titleActive,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginRight: MyDimesions.kPaddingSmall,
  },
  text: {
    fontSize: 18,
    color: MyColors.background,
  },
});
