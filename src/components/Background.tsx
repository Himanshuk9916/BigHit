import React from 'react';
import {
  Text,
  View,
  Image,
  ImageBackground,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {proportionedPixel, widthPercentageToDP} from '../utils/Dimension';

const screenWidth = Dimensions.get('window').width;

function Background(props: any) {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={{position: 'absolute', height: proportionedPixel(400)}}>
        <Image
          source={require('../assets/images/bgStadium.png')}
          style={{
            maxHeight: '40%',
            width: proportionedPixel(500),
            marginLeft: -proportionedPixel(100),
          }}
        />
      </View>
      <View style={{marginTop: proportionedPixel(5)}}>
        <Image
          source={require('../assets/images/groupPic.png')}
          style={{height: proportionedPixel(160)}}
        />
      </View>
      <View style={{top: proportionedPixel(120), position: 'absolute'}}>
        <Image
          source={require('../assets/images/bg3.png')}
          style={{
            height: proportionedPixel(270),
            width: proportionedPixel(220),
            marginLeft: -proportionedPixel(20),
          }}
          resizeMode="stretch"
        />
      </View>
      <View style={{position: 'absolute', marginTop: proportionedPixel(140)}}>
        {props.children}
      </View>
    </SafeAreaView>
  );
}

export default Background;
