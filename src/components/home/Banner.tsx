import {Image, StyleSheet, Text, View} from 'react-native';
import ElevatedButton from '../common/ElevatedButton';
import {MyDimesions, MyFonts} from '../../constants';

interface Props {
  onPress?: () => void;
}

export default function Banner({onPress}: Props) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/images/banner.png')}
        resizeMode="cover"
      />
      <Text style={[MyFonts.bannerStyle, styles.text]}>
        {'LUXURY\n\tFASHION\n&ACCESSERIES'}
      </Text>
      <View style={styles.buttonContainer}>
        <ElevatedButton style={styles.button} onPress={onPress}>
          EXPLORE COLLECTION
        </ElevatedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 630,
    position: 'relative',
  },
  text: {
    position: 'absolute',
    opacity: 0.65,
  },
  buttonContainer: {
    opacity: 0.6,
    position: 'absolute',
    bottom: MyDimesions.kPaddingLarge,
    width: '100%',
    maxWidth: 300,
  },
  button: {
    height: 45,
  },
});
