import {ReactNode, useState} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {MyDimesions} from '../../constants';

interface Props {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  value?: boolean;
  onChanged?: (value: boolean) => void;
}

export default function CheckboxText({
  children,
  style,
  onChanged,
  value,
}: Props) {
  /// Callback with [value: boolean]
  function changeValue(value: boolean) {
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
    width: '100%',
    maxWidth: 380,
  },
  text: {
    marginLeft: MyDimesions.kPaddingSmall,
  },
});
