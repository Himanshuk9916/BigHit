//This component is used in Enter-Otp screen 
import React,{useRef,useState} from "react";
import {View,Text,TextInput,StyleSheet} from 'react-native';
import { proportionedPixel,widthPercentageToDP,heightPercentageToDP } from "../utils/Dimension";
import colors from "../constants/Color";

export default  (props:any)=>{
    const [focus,setFocus]=useState<boolean>()
    return(
        <TextInput 
        style={focus?styles.textInputFocused:styles.textInputUnFocused}
        keyboardType={"number-pad"}
        maxLength={1}
        {...props}
        onFocus={()=>setFocus(true)}
        />
    )
}


const styles=StyleSheet.create({
    textInputFocused: {
        borderWidth: proportionedPixel(0.7),
        borderColor: colors.BLUE,
        width: widthPercentageToDP('8'),
        height: heightPercentageToDP('6'),
        borderRadius:proportionedPixel(5),
        textAlign:'center',
        color:colors.BLACK,
        fontWeight:'bold'
      },
      textInputUnFocused:{
        borderWidth: proportionedPixel(0.7),
        borderColor: colors.GREY,
        width: widthPercentageToDP('8'),
        height: heightPercentageToDP('6'),
        borderRadius:proportionedPixel(5),
        textAlign:'center',
        color:colors.BLACK,
        fontWeight:'bold',
        backgroundColor:colors.GREY,
      }
})