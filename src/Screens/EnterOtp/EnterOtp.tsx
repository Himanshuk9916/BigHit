import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import texts from '../../constants/Text';
import AnimatedLottieView from 'lottie-react-native';
import styles from './EnterOtpStyles';
import assets from '../../assets/index';
import Background from '../../components/Background';
import {proportionedPixel} from '../../utils/Dimension';
import {useNavigation} from '@react-navigation/native';
import colors from '../../constants/Color';
// import LottieView = require("lottie-react-native");

function EnterOtp(props: any) {
  const [lottieView, setLottieView] = useState(false);
  const [commonLottieView, setCommonLottieView] = useState(0);
  const [showLoginText, setShowLoginText] = useState<boolean>(false);
  const firstInputValueRef = useRef<any>(null);
  const secondInputValueRef = useRef<any>(null);
  const thirdInputValueRef = useRef<any>(null);
  const fourthInputValueRef = useRef<any>(null);
  const fifthInputValueRef = useRef<any>(null);
  const sixthInputValueRef = useRef<any>(null);
  const [firstOtpValue, setFirstOtpValue] = useState<any>('');
  const [secondOtpValue, setSecondOtpValue] = useState<any>('');
  const [thirdOtpValue, setThirdOtpValue] = useState<any>('');
  const [fourthOtpValue, setFourthOtpValue] = useState<any>('');
  const [fifthOtpValue, setFifthOtpValue] = useState<any>('');
  const [sixthOtpValue, setSixthOtpValue] = useState<any>('');
  const [wrongOtp,setWrongOtp]=useState<boolean>(false);

  const navigation = useNavigation<any>();

  const lottViewShow = () => {
    if(firstOtpValue==1 && 
      secondOtpValue==2 &&
      thirdOtpValue==3 &&
      fourthOtpValue==4 &&
      fifthOtpValue==5 &&
      sixthOtpValue ==6
       ){
        setLottieView(true);
        setTimeout(() => {
          setCommonLottieView(1);
        }, 200);
    
        setTimeout(() => {
          setCommonLottieView(2);
          setShowLoginText(true);
        }, 1500);
    
        setTimeout(() => {
          navigation.navigate('HomeScreen');
        }, 3000);
       }else{
        setWrongOtp(true);
       }
  };

  const viewOTP = () => {
    return (
      <View style={styles.otpTextIp}>
        <TextInput
          style={styles.textInput}
          ref={firstInputValueRef}
          keyboardType={'number-pad'}
          maxLength={1}
          onChangeText={text => {
            setFirstOtpValue(text);
            secondInputValueRef.current.focus();
          }}
        />
        <TextInput
          style={styles.textInput}
          ref={secondInputValueRef}
          keyboardType={'number-pad'}
          maxLength={1}
          onChangeText={text => {
            setSecondOtpValue(text);
            thirdInputValueRef.current.focus();
          }}
        />
        <TextInput
          style={styles.textInput}
          ref={thirdInputValueRef}
          keyboardType={'number-pad'}
          maxLength={1}
          onChangeText={text => {
            setThirdOtpValue(text);
            fourthInputValueRef.current.focus();
          }}
        />
        <TextInput
          style={styles.textInput}
          ref={fourthInputValueRef}
          keyboardType={'number-pad'}
          maxLength={1}
          onChangeText={text => {
            setFourthOtpValue(text);
            fifthInputValueRef.current.focus();
          }}
        />
        <TextInput
          style={styles.textInput}
          ref={fifthInputValueRef}
          keyboardType={'number-pad'}
          maxLength={1}
          onChangeText={text => {
            setFifthOtpValue(text);
            sixthInputValueRef.current.focus();
          }}
        />
        <TextInput
          style={styles.textInput}
          ref={sixthInputValueRef}
          keyboardType={'number-pad'}
          maxLength={1}
          onChangeText={text => {
            setSixthOtpValue(text);
            firstInputValueRef.current.focus();
          }}
        />
      </View>
    );
  };

  return (
    <Background style={styles.mainView}>
      {!lottieView ? (
        <View style={styles.container}>
          <Text style={styles.enterOtpText}>{texts.ENTER_OTP}</Text>
          <View style={styles.numberContainer}>
            <Text
              style={
                styles.numberText
              }>{`+91-${props.route.params.phoneNo}`}</Text>
            <TouchableOpacity>
              <Text style={styles.changeText}>{texts.CHANGE}</Text>
            </TouchableOpacity>
          </View>
          {viewOTP()}
          {wrongOtp && <Text style={styles.invalidOtpText}>{texts.INVALID_OTP}</Text>}
          <View style={styles.submitButton}>
            <TouchableOpacity
              onPress={() => lottViewShow()}
              disabled={sixthOtpValue === ''}
              style={[
                styles.touchableContainer,
                {opacity: sixthOtpValue === '' ? 0.5 : 1.0},
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
