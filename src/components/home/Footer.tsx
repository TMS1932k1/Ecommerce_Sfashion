import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {MyApp, MyDimesions, MyFonts} from '../../constants';
import Line from './Line';
import HotlineItem from './footer/HotlineItem';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function Footer({style}: Props) {
  function onPressHotline(id: number) {}

  return (
    <View style={[styles.container, style]}>
      <Text style={MyFonts.logoStyle}>SFashion</Text>
      <View style={styles.rowHotlines}>
        {MyApp.hotlines.map(item => (
          <HotlineItem
            key={item.id}
            id={item.id}
            image={item.image}
            onPress={onPressHotline}
          />
        ))}
      </View>
      <Line />
      <Text style={[MyFonts.bodyStyle, styles.hotline]}>
        {'support@openui.design\n+60 825 876\n08:00 - 22:00 - Everyday'}
      </Text>
      <Line />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginBottom: MyDimesions.kPaddingLarge,
  },
  hotline: {
    textAlign: 'center',
    marginVertical: MyDimesions.kPaddingLarge,
    fontSize: MyDimesions.kBodyLarge,
  },
  rowHotlines: {
    width: '60%',
    marginVertical: MyDimesions.kPaddingLarge,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
