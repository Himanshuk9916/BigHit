import React,{useState,useEffect} from "react";
import StackNavigator from "./StackNavigator";
import NetInfo from '@react-native-community/netinfo';
import NoNet from "../screens/NoInternet/NoNet";

function GlovalNavigation(){
    const [isConnected, setConnection] = useState<any>(true);

    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
        setConnection(state.isConnected);
      });
      return () => unsubscribe();
    }, []);
  
    return isConnected ? <StackNavigator /> : <NoNet />
  }

export default GlovalNavigation;