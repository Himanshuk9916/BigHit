import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  LogBox,
} from 'react-native';
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
  LogBox.ignoreAllLogs(); //To-do remove later
  const [focus, setFocus] = useState(false);
  const [lottieView, setLottieView] = useState(false);
  const [commonLottieView, setCommonLottieView] = useState(0);
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
      }, 3000);
    } else {
      setWrongOtp(true);
      Alert.alert('Password:123456');
    }
  };

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
        ]} autofillFromClipboard={false}      
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
          {commonLottieView == 2 && (
            <Text style={styles.loginSuccess}>{`${texts.LOGIN_SUCCESS}!`}</Text>
          )}
          <View
            style={{
              height: proportionedPixel(40),
              width: proportionedPixel(40),
            }}>
            {commonLottieView == 0 && (
              <AnimatedLottieView
                source={assets.jsonData.triangleLoader}
                autoPlay={false}
              />
            )}
            {commonLottieView == 1 && (
              <AnimatedLottieView
                source={assets.jsonData.triangleLoader}
                loop={false}
                autoPlay={true}
              />
            )}
            {commonLottieView == 2 && (
              <AnimatedLottieView
                source={assets.jsonData.success}
                loop={false}
                autoPlay={true}
              />
            )}
          </View>
        </View>
      )}
    </Background>
  );
}

export default EnterOtp;
