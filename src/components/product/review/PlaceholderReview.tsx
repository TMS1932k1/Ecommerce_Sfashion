import {StyleSheet, View} from 'react-native';
import {MyColors, MyDimesions} from '../../../constants';

export default function PlaceholderReview() {
  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 30,
    backgroundColor: MyColors.placeholder,
    opacity: 0.3,
    marginTop: MyDimesions.kPaddingSmall / 2,
  },
});
