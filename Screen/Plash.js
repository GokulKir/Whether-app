import { StyleSheet, Text, View , ImageBackground  , Image} from 'react-native'
import React,{useState , useEffect} from 'react'
// import AwesomeLoading from 'react-native-awesome-loading';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

export default function Plash({navigation}) {
  useEffect(()=>{
    setTimeout(() => {
        navigation.navigate('MyTabs')
    }, 1500);
  },[])
  return (
    <View style={styles.container}>
        <ImageBackground  style={{ width:'100%' , height:'100%' , alignItems:'center' ,  }} source={require('../assets/Ni.jpg')}> 
     <Text style={{ color:'#fff' ,  fontSize:124 , marginTop:145 , fontWeight:'italic'  }}>W</Text>
      <BarIndicator size={44} color="#fff" />
        </ImageBackground>
     
    </View>
  )
}

const styles = StyleSheet.create({

container :{
    flex : 1, 
    backgroundColor:'black',

}

})