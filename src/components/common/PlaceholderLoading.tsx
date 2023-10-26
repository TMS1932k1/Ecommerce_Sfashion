import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import PlaceholderItem from './PlaceholderItem';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export default function PlaceholderLoading({style}: Props) {
  return (
    <View style={[styles.container, style]}>
      <PlaceholderItem />
      <PlaceholderItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
