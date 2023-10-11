import {StyleSheet, View} from 'react-native';
import {MyColors} from '../../../constants';

export default function PlaceholderCategory() {
  return <View style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 240,
    opacity: 0.3,
    backgroundColor: MyColors.placeholder,
  },
});
