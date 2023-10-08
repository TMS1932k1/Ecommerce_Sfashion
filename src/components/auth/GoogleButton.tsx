import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {MyColors, MyDimesions, MyFonts, MyStylers} from '../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export default function GoogleButton({style: style, onPress}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.buttonContainer,
        style,
        (pressed || !onPress) && MyStylers.press,
      ]}>
      <View style={styles.rowContainer}>
        <Icon
          name="google"
          color={MyColors.titleActive}
          size={MyDimesions.kIconMedium}
        />
        <View style={styles.textContainer}>
          <Text style={MyFonts.labelStyle}>Continue with Google</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 12,
    height: 54,
    width: '100%',
    borderRadius: 27,
    borderColor: MyColors.primary,
    borderWidth: 1,
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
