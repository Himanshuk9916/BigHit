import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet,LogBox} from 'react-native';


function DemoScreen2() {
  LogBox.ignoreAllLogs()
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <Text>DemoSCreen2</Text>
    </View>
  );
}


export default DemoScreen2;
