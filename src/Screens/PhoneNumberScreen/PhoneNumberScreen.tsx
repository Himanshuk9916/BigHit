import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import assets from '../../assets';
import Background from '../../components/Background';
import colors from '../../constants/Color';
import texts from '../../constants/Text';
import styles from './PhoneNumberScreenStyles';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('window').width;

function PhoneNumberScreen() {
  const [phoneNo, setPhoneNo] = useState<string>('');

  const navigation = useNavigation<any>();

  const formatAndNavigate = async () => {
    await navigation.navigate('EnterOtp', {phoneNo});
  };


  const formatPhNo = (text:any) => {
    let formatedNo = formatMobileNumber(text);
    console.log('length',formatedNo.length)
    setPhoneNo(formatedNo)
  };
  
  const formatMobileNumber=((text:any)=> {
    var cleaned = ("" + text).replace(/\D/g, "");
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "",
        number = [intlCode, "", match[2], "- ", match[3], "-", match[4]].join(
          ""
        );
      return number;
    }
    return text;
  }
  )

  const PhoneTextIp = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          width: screenWidth - 100,
          justifyContent: 'space-between',
        }}>
        <View style={styles.leftTextIp}>
          <Image source={assets.images.indianFlag} style={styles.indianFlag} />
          <TextInput
            placeholder={texts.INDIAN_CODE}
            style={styles.indianCodeTextIp}
            placeholderTextColor={colors.BLACK}
          />
          <Image
            source={assets.images.downArrow}
            style={styles.downArrow}
            resizeMode="contain"
          />
        </View>
        <TextInput
          placeholder=""
          style={styles.phoneNoTxtIp}
          value={phoneNo}
          placeholderTextColor={colors.BLACK}
          onChangeText={number => {
            formatPhNo(number);
          }}
        />
      </View>
    );
  };
  return (
    <Background>
      <View style={styles.welcomeTextView}>
        <Text style={styles.welcomeText}>{`${texts.WELCOME} To`}</Text>
        <Text style={styles.bigHitText}>{texts.BIGHIT}</Text>
      </View>
      {PhoneTextIp()}
      <TouchableOpacity
        style={[
          styles.submitButton,
          {opacity: phoneNo.length !== 13 ? 0.5 : 1.0},
        ]}
        onPress={() => formatAndNavigate()}
        disabled={phoneNo.length !== 12}>
        <Text style={styles.buttonText}>{texts.LETS_GO}</Text>
      </TouchableOpacity>
    </Background>
  );
}

export default PhoneNumberScreen;
