import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {MyDimesions, MyFonts} from '../constants';
import {
  ArrivalsSession,
  Banner,
  CollectionsSession,
  ImageButton,
} from '../components';
import {Product} from '../types';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'HomeScreen'>;
}

export default function HomeScreen({navigation}: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
      headerTitleAlign: 'center',
      headerLeft: () => (
        <ImageButton
          style={styles.menu}
          image={require('../../assets/images/menu.png')}
        />
      ),
      headerRight: () => (
        <View style={styles.left}>
          <ImageButton
            style={styles.search}
            image={require('../../assets/images/search.png')}
          />
          <ImageButton
            image={require('../../assets/images/shopping_bag.png')}
          />
        </View>
      ),
    });
  }, [navigation]);

  // Set on click banner
  function onExploreCollection() {}

  // Set on click product
  function onClickProduct(product: Product) {}

  return (
    <ScrollView>
      <View>
        <Banner onPress={onExploreCollection} />
        <View style={styles.contentContainer}>
          <ArrivalsSession onClickProduct={onClickProduct} />
          <CollectionsSession onClickProduct={onClickProduct} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
  menu: {
    marginRight: MyDimesions.kPaddingSmall,
  },
  search: {
    marginRight: MyDimesions.kPaddingSmall,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
