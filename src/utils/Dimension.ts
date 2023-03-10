import { Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = (widthPercent: string) => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((screenWidth * elemWidth) / 100);
};
const heightPercentageToDP = (heightPercent: string) => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};
const proportionedPixel = (designPixels: any) => {
  const dimensionDigit = parseFloat(designPixels) > 2 ? parseFloat(designPixels) - 1.4 : parseFloat(designPixels);
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = dimensionDigit * 0.32;
  return PixelRatio.roundToNearestPixel((screenHeight * elemHeight) / 100);
};

export { widthPercentageToDP, heightPercentageToDP, proportionedPixel };
