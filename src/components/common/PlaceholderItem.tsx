import {Image, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {MyColors, MyDimesions} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function PlaceholderItem({style}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/fashion_placeholder.png')}
      />
      <View style={[styles.textPlaceHolder, {width: '80%'}]} />
      <View style={[styles.textPlaceHolder, {width: '25%'}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 165,
    height: 275,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '75%',
  },
  textPlaceHolder: {
    opacity: 0.3,
    height: MyDimesions.kBodySmall,
    marginTop: 6,
    backgroundColor: MyColors.placeholder,
  },
});
