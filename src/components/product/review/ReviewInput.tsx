import {StyleSheet, TextInput, View} from 'react-native';
import {MyColors, MyDimesions, MyFonts} from '../../../constants';
import ImageButton from '../../common/ImageButton';
import {useEffect, useState} from 'react';
import {showToast} from '../../../utils';

interface Props {
  onSendReview?: (review: string) => Promise<boolean>;
}

export default function ReviewInput({onSendReview}: Props) {
  const [review, setReview] = useState('');
  const [isCanSend, setCanSend] = useState(false);

  // Check review's format to can press send
  useEffect(() => {
    if (review.trim().length > 0) {
      setCanSend(true);
    } else {
      setCanSend(false);
    }
  }, [review]);

  // Send your review and wait result
  //  If successfull will remove review's value
  //  Else will show toast to notify failed send
  async function onPress() {
    if (onSendReview) {
      const resultSend = await onSendReview!(review);

      if (resultSend) {
        setReview('');
      } else {
        showToast('Failed in sending your review!');
      }
    }
  }

  function onChangeText(text: string) {
    setReview(text);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={[MyFonts.bodyStyle, styles.input]}
        keyboardType="default"
        numberOfLines={1}
        multiline
        placeholder="Your review about product"
        onChangeText={onChangeText}
      />
      <ImageButton
        image={require('../../../../assets/images/forward.png')}
        onPress={isCanSend ? onPress : undefined}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: MyDimesions.kPaddingSmall / 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderBottomColor: MyColors.line,
    borderBottomWidth: 1,
    fontSize: 15,
    marginRight: MyDimesions.kPaddingSmall / 2,
  },
});
