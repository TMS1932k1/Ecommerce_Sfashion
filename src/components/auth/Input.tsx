import {
  StyleProp,
  Text,
  TextInput,
  TextStyle,
  View,
  ViewStyle,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../constants';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  style?: StyleProp<ViewStyle>;
  label?: string;
  placeholder?: string;
  labelStyle?: StyleProp<TextStyle>;
  onChangeText?: (text: string) => void;
  isValid?: boolean;
  keyBoardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

export default function Input({
  style,
  label,
  labelStyle,
  placeholder,
  onChangeText,
  isValid = true,
  keyBoardType = 'default',
  secureTextEntry = false,
}: Props) {
  return (
    <View style={[styles.container, style]}>
      {label && (
        <Text style={[MyFonts.labelStyle, styles.label, labelStyle]}>
          {label}
        </Text>
      )}
      <View style={styles.borderContainer}>
        <TextInput
          style={styles.input}
          keyboardType={keyBoardType}
          secureTextEntry={secureTextEntry}
          cursorColor={MyColors.placeholder}
          onChangeText={onChangeText}
          numberOfLines={1}
          placeholder={placeholder}
        />
        <View
          style={[
            styles.checkmark,
            {backgroundColor: isValid ? MyColors.done : MyColors.error},
          ]}>
          <Icon
            name={isValid ? 'done' : 'close'}
            size={13}
            color={MyColors.background}
          />
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 400,
  },
  borderContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: MyColors.line,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
  },
  label: {
    fontSize: MyDimesions.kBodySmall,
  },
  checkmark: {
    borderRadius: 10,
  },
});
