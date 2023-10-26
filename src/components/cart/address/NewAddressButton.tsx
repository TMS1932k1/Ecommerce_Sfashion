import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../../constants';
import ImageButton from '../../common/ImageButton';
import {ReactNode} from 'react';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onAdd?: () => void;
}

export default function NewAddressButton({style, onAdd, children}: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[MyFonts.bodyStyle, styles.text]}>{children}</Text>
      <ImageButton
        image={require('../../../../assets/images/plus_dark.png')}
        onPress={onAdd}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: MyDimesions.kPaddingSmall,
    backgroundColor: MyColors.inputBg,
    borderRadius: 48,
  },
  text: {
    fontSize: 16,
    color: MyColors.placeholder,
  },
});
