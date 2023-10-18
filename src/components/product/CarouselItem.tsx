import {Dimensions, Image, Pressable, StyleSheet, View} from 'react-native';
import {MyApp, MyColors, MyDimesions, MyStylers} from '../../constants';
import CircleIconButton from '../common/CircleIconButton';

interface Props {
  image: string;
  onPressResize?: (image: string) => void;
}

const {width} = Dimensions.get('window');

export default function CarouselItem({image, onPressResize}: Props) {
  return (
    <View style={styles.imageContainer}>
      <View style={styles.image}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: `${MyApp.baseUrl}${MyApp.imageProductsApi}${image}`,
          }}
        />
        <CircleIconButton
          style={styles.resize}
          image={require('../../../assets/images/resize.png')}
          onPress={onPressResize ? () => onPressResize(image) : undefined}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width,
    paddingHorizontal: MyDimesions.kPaddingSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 480,
  },
  resize: {
    position: 'absolute',
    bottom: MyDimesions.kPaddingSmall,
    right: MyDimesions.kPaddingSmall,
  },
});
