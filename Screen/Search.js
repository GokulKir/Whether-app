import { StyleSheet, Text, View , ScrollView , TextInput , TouchableOpacity , ImageBackground } from 'react-native'
import Icon from "react-native-vector-icons/Feather";
import React from 'react'

export default function Search() {
  return (
    <View style={styles.container}>
        <View style={{alignItems:'center' , marginTop:20}}>

<View style={{alignItems:'center' , width:'98%' , height:40 , backgroundColor:'#fff' , borderRadius:10 , flexDirection:'row'}}>
<Icon name="search"  size={33} style={{marginLeft:10}}/>
<TextInput  style={{width:'98%' , height:"100%" , color:'black' , fontSize:15 , paddingLeft:10}} placeholder="Select state..."/>

</View>
</View>
<View style={{alignItems:'center', marginTop:34}}>
<ScrollView>
 <View >
  <TouchableOpacity style={{width:355 , height:149 , borderColor:'#fff' , borderWidth:1}}>
<ImageBackground style={{width:'100%' , height:'100%'}} source={require('../assets/Kera.jpg')}>

<Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold', marginLeft:34 , marginTop:20}}>Kerala</Text>

</ImageBackground>
  </TouchableOpacity>


  <TouchableOpacity style={{width:355 , height:149 , borderColor:'#fff' , borderWidth:1 , marginTop:30}}>
<ImageBackground style={{width:'100%' , height:'100%'}} source={require('../assets/Gu.jpg')}>

<Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold', marginLeft:34 , marginTop:20}}>Gujarath</Text>

</ImageBackground>
  </TouchableOpacity>


  <TouchableOpacity style={{width:355 , height:149 , borderColor:'#fff' , borderWidth:1, marginTop:30}}>
<ImageBackground style={{width:'100%' , height:'100%'}} source={require('../assets/Maha.jpg')}>

<Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold', marginLeft:34 , marginTop:20}}>Maharashtra</Text>

</ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={{width:355 , height:149 , borderColor:'#fff' , borderWidth:1, marginTop:30}}>
<ImageBackground style={{width:'100%' , height:'100%'}} source={require('../assets/Ban.jpg')}>

<Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold', marginLeft:34 , marginTop:20 , }}>Bangaloor</Text>

</ImageBackground>
  </TouchableOpacity>

  <TouchableOpacity style={{width:355 , height:149 , borderColor:'#fff' , borderWidth:1, marginTop:30}}>
<ImageBackground style={{width:'100%' , height:'100%'}} source={require('../assets/Kera.jpg')}>

<Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold', marginLeft:34 , marginTop:20 , }}>Kerala</Text>

</ImageBackground>
  </TouchableOpacity>
  
 </View>
</ScrollView>
</View>
   
    </View>
  )
}

const styles = StyleSheet.create({

  container : {
    flex : 1,
    backgroundColor:'black'
  }
})