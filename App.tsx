import React, {useEffect, useState} from 'react';
import StackNavigator from './src/navigators/StackNavigator';
import NetInfo from '@react-native-community/netinfo';
import NoNet from './src/screens/NoInternet/NoNet';

function App() {
  const [isConnected, setConnection] = useState<any>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnection(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  return isConnected ? <StackNavigator /> : <NoNet />
}

export default App;
