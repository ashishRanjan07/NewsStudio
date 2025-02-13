import { LogBox, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation/stack/StackNavigation';
import messaging from '@react-native-firebase/messaging';
LogBox.ignoreLogs(['Warning: ...']);

// Ignore all log notifications
LogBox.ignoreAllLogs();
LogBox.ignoreLogs(['Remote debugger']);
const App = () => {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  useEffect(() => {
    requestUserPermission()
    getToken()
  })
  const getToken = async() => {
    const token = await messaging().getToken()
    console.log("Token =",token)
  }
  return (
    <NavigationContainer>
    <StackNavigation/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})