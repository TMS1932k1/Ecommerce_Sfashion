import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useLayoutEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {MyApp, MyDimesions, MyFonts} from '../constants';
import {
  Banner,
  CollectionsSelectBar,
  ImageButton,
  PlaceholderLoading,
  ProductList,
  TextSession,
} from '../components';
import {useAppDispatch, useAppSelector} from '../stores/store';
import {fetchGetCollection} from '../stores/home/collectionsSlice';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'HomeScreen'>;
}

export default function HomeScreen({navigation}: Props) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.collectionsState.isLoading);
  const collections = useAppSelector(
    state => state.collectionsState.collections,
  );

  // Collection's currently index
  const [currentIndex, setIndex] = useState<number>(0);

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

  useEffect(() => {
    dispatch(fetchGetCollection(MyApp.collections[currentIndex].path));
  }, [currentIndex]);

  // Set on click banner
  function onExploreCollection() {}

  // Set [currentIndex] with [value: number]
  function onClickCollection(value: number) {
    setIndex(value);
  }

  return (
    <ScrollView>
      <View>
        <Banner onPress={onExploreCollection} />
        <View style={styles.contentContainer}>
          <TextSession style={styles.textSession}>
            {'C O L L E C T I O N S'}
          </TextSession>
          <CollectionsSelectBar
            currentIndex={currentIndex}
            onClickCollection={onClickCollection}
          />
          {isLoading && <PlaceholderLoading style={styles.collections} />}
          {!isLoading && collections!.length > 0 && (
            <ProductList style={styles.collections} products={collections!} />
          )}
          <TextSession style={styles.textSession}>
            {'J U S T   F O R   Y O U'}
          </TextSession>
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
  textSession: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  collections: {
    marginTop: MyDimesions.kPaddingLarge,
  },
});
