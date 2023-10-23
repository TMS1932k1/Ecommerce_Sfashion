import {StyleSheet, View} from 'react-native';
import TextSession from '../../common/TextSession';
import CollectionsSelectBar from './CollectionsSelectBar';
import {useAppDispatch, useAppSelector} from '../../../stores/store';
import {useEffect, useState} from 'react';
import {fetchGetCollection} from '../../../stores/home/collectionsSlice';
import {MyApp, MyDimesions} from '../../../constants';
import PlaceholderLoading from '../../common/PlaceholderLoading';
import ProductList from '../products/ProductList';
import {Product} from '../../../types';
import MoreButton from '../MoreButton';

interface Props {
  onClickProduct?: (product: Product) => void;
}

export default function CollectionsSession({onClickProduct}: Props) {
  // Collection's currently index
  const [currentIndex, setIndex] = useState<number>(0);

  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.collectionsState.isLoading);
  const collections = useAppSelector(
    state => state.collectionsState.collections,
  );

  // Fetch get collections when on press collections bar
  useEffect(() => {
    dispatch(fetchGetCollection(MyApp.collections[currentIndex].path));
  }, [currentIndex]);

  // Set [currentIndex] with [value: number]
  function onClickCollection(value: number) {
    setIndex(value);
  }

  // Set click more
  function onClickMore() {}

  return (
    <View>
      <TextSession style={styles.textSession}>
        {'C O L L E C T I O N S'}
      </TextSession>
      <CollectionsSelectBar
        currentIndex={currentIndex}
        onClickCollection={onClickCollection}
      />
      {isLoading && <PlaceholderLoading style={styles.products} />}
      {!isLoading && collections!.length > 0 && (
        <ProductList
          style={styles.products}
          products={collections!}
          onClickProduct={onClickProduct}
        />
      )}
      {!isLoading && collections!.length > 0 && (
        <MoreButton style={styles.more} onPress={onClickMore} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  textSession: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  products: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  more: {
    marginTop: MyDimesions.kPaddingLarge,
  },
});
