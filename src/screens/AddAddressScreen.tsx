import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {useLayoutEffect} from 'react';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../constants';
import {Address, TextSession} from '../components';
import {useAppSelector} from '../stores/store';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'ProductScreen'>;
}

export default function AddAddressScreen({navigation}: Props) {
  const user = useAppSelector(state => state.authState.user);

  useLayoutEffect(() => {
    // Set header
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
      headerTitleAlign: 'center',
    });
  }, [navigation]);

  return (
    <View style={MyStylers.rootContainer}>
      <TextSession styleText={styles.title} style={styles.titleContainer}>
        {'A D D   S H I P P I N G   A D D R E S S'}
      </TextSession>
      <View style={styles.content}>
        {user && user.address && user.phone && (
          <View>
            <Text style={[MyFonts.bodyStyle, styles.subtitle]}>
              {'U S E R   A D D R E S S'}
            </Text>
            <Address
              name={user.name}
              address={user.address}
              phone={user.phone}
              onSelected={() => {}}
            />
            <Text style={[MyFonts.bodyStyle, styles.subtitle]}>
              {'I N P U T  S H I P P I N G   A D D R E S S'}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
  titleContainer: {
    marginTop: MyDimesions.kPaddingLarge,
  },
  title: {
    textShadowColor: MyColors.background,
  },
  subtitle: {
    fontSize: 16,
    color: MyColors.placeholder,
    marginTop: MyDimesions.kPaddingSmall,
  },
});
