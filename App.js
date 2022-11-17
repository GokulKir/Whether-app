import * as React from 'react';
import {View} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/Feather";
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"


//Screens//
import Plash from './Screen/Plash' ;


//Home//
import Home from './Screen/Home' ;
import Search from './Screen/Search' ; 
import Places from './Screen/Places' ;
//Home//


//Drawer Logo//
import Logo from './Screen/Logo' ;
//Drawer Logo//


//Screens//


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
    
    screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {  position: 'absolute',backgroundColor:'black'},
      tabBarBackground: () =>(
    <View  style={{flex:1}}>

    </View>
      )
    }}
    
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown:false,tabBarIcon : ({focused}) => focused ? <Icon name="home" size={30} color="yellow"/> : <Icon name="home" size={26} color="#fff"/>}}  />
      <Tab.Screen name="Places" component={Places}   options={{ headerShown:false,tabBarIcon : ({focused}) => focused ? <Icon2 name="earth" size={34} color="yellow"/> : <Icon2 name="earth" size={30} color="#fff"/>}} />
      <Tab.Screen name="Search" component={Search}    options={{ headerShown:false,tabBarIcon : ({focused}) => focused ? <Icon name="search" size={34} color="yellow"/> : <Icon name="search" size={30} color="#fff"/>}}  />
    
    </Tab.Navigator>
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Plash" component={Plash} options={{headerShown:false}}/>
      <Stack.Screen name="MyTabs" component={MyTabs}  options={{headerShown:false}}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}