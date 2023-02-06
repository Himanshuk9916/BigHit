import React, {useState, useEffect, useRef} from 'react';
import {View, Text, TextInput, TouchableOpacity, Alert} from 'react-native';
import texts from '../../constants/Text';
import AnimatedLottieView from 'lottie-react-native';
import styles from './EnterOtpStyles';
import assets from '../../assets/index';
import Background from '../../components/Background';
import {proportionedPixel} from '../../utils/Dimension';
import {useNavigation} from '@react-navigation/native';
import NumberComponent from '../../components/NumberComonent';
import SingleOtpTextInput from '../../components/SingleOtpTextInput';

function EnterOtp(props: any) {
  const [lottieView, setLottieView] = useState(false);
  const [commonLottieView, setCommonLottieView] = useState(0);
  const [showLoginText, setShowLoginText] = useState<boolean>(false);
  const [firstOtpValue, setFirstOtpValue] = useState<any>(0);
  const [secondOtpValue, setSecondOtpValue] = useState<any>(0);
  const [thirdOtpValue, setThirdOtpValue] = useState<any>(0);
  const [fourthOtpValue, setFourthOtpValue] = useState<any>(0);
  const [fifthOtpValue, setFifthOtpValue] = useState<any>(0);
  const [sixthOtpValue, setSixthOtpValue] = useState<any>(0);
  const [wrongOtp,setWrongOtp]=useState<boolean>(false);


  // useRefs for changing of refs
  // const firstInputValueRef = useRef<any>(null);
  // const secondInputValueRef = useRef<any>(null);
  // const thirdInputValueRef = useRef<any>(null);
  // const fourthInputValueRef = useRef<any>(null);
  // const fifthInputValueRef = useRef<any>(null);
  // const sixthInputValueRef = useRef<any>(null);

  const navigation = useNavigation<any>();

  const lottViewShow = () => {
    if(firstOtpValue==='1' && 
      secondOtpValue==='2' &&
      thirdOtpValue==='3' &&
      fourthOtpValue==='4' &&
      fifthOtpValue==='5' &&
      sixthOtpValue==='6'
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
        Alert.alert('Password:123456')
       }
  };

  const viewOTP = () => {
    return (
      <View style={styles.otpTextIp}>
        <SingleOtpTextInput
          onChangeText={(text:number) => {
            setFirstOtpValue(text);
          }}
        />
        <SingleOtpTextInput
          onChangeText={(text:number) => {
            setSecondOtpValue(text);
          }}
        />
        <SingleOtpTextInput
          onChangeText={(text:number)=> {
            setThirdOtpValue(text);
          }}
        />
        <SingleOtpTextInput
          onChangeText={(text:number)=> {
            setFourthOtpValue(text);
          }}
        />
        <SingleOtpTextInput
          onChangeText={(text:number) => {
            setFifthOtpValue(text);
          }}
        />
        <SingleOtpTextInput
          onChangeText={(text:number) => {
            setSixthOtpValue(text);
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
          <NumberComponent
          number={props.route.params.phoneNo}
          />
          {viewOTP()}
          {wrongOtp && <Text style={styles.invalidOtpText}>{texts.INVALID_OTP}</Text>}
          <View style={styles.submitButton}>
            <TouchableOpacity
              onPress={() => lottViewShow()}
              style={[
                styles.touchableContainer,
                {opacity: sixthOtpValue !== 0 ? 1.0 : 0.5},
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
