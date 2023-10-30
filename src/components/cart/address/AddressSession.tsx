import {StyleSheet, Text, View} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../../constants';
import {useAppSelector} from '../../../stores/store';
import NewAddressButton from './NewAddressButton';
import Address from './Address';

interface Props {
  onAddAddress?: () => void;
}

export default function AddressSession({onAddAddress}: Props) {
  const user = useAppSelector(state => state.authState.user);

  return (
    <View style={styles.container}>
      <Text style={[MyFonts.bodyStyle, styles.title]}>
        {'S H I P P I N G   A D D R E S S'}
      </Text>
      {user && user.address && user.phone && (
        <Address name={user.name} address={user.address} phone={user.phone} />
      )}
      <NewAddressButton style={styles.newAddress} onAdd={onAddAddress}>
        {user && user.address && user.phone
          ? 'Change shipping address'
          : 'Add shipping address'}
      </NewAddressButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  title: {
    fontSize: 16,
    color: MyColors.placeholder,
  },
  newAddress: {
    marginVertical: MyDimesions.kPaddingMedium,
    marginBottom: MyDimesions.kPaddingMedium,
  },
});
