import {StyleSheet, View} from 'react-native';
import {Product} from '../../types';
import {useAppDispatch, useAppSelector} from '../../stores/store';
import TextSession from './TextSession';
import {MyApp, MyDimesions} from '../../constants';
import PlaceholderLoading from '../common/PlaceholderLoading';
import ProductList from './ProductList';
import {useEffect} from 'react';
import {fetchGetArrival} from '../../stores/home/arrivalsSlice';

interface Props {
  onClickProduct?: (product: Product) => void;
}

export default function ArrivalsSession({onClickProduct}: Props) {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(state => state.arrivalsState.isLoading);
  const arrivals = useAppSelector(state => state.arrivalsState.arrivals);

  // Fetch get arrvals when first
  useEffect(() => {
    dispatch(fetchGetArrival(MyApp.arrivals.path));
  }, []);

  return (
    <View>
      <TextSession style={styles.textSession}>
        {'N E W   A R R I V A L'}
      </TextSession>
      {isLoading && <PlaceholderLoading style={styles.products} />}
      {!isLoading && arrivals!.length > 0 && (
        <ProductList
          style={styles.products}
          products={arrivals!}
          onClickProduct={onClickProduct}
        />
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
});