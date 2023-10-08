import {StyleSheet, Text, View} from 'react-native';
import {MyColors, MyFonts} from '../../constants';

interface Props {
  titleText: string;
  subtitle?: string;
}

export default function Header({titleText, subtitle}: Props) {
  return (
    <View>
      <View style={styles.logoContainer}>
        <Text style={MyFonts.logoStyle}>SFashion</Text>
      </View>
      <Text style={MyFonts.labelStyle}>{titleText}</Text>
      <Text style={[MyFonts.bodyStyle, styles.subtitle]}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: '100%',
    height: 160,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subtitle: {
    color: MyColors.placeholder,
  },
});
