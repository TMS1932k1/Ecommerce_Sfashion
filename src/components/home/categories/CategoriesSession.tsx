import {StyleSheet, View} from 'react-native';
import Line from '../../common/Line';
import {MyDimesions} from '../../../constants';
import TextSession from '../../common/TextSession';
import CategoriesList from './CategoiesList';
import {useAppDispatch, useAppSelector} from '../../../stores/store';
import {useEffect} from 'react';
import {fetchGetCategories} from '../../../stores/home/categoriesSlice';
import PlaceholderCategory from './PlaceholderCategory';
import {Category} from '../../../types';

export default function CategoriesSession() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.categoriesState.isLoading);
  const categories = useAppSelector(state => state.categoriesState.categories);

  // Fetch get arrivals when first
  useEffect(() => {
    dispatch(fetchGetCategories());
  }, []);

  // Set on click category
  function onClickCategory(category: Category) {}

  return (
    <View style={styles.container}>
      <TextSession>{'C A T E G O R I E S'}</TextSession>
      {isLoading && <PlaceholderCategory />}
      {!isLoading && categories!.length > 0 && (
        <CategoriesList categories={categories!} onPress={onClickCategory} />
      )}
      <Line style={styles.underLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: MyDimesions.kPaddingLarge * 3,
  },
  underLine: {
    marginTop: MyDimesions.kPaddingLarge,
  },
});
