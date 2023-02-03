import { StyleSheet } from "react-native";
import { proportionedPixel,heightPercentageToDP,widthPercentageToDP } from "../../utils/Dimension";
import colors from "../../constants/Color";

const styles = StyleSheet.create({
    numberContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: widthPercentageToDP('65'),
      marginVertical: heightPercentageToDP('2'),
    },
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
    otpTextIp: {
      flexDirection: 'row',
      width: widthPercentageToDP('70'),
      justifyContent: 'space-around',
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
    textInput: {
      borderWidth: proportionedPixel(0.7),
      borderColor: colors.BLUE,
      width: widthPercentageToDP('8'),
      height: heightPercentageToDP('6'),
      borderRadius:proportionedPixel(5),
      textAlign:'center',
      color:colors.BLACK,
      fontWeight:'bold'
    },
    numberText:{
      fontWeight:'bold',
      fontSize:proportionedPixel(10),
    },
    changeText:{
      fontWeight:'bold',
      fontSize:proportionedPixel(10),
      color:colors.BLUE
    },
    loginSuccess:{
      fontWeight:'bold',
      fontSize:proportionedPixel(9)
    },
    lotteView:{
      justifyContent:'center',
      alignItems:'center'
    },
    emptyOtpTextField:{
      borderWidth: proportionedPixel(0.7),
      borderColor: colors.GREY,
      width: widthPercentageToDP('8'),
      height: heightPercentageToDP('6'),
      borderRadius:proportionedPixel(5),
      textAlign:'center',
      color:'red',
      fontWeight:'bold',
      backgroundColor:colors.GREY
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
}
  });

  export default styles;