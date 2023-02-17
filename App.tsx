import React, { useEffect, useState } from 'react';
import GlovalNavigation from './src/navigators/GlobalNavigation';

function App() {

  // For Normal api call
  let url = "https://jsonplaceholder.typicode.com"
  let param = ["data", "users", "1"]
  if (url) {
    param.forEach((item) => {
      url += `/${item}`
    })
    console.log('URL', url)
  }
  // Normal APi call ends

  useEffect(() => {
    sendingFunction();
  })
  //For api call with Parameters
  const sendingFunction = () => {
    let urlDynamic = "https://staging-api.tracknerd.io/v1/auth/login"
    let params = {
      usename:'Himanshu',
      password:'Sunny@1213'
    }
    recievingFunction(urlDynamic, params)
  }

  const recievingFunction = (urlDynamic: any, params: any) => {
    console.log('params in recieving function', params)
    console.log('url', url)
    if (urlDynamic) {
      let separator = "?";
      for (const key in params) {
        urlDynamic += `${separator}${encodeURI(key.toString())}=${encodeURI(params[key].toString())}`
        separator = "&"
      }
    }
    console.log('UrlDynamic', urlDynamic)
  }

  //Api call with parameters ends
  return (
    <GlovalNavigation />
  )
}

export default App;
