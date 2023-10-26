import {Image, StyleSheet, Text, View} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../../constants';

interface Props {
  name: string;
  address: string;
  phone: string;
}

export default function Address({name, address, phone}: Props) {
  return (
    <View style={styles.address}>
      <Text style={[MyFonts.bodyStyle, styles.addressText]}>
        <Text style={styles.nameText}>{name}</Text>{' '}
        {`\n${address}\n(+84) ${phone}`}
      </Text>
      <View style={styles.location}>
        <Image source={require('../../../../assets/images/location.png')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  address: {
    marginTop: MyDimesions.kPaddingMedium,
    padding: MyDimesions.kPaddingSmall,
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressText: {
    flex: 3,
    fontSize: 15,
    color: MyColors.placeholder,
  },
  nameText: {
    fontSize: 18,
    color: MyColors.titleActive,
  },
  location: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
