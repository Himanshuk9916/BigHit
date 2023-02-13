import React from "react";
import {View,Text} from 'react-native';

function NoNet(){
    return(
        <View style={{alignItems:"center",justifyContent:'center',flex:1}}>
        <Text style={{fontSize:20,fontWeight:'bold'}}>Please check your connection</Text>
        </View>
    )
}

export default NoNet;