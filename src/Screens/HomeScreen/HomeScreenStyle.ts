import {StyleSheet, Dimensions} from 'react-native';
import {
  proportionedPixel,
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../utils/Dimension';
import colors from '../../constants/Color';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  topViewBgImage: {
    marginTop: -proportionedPixel(20),
    width: screenWidth,
    height: proportionedPixel(120),
  },
  headerView: {
    flexDirection: 'row',
    marginTop: 50,
    width: widthPercentageToDP('90%'),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  createProfileButton: {
    borderWidth: proportionedPixel(1),
    borderColor: colors.BLACK,
    borderRadius: proportionedPixel(15),
  },
  buttonText: {
    paddingHorizontal: proportionedPixel(8),
    paddingVertical: proportionedPixel(5),
    color: colors.BLACK,
  },
  bigHitText: {
    fontSize: proportionedPixel(8),
    fontWeight: 'bold',
    marginLeft: proportionedPixel(3),
    color: colors.BLACK,
  },
  welcomeText: {
    fontSize: proportionedPixel(8),
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  platformText: {
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  bgTopImage: {
    height: proportionedPixel(140),
    width: screenWidth - 20,
  },
  bottomView: {
    position: 'absolute',
    marginTop: heightPercentageToDP('51%'),
  },
  trendingImages: {
    height: heightPercentageToDP('23'),
    width: widthPercentageToDP('25'),
  },
  topPlayersText: {
    fontSize: proportionedPixel(8),
    fontWeight: 'bold',
  },
  topPlayersBottom: {
    flexDirection: 'row',
    marginTop: heightPercentageToDP('1'),
    justifyContent: 'space-around',
  },
});

export default styles;
