import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import assets from '../assets';
import DemoScreen2 from '../screens/DemoScreen/DemoScreen2';
import DemoScreen3 from '../screens/DemoScreen/DemoSCreen3';
import DemoScreen5 from '../screens/DemoScreen/DemoScreen5';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DemoScreen4 from '../screens/DemoScreen/DemoScreen4';
import {proportionedPixel} from '../utils/Dimension';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="DashBoard"
        component={HomeScreen}
        options={{
          tabBarIcon: () => (
            <Image
              source={assets.bottomTabIcons.homeIcon}
              resizeMode="contain"
              style={{
                height: proportionedPixel(11),
                width: proportionedPixel(11),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DemoScreen2"
        component={DemoScreen2}
        options={{
          tabBarIcon: () => (
            <Image
              source={assets.bottomTabIcons.youtubeIcon}
              resizeMode="contain"
              style={{
                height: proportionedPixel(11),
                width: proportionedPixel(11),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DemoScreen3"
        component={DemoScreen3}
        options={{
          tabBarIcon: () => (
            <Image
              source={assets.bottomTabIcons.positionIcon}
              resizeMode="contain"
              style={{
                height: proportionedPixel(11),
                width: proportionedPixel(11),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DemoScreen4"
        component={DemoScreen4}
        options={{
          tabBarIcon: () => (
            <Image
              source={assets.bottomTabIcons.profileIcon}
              resizeMode="contain"
              style={{
                height: proportionedPixel(11),
                width: proportionedPixel(11),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DemoScreen5"
        component={DemoScreen5}
        options={{
          tabBarIcon: () => (
            <Image
              source={assets.bottomTabIcons.notificationIcon}
              resizeMode="contain"
              style={{
                height: proportionedPixel(11),
                width: proportionedPixel(11),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
