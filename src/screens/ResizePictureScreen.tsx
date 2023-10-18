import {Image, StyleSheet, View} from 'react-native';
import {MyApp, MyDimesions, MyStylers} from '../constants';
import {RootNavigatorParams} from '../navigator';
import {RouteProp} from '@react-navigation/native';
import {CircleIconButton} from '../components';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

interface Props {
  route: RouteProp<RootNavigatorParams, 'ResizePictureScreen'>;
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'ProductScreen'>;
}

export default function ResizePictureScreen({route, navigation}: Props) {
  function onBack() {
    navigation.pop();
  }

  return (
    <View style={MyStylers.rootContainer}>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{
          uri: `${MyApp.baseUrl}${MyApp.imageProductsApi}${route.params.image}`,
        }}
      />
      <CircleIconButton
        style={styles.back}
        image={require('../../assets/images/close.png')}
        onPress={onBack}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  back: {
    position: 'absolute',
    bottom: MyDimesions.kPaddingSmall,
    right: MyDimesions.kPaddingSmall,
  },
});
