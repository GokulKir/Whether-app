import { StyleSheet, Text, View, ScrollView , Image , TextInput , ImageBackground } from 'react-native'
import React ,{useEffect , useState} from 'react' ;
import axios from 'axios' ;
import Icon from "react-native-vector-icons/Feather";
import Icon1 from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/Entypo";
import {Kochi , Thiruvananthapuram } from './Location'
export default function Places() {
  const [wether , setWhether] = useState([])
  const [degree , setDegree] = useState([])
  const [date , setDate] = useState()
  const [line , setLine] = useState('')
  const [api2 , setApi2] = useState('')
  const [degree2 , setDegree2] = useState('')
  const [api3 , setApi3] = useState('')
  const [degree3 , setDegree3] = useState('')
  const [api4 , setApi4] = useState('')
  const [degree4 , setDegree4] = useState('')
  const [api5 , setApi5] = useState('')
  const [degree5 , setDegree5] = useState('')
  const [api6 , setApi6] = useState('')
  const [degree6 , setDegree6] = useState('')
  
  useEffect(()=>{
    //Rest API//
  API()
  API2()
  API3()
  API4()
  API5()
  API6()
   //Rest API//
  

  },[])

  const API = async () =>{
    const KEY =  'https://api.openweathermap.org/data/2.5/weather?&appid=0cb6d03365a3ac1f8819c7b8997d0df5&q=Kottayam,India&units=metric' ;
    
    try {
    let response = await axios.get(KEY)
     console.log(response.data);
     console.log("Temb :" + response.data.main.temp);
     setWhether(response.data)
     setDegree(response.data.main.temp)
      
    } catch (error) {
       console.log(error);
       
    }

    
  }

 
    const API2 = async () =>{
      const KEY1 = 'https://api.openweathermap.org/data/2.5/weather?&appid=0cb6d03365a3ac1f8819c7b8997d0df5&q=Palakkad,India&units=metric' ;
      try {
        let res =  await axios.get(KEY1)
          console.log("Palakkad"+res.data);
          setApi2(res.data)
          setDegree2(res.data.main.temp)
        
      } catch (error) {
        console.log(error);
        
      }
    }

    const API3 = async () =>{
      const KEY2 = 'https://api.openweathermap.org/data/2.5/weather?&appid=0cb6d03365a3ac1f8819c7b8997d0df5&q=Alappuzha,India&units=metric' ; 
         try {
          let res = await axios.get(KEY2) 
            console.log("Alappuzha"+ res.data);
            setApi3(res.data) ;
            setDegree3(res.data.main.temp)

         } catch (error) {
          console.log(error);
          
         }
    }
  
    const API4 = async () =>{
      const KEY3 = 'https://api.openweathermap.org/data/2.5/weather?&appid=0cb6d03365a3ac1f8819c7b8997d0df5&q=Thrissur,India&units=metric' ; 
         try {
          let res = await axios.get(KEY3) 
            console.log("Thrissur"+ res.data);
            setApi4(res.data) ;
            setDegree4(res.data.main.temp)

         } catch (error) {
          console.log(error);
          
         }
    }

    const API5 = async () =>{
      const KEY4 = 'https://api.openweathermap.org/data/2.5/weather?&appid=0cb6d03365a3ac1f8819c7b8997d0df5&q=Kochi,India&units=metric' ; 
         try {
          let res = await axios.get(KEY4) 
            console.log("Thrissur"+ res.data);
            setApi5(res.data) ;
            setDegree5(res.data.main.temp)

         } catch (error) {
          console.log(error);
          
         }
    }

    const API6 = async () =>{
      const KEY5 = 'https://api.openweathermap.org/data/2.5/weather?&appid=0cb6d03365a3ac1f8819c7b8997d0df5&q=Wayanad,India&units=metric' ; 
         try {
          let res = await axios.get(KEY5) 
            console.log("Thrissur"+ res.data);
            setApi6(res.data) ;
            setDegree6(res.data.main.temp)

         } catch (error) {
          console.log(error);
          
         }
    }
  
  

  return (
    <View style={styles.container}>
      <View style={{alignItems:'center' , marginTop:45}}>
        <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>Manage Location</Text>

      </View>
      <View style={{alignItems:'center' , marginTop:20}}>

      <View style={{alignItems:'center' , width:'98%' , height:40 , backgroundColor:'#fff' , borderRadius:10 , flexDirection:'row'}}>
      <Icon name="search"  size={33} style={{marginLeft:10}}/>
  <TextInput  style={{width:'98%' , height:"100%" , color:'black' , fontSize:15 , paddingLeft:10}} placeholder="Select location..."/>

      </View>
      </View>
      <View style={{alignItems:'center', marginTop:25}}>
     <ScrollView>
      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Ke.jpg')}>
   <Text style={{color:'#fff' , marginLeft:46 , marginTop:23 , fontSize:23 , fontWeight:'bold'}}>My Location</Text>
   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{wether.name}</Text>
   </View>
</ImageBackground>


      </View>

      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1 , marginTop:20}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Pa.jpg')}>

   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree2)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{api2.name}</Text>
   </View>
</ImageBackground>


      </View>


      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1 , marginTop:20}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Al.jpg')}>

   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree3)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{api3.name}</Text>
   </View>
</ImageBackground>


      </View>




      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1 , marginTop:20}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Thr.jpg')}>

   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree4)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{api4.name}</Text>
   </View>
</ImageBackground>


      </View>



      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1 , marginTop:20}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Koc.jpg')}>

   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree5)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{api5.name}</Text>
   </View>
</ImageBackground>


      </View>



      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1 , marginTop:20}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Waya.jpg')}>

   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree6)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{api6.name}</Text>
   </View>
</ImageBackground>


      </View>


      <View style={{width:365 , height:149  , borderColor:'#fff' , borderWidth:1 , marginTop:20}}>
<ImageBackground style={{width:'100%' , height:'100%' , borderRadius:20}} source={require('../assets/Koc.jpg')}>

   <View style={{  marginTop:30, marginLeft:46 , flexDirection:'row'}}>
   <Text style={{color:'#fff' , fontSize:23 , fontWeight:'bold'}}>{`${Math.round(degree6)}`}&deg;C</Text>
   <Text style={{color:'#fff' , marginLeft:"50%", marginTop:5 , fontSize:15 , fontWeight:'bold'}}>{api6.name}</Text>
   </View>
</ImageBackground>


      </View>

   



     </ScrollView>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({

container :{
  flex : 1,
  backgroundColor:'black'
}

})