import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../../screens/auth/Splash';
import Login from '../../screens/auth/Login';
import Registration from '../../screens/auth/Registration';
import ForgetPassword from '../../screens/auth/ForgetPassword';
import Verification from '../../screens/auth/Verification';
import CitySearch from '../../screens/auth/CitySearch';
import UserProfile from '../../screens/app/UserProfile';
import UserWallet from '../../screens/app/UserWallet';
import About from '../../screens/app/About';
import ReferAndEarn from '../../screens/app/ReferAndEarn';
import Notification from '../../screens/app/Notification';
import MyPost from '../../screens/app/MyPost';
import BoostYourPost from '../../screens/app/BoostYourPost';
import TermAndCondition from '../../screens/app/TermAndCondition';
import BottomNavigation from '../bottom/BottomNavigation';

const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Splash' component={Splash} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='Registration' component={Registration} options={{headerShown:false}}/>
        <Stack.Screen name='ForgetPassword' component={ForgetPassword} options={{headerShown:false}}/>
        <Stack.Screen name='Verification' component={Verification} options={{headerShown:false}}/>
        <Stack.Screen name='CitySearch' component={CitySearch} options={{headerShown:false}}/>
        <Stack.Screen name='UserProfile' component={UserProfile} options={{headerShown:true}}/>
        <Stack.Screen name='UserWallet' component={UserWallet} options={{headerShown:true}}/>
        <Stack.Screen name='TermsandCondition' component={TermAndCondition} options={{headerShown:true}}/>
        <Stack.Screen name='About' component={About} options={{headerShown:true}}/>
        <Stack.Screen name='ReferandEarn' component={ReferAndEarn} options={{headerShown:true}}/>
        <Stack.Screen name='Notification' component={Notification} options={{headerShown:true}}/>
        <Stack.Screen name='My Post' component={MyPost} options={{headerShown:true}}/>
        <Stack.Screen name='Boost Post' component={BoostYourPost} options={{headerShown:true}}/>
        <Stack.Screen name='BottomNavigation' component={BottomNavigation} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default StackNavigation
