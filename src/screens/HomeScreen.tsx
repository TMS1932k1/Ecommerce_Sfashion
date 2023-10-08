import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {RootNavigatorParams} from '../navigator';
import {MyDimesions, MyFonts} from '../constants';
import {ImageButton} from '../components';

interface Props {
  navigation: NativeStackNavigationProp<RootNavigatorParams, 'HomeScreen'>;
}

export default function HomeScreen({navigation}: Props) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'SFashion',
      headerTitleStyle: MyFonts.logoStyle,
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

  return <View></View>;
}

const styles = StyleSheet.create({
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
