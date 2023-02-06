import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet,LogBox} from 'react-native';
import OtpTextInput from 'react-native-otp-textinput';
import OtpInputs from 'react-native-otp-inputs';


function DemoScreen2() {
  LogBox.ignoreAllLogs()
  const [focus, setFocus] = useState(false);
  return (
    <View>
      <Text>DemoSCreen2</Text>
      <View style={{backgroundColor: 'yellow'}}>
        <OtpInputs
          style={{
            flexDirection: 'row',
            borderWidth: 1,
            borderColor: 'black',
            width: 300,
            justifyContent: 'space-between',
          }}
          onFocus={() => setFocus(true)}
          handleChange={code => console.log(code)}
          numberOfInputs={6}
          inputStyles={{
            borderWidth: 1,
            borderColor: focus ? 'blue' : 'grey',
            backgroundColor: focus ? 'white' : 'grey',
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stylesInput: {
    borderWidth: 1,
    backgroundColor: 'white',
    width: 40,
  },
  fcsed: {
    borderWidth: 1,
    backgroundColor: 'grey',
    width: 40,
  },
});

export default DemoScreen2;
