import {StyleSheet} from 'react-native';
import {MyColors} from './MyColors';
import {MyDimesions} from './MyDimesions';

export const fontFamily = {
  dancingscriptSemmiBold: 'dancingscript_semibold',
  opensansBold: 'opensans_bold',
  opensansRegular: 'opensans_regular',
  opensansSemmiBold: 'opensans_semibold',
};

export const MyFonts = StyleSheet.create({
  logoStyle: {
    fontSize: MyDimesions.kLogoSize,
    color: MyColors.titleActive,
    fontFamily: fontFamily.dancingscriptSemmiBold,
  },
  labelStyle: {
    fontSize: MyDimesions.kLabelSmall,
    color: MyColors.titleActive,
    fontFamily: fontFamily.opensansBold,
  },
  bodyStyle: {
    fontSize: MyDimesions.kBodySmall,
    color: MyColors.titleActive,
    fontFamily: fontFamily.opensansRegular,
  },
});
