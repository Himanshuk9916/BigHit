import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Alert, LogBox} from 'react-native';
import texts from '../../constants/Text';
import AnimatedLottieView from 'lottie-react-native';
import styles from './EnterOtpStyles';
import assets from '../../assets/index';
import Background from '../../components/Background';
import {proportionedPixel} from '../../utils/Dimension';
import {useNavigation} from '@react-navigation/native';
import NumberComponent from '../../components/NumberComonent';
import OtpInputs from 'react-native-otp-inputs';
import colors from '../../constants/Color';

function EnterOtp(props: any) {
  LogBox.ignoreAllLogs();
  const [focus, setFocus] = useState(false);
  const [lottieView, setLottieView] = useState(false);
  const [wrongOtp, setWrongOtp] = useState<boolean>(false);
  const [otp, setOtp] = useState('');
  const [successOtpVerifiedView, setSuccessOtpVerifiedView] = useState(false);

  const navigation = useNavigation<any>();

  const lottViewShow = () => {
    if (otp === '123456') {
      setLottieView(true);

      setTimeout(() => {
        navigation.navigate('HomeScreen');
      }, 3000);
    } else {
      setWrongOtp(true);
      Alert.alert('Password:123456');
    }
  };

  //This is Otp-Input View
  const viewOTP = () => {
    return (
      <OtpInputs
        style={styles.otpContainer}
        onFocus={() => setFocus(true)}
        handleChange={text => setOtp(text)}
        numberOfInputs={6}
        textAlign={'center'}
        inputStyles={[
          styles.otpInputStyle,
          {
            borderColor: focus ? colors.BLUE : colors.GREY,
            backgroundColor: focus ? colors.WHITE : colors.GREY,
          },
        ]}
        autofillFromClipboard={false}
      />
    );
  };

  const animatedTriangle = () => {
    return (
      <AnimatedLottieView
        source={assets.jsonData.triangleLoader}
        loop={false}
        autoPlay={true}
        onAnimationFinish={() => setSuccessOtpVerifiedView(true)}
      />
    );
  };

  const animatedSuccess = () => {
    return (
      <AnimatedLottieView
        source={assets.jsonData.success}
        loop={false}
        autoPlay={true}
      />
    );
  };

  return (
    <Background style={styles.mainView}>
      {!lottieView ? (
        <View style={styles.container}>
          <Text style={styles.enterOtpText}>{texts.ENTER_OTP}</Text>
          <NumberComponent number={props.route.params.phoneNo} />
          {viewOTP()}
          {wrongOtp && (
            <Text style={styles.invalidOtpText}>{texts.INVALID_OTP}</Text>
          )}
          <View style={styles.submitButton}>
            <TouchableOpacity
              onPress={() => lottViewShow()}
              style={[
                styles.touchableContainer,
                {opacity: otp.length === 6 ? 1.0 : 0.5},
              ]}>
              <View style={styles.touchableContainer}>
                <Text style={styles.submitText}>{texts.SUBMIT}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.lotteView}>
          {successOtpVerifiedView === true && (
            <Text style={styles.loginSuccess}>{`${texts.LOGIN_SUCCESS}!`}</Text> // commonLottieView(2)->showing text only when success json animation is loaded
          )}
          <View
            style={{
              height: proportionedPixel(40),
              width: proportionedPixel(40),
            }}>
            {successOtpVerifiedView ? animatedSuccess() : animatedTriangle()}
          </View>
        </View>
      )}
    </Background>
  );
}

export default EnterOtp;
