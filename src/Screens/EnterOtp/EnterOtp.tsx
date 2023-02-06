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
  const [commonLottieView, setCommonLottieView] = useState(0); //handling view of loading after sumit otp
  const [wrongOtp, setWrongOtp] = useState<boolean>(false);
  const [otp, setOtp] = useState('');

  const navigation = useNavigation<any>();

  const lottViewShow = () => {
    if (otp === '123456') {
      setLottieView(true);
      setTimeout(() => {
        setCommonLottieView(1);
      }, 200);

      setTimeout(() => {
        setCommonLottieView(2);
      }, 1500);

      setTimeout(() => {
        navigation.navigate('HomeScreen');
      }, 3500);
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
        onAnimationFinish={()=>animatedSuccess}
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

  const switchAnimation = (commonLottieView: any) => {
    switch (commonLottieView) {
      case 1:
        return animatedTriangle();
      case 2:
        return animatedSuccess();
      default:
        return animatedTriangle();
    }
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
          {commonLottieView == 2 && (
            <Text style={styles.loginSuccess}>{`${texts.LOGIN_SUCCESS}!`}</Text>
          )}
          <View
            style={{
              height: proportionedPixel(40),
              width: proportionedPixel(40),
            }}>
            {switchAnimation(commonLottieView)}
          </View>
        </View>
      )}
    </Background>
  );
}

export default EnterOtp;
