import {StyleSheet, View, Text} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../constants';
import GoogleButton from './GoogleButton';

export default function AnotherAuth() {
  const line = <View style={styles.line} />;

  return (
    <View style={styles.container}>
      <View style={styles.lineContainer}>
        {line}
        <Text style={[MyFonts.bodyStyle, styles.text]}>or</Text>
        {line}
      </View>
      <GoogleButton style={styles.google} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  lineContainer: {
    flexDirection: 'row',
    width: 300,
  },
  line: {
    flex: 1,
    borderColor: MyColors.placeholder,
    borderBottomWidth: 1,
  },
  text: {
    marginHorizontal: MyDimesions.kPaddingSmall,
    marginTop: MyDimesions.kPaddingMedium,
  },
  google: {
    marginTop: MyDimesions.kPaddingMedium,
  },
});
