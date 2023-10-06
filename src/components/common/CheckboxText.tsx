import {ReactNode, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {MyDimesions} from '../../constants';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onChanged?: (value: boolean) => void;
}

export default function CheckboxText({children, style, onChanged}: Props) {
  const [value, setValue] = useState(false);

  /// Set current state with [value: boolean]
  /// And callback with [value: boolean]
  function changeValue(value: boolean) {
    setValue(value);

    // Callback
    onChanged && onChanged(value);
  }

  return (
    <View style={[styles.container, style]}>
      <CheckBox value={value} onValueChange={changeValue} />
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    marginLeft: MyDimesions.kPaddingSmall,
  },
});
