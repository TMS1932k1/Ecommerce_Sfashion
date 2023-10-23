import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../constants';

interface Props {
  style?: StyleProp<ViewStyle>;
  material?: string;
  desciption?: string;
}

export default function DescriptionSession({
  style,
  material,
  desciption,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      {material && (
        <Text style={[MyFonts.bodyStyle, styles.title]}>MATERIALS</Text>
      )}
      {material && (
        <Text style={[MyFonts.bodyStyle, styles.content]}>{material}</Text>
      )}
      {desciption && <View style={{height: MyDimesions.kPaddingMedium * 2}} />}
      {desciption && (
        <Text style={[MyFonts.bodyStyle, styles.title]}>DESCRIPTION</Text>
      )}
      {desciption && (
        <Text style={[MyFonts.bodyStyle, styles.content]}>{desciption}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: MyDimesions.kPaddingSmall,
  },
  title: {
    fontSize: MyDimesions.kBodyMedium,
  },
  content: {
    fontSize: MyDimesions.kBodyMedium,
    color: MyColors.label,
    marginTop: MyDimesions.kPaddingSmall / 2,
  },
});
