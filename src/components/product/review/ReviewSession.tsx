import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../../constants';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../stores/store';
import {fetchGetReviews} from '../../../stores/product/reviewsSlice';
import ReviewItem from './ReviewItem';
import PlaceholderReview from './PlaceholderReview';
import ReviewInput from './ReviewInput';

interface Props {
  style?: StyleProp<ViewStyle>;
  id: string;
}

export default function ReviewSession({style, id}: Props) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.authState.user);
  const isLoading = useAppSelector(state => state.reviewsState.isLoading);
  const errorMes = useAppSelector(state => state.reviewsState.error);
  const reviews = useAppSelector(state => state.reviewsState.reviews);

  useEffect(() => {
    // Fetch get product's reviews
    dispatch(fetchGetReviews(id));
  }, [id]);

  return (
    <View style={[styles.container, style]}>
      <Text style={[MyFonts.bodyStyle, styles.title]}>REVIEWS</Text>
      {user && <ReviewInput />}
      {isLoading && <PlaceholderReview />}
      <View style={styles.reviewsContainer}>
        {reviews && reviews.length <= 0 && !isLoading && (
          <Text style={[MyFonts.bodyStyle, styles.content]}>
            Not have review
          </Text>
        )}
        {errorMes && !isLoading && (
          <Text style={[MyFonts.bodyStyle, styles.content]}>{errorMes}</Text>
        )}
        {reviews &&
          reviews.length > 0 &&
          !isLoading &&
          reviews.map(item => <ReviewItem key={item.id} review={item} />)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
  title: {
    fontSize: MyDimesions.kBodyMedium,
  },
  reviewsContainer: {
    marginTop: MyDimesions.kPaddingSmall,
  },
  content: {
    fontSize: MyDimesions.kBodyMedium,
    color: MyColors.label,
    marginTop: MyDimesions.kPaddingSmall / 2,
  },
});
