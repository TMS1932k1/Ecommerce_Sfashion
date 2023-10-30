import {FlatList, Image, StyleSheet, View} from 'react-native';
import CarouselItem from './CarouselItem';

interface Props {
  images: string[];
  onPressResize?: (image: string) => void;
}

export default function CarouselImage({images, onPressResize}: Props) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        keyExtractor={item => item}
        data={images}
        renderItem={({item}) => (
          <CarouselItem image={item} onPressResize={onPressResize} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});
