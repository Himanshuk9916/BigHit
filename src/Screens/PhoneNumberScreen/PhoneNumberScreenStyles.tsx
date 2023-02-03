import {StyleSheet} from 'react-native';
import {
  proportionedPixel,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utils/Dimension';
import colors from '../../constants/Color';

const styles = StyleSheet.create({
  welcomeTextView: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  welcomeText: {
    fontSize: proportionedPixel(8),
    color: colors.BLACK,
  },
  bigHitText: {
    fontWeight: 'bold',
    fontSize: proportionedPixel(8),
    color: colors.BLACK,
    marginLeft: proportionedPixel(3),
  },
  indianCodeTextIp: {
    // borderBottomWidth:proportionedPixel(1),
    width: widthPercentageToDP('10'),
    fontSize: proportionedPixel(9),
  },
  indianFlag: {
    height: heightPercentageToDP('2'),
    width: widthPercentageToDP('5'),
  },
  leftTextIp: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: proportionedPixel(1),
    width: widthPercentageToDP('20'),
    justifyContent: 'space-between',
  },
  downArrow: {
    height: heightPercentageToDP('5'),
    width: widthPercentageToDP('4'),
  },
  phoneNoTxtIp: {
    borderBottomWidth: proportionedPixel(1),
    borderBottomColor: colors.BLACK,
    width: widthPercentageToDP('50'),
    fontSize: proportionedPixel(9),
  },
  submitButton: {
    borderWidth: proportionedPixel(1),
    borderColor: colors.BLACK,
    marginTop: heightPercentageToDP('5'),
    alignItems: 'center',
    justifyContent: 'center',
    height: heightPercentageToDP('6'),
    width: widthPercentageToDP('40'),
    borderRadius: proportionedPixel(20),
    backgroundColor: colors.BLACK,
    alignSelf: 'center',
  },
  buttonText: {
    color: colors.WHITE,
    fontWeight: 'bold',
    fontSize: proportionedPixel(9),
  },
});

export default styles;
