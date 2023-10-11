import {StyleSheet, View} from 'react-native';
import {Category} from '../../../types';
import CategoryItem from './CategoryItem';

interface Props {
  categories: Category[];
  onPress?: (category: Category) => void;
}

export default function CategoriesList({categories, onPress}: Props) {
  return (
    <View style={styles.constainer}>
      {categories.map(category => (
        <CategoryItem
          key={category._id}
          category={category}
          onPress={onPress}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    width: '100%',
  },
});
