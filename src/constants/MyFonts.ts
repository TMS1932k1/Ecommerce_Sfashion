import {StyleSheet} from 'react-native';
import {MyColors} from './MyColors';
import {MyDimesions} from './MyDimesions';

export const fontFamily = {
  dancingscriptSemmiBold: 'dancingscript_semibold',
  opensansBold: 'opensans_bold',
  opensansRegular: 'opensans_regular',
  opensansSemmiBold: 'opensans_semibold',
  bodonimodaItalic: 'bodonimoda_italic',
};

export const MyFonts = StyleSheet.create({
  logoStyle: {
    fontSize: MyDimesions.kLogoSize,
    color: MyColors.titleActive,
    fontFamily: fontFamily.dancingscriptSemmiBold,
  },
  bannerStyle: {
    fontSize: MyDimesions.kBannerSize,
    color: MyColors.titleActive,
    fontFamily: fontFamily.bodonimodaItalic,
    fontStyle: 'italic',
    fontWeight: 'bold',
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
