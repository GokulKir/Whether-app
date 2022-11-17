import { StyleSheet, Text, View , ScrollView , TouchableOpacity  , Button , Image , Animated , ImageBackground } from 'react-native'
import React,{ useState , useRef , useEffect } from 'react'
import Icon from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/Feather";
import Icon3 from "react-native-vector-icons/Entypo";
import axios from 'axios' ;

export default function Home() {

  const [wether , setWhether] = useState([])
  const [degree , setDegree] = useState([])
  const [date , setDate] = useState()
  const [line , setLine] = useState('')

  useEffect(()=>{

    //Rest API//

    API()
    DATE()

    //Rest API//
    

  })

  const DATE = () =>{ 


          /*/Calculate Time/*/


//  const date = new Date().getDate() // current date ;
//  const month = new Date().getMonth()  + 1 // current month ;
//  const year = new Date().getFullYear() // current year ;
//  const hours = new Date().getHours() // current hours ;
//  const min  =  new Date().getMinutes() // current minutes ;
//  const sec = new Date().getSeconds() // current seconds ;

//  var ampm = hours >= 12 ? 'pm' : 'am';

//  hour = hours % 12;

//  hour = hours ? hours : 12; // the hour '0' should be '12'

//  minutes = min < 10 ? '0'+min : min;

   /*/Calculate Time/*/

var hours = new  Date().getHours();
var minutes =  new Date().getMinutes();
var ampm = hours >= 12 ? 'pm' : 'am';

setLine(ampm)
hours = hours % 12;
hours = hours ? hours : 12; // the hour '0' should be '12'
minutes = minutes < 10 ? '0'+minutes : minutes;
var strTime = hours + ':' + minutes + ' ' + ampm;




 setDate(strTime)

   

  }

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
       //Drawer Navigation//

    const [showMenu , setShowMenu] = useState(false)
    const movetoRight = useRef(new Animated.Value(1)).current
    const scale = useRef(new Animated.Value(0)).current

       //Drawer Navigation//
    
  //Time line using am light pm is dark change design to am or pm //

  return (
    <View>
      {line === 'am' ?     <ImageBackground style={{ width:'100%' , height:'100%' }} source={require('../assets/M.jpg')}>
        <View style={{alignItems:'center' , flexDirection:'row' ,marginLeft:'35%',marginTop:97}} >
          <Icon name="location" size={34} color="#fff"/>
          <Text style={{ color:'#fff' , marginTop:0 , fontSize:25 , fontWeight:'bold'}}>Kerala</Text>
      
           

        </View >
        <View style={{alignItems:'center' , marginTop:45}} >
          <View  style={{width:195 , height:265 , borderColor:'grey' , borderWidth:2 , borderRadius:10 , alignItems:'center'}}>
         <Image style={{width:75 , height:75 , marginTop:25}} source={require('../assets/morning.png')}/>
         <View style={{marginTop:45}}>
         <Text style={{color:'#fff' , fontSize:33 , fontWeight:'bold'}}>{`${Math.round(degree)}`}&deg;C</Text>
         </View>
         <View>
          <Text style={{color:'#fff' , fontSize:15 , fontWeight:'bold' , marginTop:22}}>{wether.name}</Text>
         </View>
          </View>
          <View style={{}}>
            <Text style={{color:"#fff" , marginTop:23 , fontSize:18 , fontWeight:'bold'}}>{date}</Text>
          </View>
  
         
        </View>
        <View style={{marginTop:35 , marginLeft:10}}>
          <ScrollView  horizontal={true} >
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 , borderColor:'#fff' , borderWidth:1  , borderRadius:0 }}>
         <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0, alignItems:'center' ,}} source={require('../assets/Ke.jpg')}>
         <Icon2 name="cloud-rain" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>23&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Night</Text>
         </ImageBackground>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 , borderColor:'#fff' , borderWidth:1 , borderRadius:0 , marginLeft:23 }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0 , alignItems:'center'}} source={require('../assets/M.jpg')}>
            <Icon3 name="adjust" size={34} color="#fff" style={{}}/>
           <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>24&deg;C</Text>
            <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Morning</Text>
            </ImageBackground>
            
            </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 ,  borderColor:'#fff' , borderWidth:1  , borderRadius:10 , marginLeft:23, }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0, alignItems:'center' }} source={require('../assets/Af.jpg')}>
            <Icon3 name="adjust" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>26&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Afternoon</Text>
            </ImageBackground>

            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 ,  borderColor:'#fff' , borderWidth:1  , borderRadius:0 , marginLeft:23 }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0 , alignItems:'center'}} source={require('../assets/Ev.jpg')}>
            <Icon2 name="cloud-rain" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>22&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Evening</Text>
            </ImageBackground>
            </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 , borderColor:'#fff' , borderWidth:1 , borderRadius:0 , marginLeft:23 }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0 , alignItems:'center'}} source={require('../assets/Li.jpg')}>
            <Icon2 name="cloud-rain" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>20&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Rain light</Text>
            </ImageBackground>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        </ImageBackground> : line === 'pm'  ?  <ImageBackground style={{ width:'100%' , height:'100%' }} source={require('../assets/Ke.jpg')}>
        <View style={{alignItems:'center' , flexDirection:'row' ,marginLeft:'35%',marginTop:97}} >
          <Icon name="location" size={34} color="#fff"/>
          <Text style={{ color:'#fff' , marginTop:0 , fontSize:25 , fontWeight:'bold'}}>Kerala</Text>
      
           

        </View >
        <View style={{alignItems:'center' , marginTop:45}} >
          <View  style={{width:195 , height:265 , borderColor:'grey' , borderWidth:2 , borderRadius:10 , alignItems:'center'}}>
         <Image style={{width:65 , height:65 , marginTop:25}} source={require('../assets/moon.png')}/>
         <View style={{marginTop:45}}>
         <Text style={{color:'#fff' , fontSize:33 , fontWeight:'bold'}}>{`${Math.round(degree)}`}&deg;C</Text>
         </View>
         <View>
          <Text style={{color:'#fff' , fontSize:15 , fontWeight:'bold' , marginTop:22}}>{wether.name}</Text>
         </View>
          </View>
          <View style={{}}>
            <Text style={{color:"#fff" , marginTop:23 , fontSize:18 , fontWeight:'bold'}}>{date}</Text>
          </View>
  
         
        </View>
        <View style={{marginTop:35 , marginLeft:10}}>
          <ScrollView  horizontal={true} >
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 , borderColor:'#fff' , borderWidth:1  , borderRadius:0 }}>
         <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0, alignItems:'center' ,}} source={require('../assets/Ke.jpg')}>
         <Icon2 name="cloud-rain" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>23&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Night</Text>
         </ImageBackground>
            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 , borderColor:'#fff' , borderWidth:1 , borderRadius:0 , marginLeft:23 }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0 , alignItems:'center'}} source={require('../assets/M.jpg')}>
            <Icon3 name="adjust" size={34} color="#fff" style={{}}/>
           <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>24&deg;C</Text>
            <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Morning</Text>
            </ImageBackground>
            
            </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 ,  borderColor:'#fff' , borderWidth:1  , borderRadius:10 , marginLeft:23, }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0, alignItems:'center' }} source={require('../assets/Af.jpg')}>
            <Icon3 name="adjust" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>26&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Afternoon</Text>
            </ImageBackground>

            </TouchableOpacity>
            </View>

            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 ,  borderColor:'#fff' , borderWidth:1  , borderRadius:0 , marginLeft:23 }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0 , alignItems:'center'}} source={require('../assets/Ev.jpg')}>
            <Icon2 name="cloud-rain" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>22&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Evening</Text>
            </ImageBackground>
            </TouchableOpacity>
            </View>


            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{ width:127 , height:196 , borderColor:'#fff' , borderWidth:1 , borderRadius:0 , marginLeft:23 }}>
            <ImageBackground style={{width:"100%" , height:'100%', borderRadius:0 , alignItems:'center'}} source={require('../assets/Li.jpg')}>
            <Icon2 name="cloud-rain" size={34} color="#fff" style={{}}/>
         <Text style={{color:'#fff' , fontSize:23 , marginTop:63}}>20&deg;C</Text>
         <Text style={{color:'yellow' , marginTop:20 , fontWeight:'bold'}}>Rain light</Text>
            </ImageBackground>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        </ImageBackground> : null }
        
    </View>
    
  )
}

const styles = StyleSheet.create({
  
    container :{ 
        flex :1,
    }

})