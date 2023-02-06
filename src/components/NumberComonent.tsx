//This component is Used in Enter-Otp Screen
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP, heightPercentageToDP,proportionedPixel} from '../utils/Dimension';
import texts from '../constants/Text';
import colors from '../constants/Color';
import { useNavigation } from '@react-navigation/native';

function NumberComponent(props:any) {

    const navigation=useNavigation<any>();
  return (
    <View style={styles.container}>
      <Text
        style={
          styles.numberText
        }>{`${texts.INDIAN_CODE}-${props.number}`}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('PhoneNumberScreen')}>
              <Text style={styles.changeText}>{texts.CHANGE}</Text>
            </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthPercentageToDP('65'),
    marginVertical: heightPercentageToDP('2'),
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
});

export default NumberComponent;
