import React, { useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Animated,
  Easing
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import assets from '../../assets';
import styles from './HomeScreenStyle';
import texts from '../../constants/Text';
import { proportionedPixel } from '../../utils/Dimension';

const screenWidth=Dimensions.get('window').width;

function HomeScreen() {

  const topViewValue=new Animated.ValueXY({x:0,y:-proportionedPixel(220)})
  const bottomViewValue=new Animated.ValueXY({x:0,y:proportionedPixel(400)})

  useEffect(()=>{
    Animated.timing(topViewValue, {
      toValue: {x:0,y:0},
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  },[])

  useEffect(()=>{
    Animated.timing(bottomViewValue, {
      toValue: {x:0,y:proportionedPixel(60)},
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  },[])

  const headerView=()=>{
    return(
      <View style={styles.headerView}>
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.welcomeText}>{`${texts.WELCOME} To`}</Text>
          <Text style={styles.bigHitText}>{texts.BIGHIT}</Text>
        </View>
        <Text style={styles.platformText}>{texts.BIGGEST_PLATFORM}</Text>
      </View>
      <TouchableOpacity style={styles.createProfileButton}>
        <Text style={styles.buttonText}>{texts.CREATE_PROFILE}</Text>
      </TouchableOpacity>
    </View>
    )
  }

  const navigation = useNavigation();

  return (
    <SafeAreaView style={{flex: 1}}>
      {/* Top View */}
      <Animated.View style={topViewValue.getLayout()}>
        <ImageBackground
          source={assets.images.homeScreenTopBg}
          style={styles.topViewBgImage}>
            {headerView()}
          <View style={{alignSelf: 'center'}}>
            <Image
              source={assets.images.bgTopImage}
              style={styles.bgTopImage}
            />
          </View>
        </ImageBackground>
      </Animated.View>
      {/* Top View Ends */}

      {/* Bottom View */}
      <Animated.View style={bottomViewValue.getLayout()}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: screenWidth,
          }}>
          <Image
            source={assets.images.topPlayers}
            style={styles.trendingImages}
          />
          <Image
            source={assets.images.trendingSports}
            style={styles.trendingImages}
          />
          <Image
            source={assets.images.topCoaches}
            style={styles.trendingImages}
          />
        </View>
        <Text style={styles.topPlayersText}>
          {texts.TOP_PLAYERS_ON_LEADERBOARD}
        </Text>
        <View style={styles.topPlayersBottom}>
          <Image source={assets.images.abishekCricket} />
          <Image source={assets.images.kanishkCricket} />
          <Image source={assets.images.aparajitaBasketBall} />
          <Image source={assets.images.mrityunjayBasketBall} />
          <Image source={assets.images.akashBasketBall} />
        </View>
      </Animated.View>
      {/* Bottom View Ends */}
      {/* <BottomTabNavigator /> */}
    </SafeAreaView>
  );
}

export default HomeScreen;
