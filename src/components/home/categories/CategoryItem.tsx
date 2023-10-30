import {Pressable, StyleSheet} from 'react-native';
import {MyApp, MyDimesions, MyStylers} from '../../../constants';
import {Category} from '../../../types';
import FastImage from 'react-native-fast-image';

interface Props {
  category: Category;
  onPress?: (category: Category) => void;
}

export default function CategoryItem({category, onPress}: Props) {
  return (
    <Pressable
      style={({pressed}) => [(pressed || !onPress) && MyStylers.press]}
      onPress={onPress ? () => onPress(category) : undefined}>
      <FastImage
        style={styles.container}
        source={{
          uri: `${MyApp.baseUrl}${MyApp.imageCategorisApi}${category.imageCover}`,
        }}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 160,
    marginVertical: MyDimesions.kPaddingSmall,
  },
});
