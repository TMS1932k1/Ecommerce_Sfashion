import {StyleSheet, Text, View} from 'react-native';
import {Review} from '../../../types';
import {MyColors, MyDimesions, MyFonts} from '../../../constants';

interface Props {
  review: Review;
}

export default function ReviewItem({review}: Props) {
  return (
    <View>
      <Text style={styles.text}>
        {' + '}
        {
          <Text style={[MyFonts.bodyStyle, styles.rate]}>
            {review.rating} stars
          </Text>
        }
        {' by '}
        {review.user.name}: {review.review}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  rate: {
    color: MyColors.secondary,
  },
  text: {
    fontSize: MyDimesions.kBodyMedium,
    color: MyColors.label,
    marginTop: MyDimesions.kPaddingSmall / 2,
  },
});
