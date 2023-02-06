import { StyleSheet } from "react-native";
import { proportionedPixel,heightPercentageToDP,widthPercentageToDP } from "../../utils/Dimension";
import colors from "../../constants/Color";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    enterOtpText: {
      fontSize: proportionedPixel(10),
      color: colors.BLACK,
      fontWeight:'bold',
    },
    submitButton: {
      marginVertical: heightPercentageToDP('5'),
    },
    mainView: {
      flex: 1,
    },
    lottieView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginSuccess:{
      fontWeight:'bold',
      fontSize:proportionedPixel(9)
    },
    lotteView:{
      justifyContent:'center',
      alignItems:'center'
    },
    touchableContainer: {
      borderWidth: 1,
      borderColor: colors.BLACK,
      borderRadius: proportionedPixel(20),
      backgroundColor:colors.BLACK
  },
  submitText: {
    paddingHorizontal: widthPercentageToDP('25'),
    paddingVertical: heightPercentageToDP('1.5'),
    color:colors.WHITE,
    fontSize:proportionedPixel(10)
},
invalidOtpText:{
  marginVertical:proportionedPixel(10),
  color:'red',
  fontSize:proportionedPixel(9)
},
otpContainer:{
  flexDirection: 'row',
  width: 250,
  justifyContent: 'space-between',
},
otpInputStyle:{
  borderWidth: 1,
}
  });

  export default styles;