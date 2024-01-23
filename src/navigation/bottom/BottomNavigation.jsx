import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from '../../screens/app/Home';
import Profile from '../../screens/app/Profile';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Replace 'MaterialIcons' with your desired icon set


const Bottom  = createMaterialBottomTabNavigator();
const BottomNavigation = ({route}) => {
    const { selectedCity } = route.params;
    return (
        <Bottom.Navigator>
         <Bottom.Screen
             name='Home'
             component={Home}
             initialParams={{ selectedCity }}
             options={{
              tabBarIcon: ({ color }) => (
                  <Icon name="home" size={24} color={color} />
                  // Replace "home" with the name of the icon you want from react-native-vector-icons
              ),
          }}
           />
         <Bottom.Screen name='Profile' component={Profile} options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name="person" size={24} color={color} />
                        // Replace "person" with the name of the icon you want from react-native-vector-icons
                    ),
                }}/>
        </Bottom.Navigator>
       )
}

export default BottomNavigation
