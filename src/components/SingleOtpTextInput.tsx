//This component is used in Enter-Otp screen 
import React,{useRef} from "react";
import {View,Text,TextInput,StyleSheet} from 'react-native';
import { proportionedPixel,widthPercentageToDP,heightPercentageToDP } from "../utils/Dimension";
import colors from "../constants/Color";

export default  (props:any)=>{
    return(
        <TextInput 
        style={styles.textInput}
        keyboardType={"number-pad"}
        maxLength={1}
        {...props}
        />
    )
}


const styles=StyleSheet.create({
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
})