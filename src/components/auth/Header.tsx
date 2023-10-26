import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {MyColors, MyFonts} from '../../constants';

interface Props {
  titleText: string;
  subtitle?: string;
  style?: StyleProp<ViewStyle>;
}

export default function Header({titleText, subtitle, style}: Props) {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.header}>
        <View style={styles.logo}>
          <Text style={MyFonts.logoStyle}>SFashion</Text>
        </View>
        <View>
          <Text style={MyFonts.labelStyle}>{titleText}</Text>
          <Text style={[MyFonts.bodyStyle, styles.subtitle]}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  header: {
    width: '100%',
    maxWidth: 400,
  },
  logo: {
    height: 110,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: MyColors.placeholder,
  },
});
