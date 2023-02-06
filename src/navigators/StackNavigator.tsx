import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import EnterOtp from "../screens/EnterOtp/EnterOtp";
import PhoneNumberScreen from "../screens/PhoneNumberScreen/PhoneNumberScreen";

import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from '../navigators/BottomTabNavigator'

const Stack = createStackNavigator();

function StackNavigator(){
    return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} options={{headerShown:false}}/>
            <Stack.Screen name="EnterOtp" component={EnterOtp} options={{headerShown:false}}/>
            <Stack.Screen name="HomeScreen" component={BottomTabNavigator} options={{headerShown:false}}/>
        </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;