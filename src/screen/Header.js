import React, { Component} from "react";
import {AppRegistry,StyleSheet,View,Image,Text} from 'react-native';
export default class Header extends Component{
    render(){
        return (
            //<Image   style={styles.headerBackground}        source={{uri:'http://res.cloudinary.com/duamhi29u/image/upload/v1514887847/Pushkar_txqayi.png'}}>
            <View style={styles.header}>
                <View style={styles.profilepicWrap}>
                <Image   style ={styles.profilepic}        source={{uri:'http://res.cloudinary.com/duamhi29u/image/upload/v1514887847/Pushkar_txqayi.png'}}/>
                    </View>
                    <Text style={styles.name}> Pushkar Kumar </Text>
                    <Text  style={styles.pos}> Investor</Text>
                </View>
           //</Image>


        )
    }
}
const styles= StyleSheet.create({
    headerBackground:{
        flex:1,
        width:null,
    alignSelf:'stretch' , 
    position:'absolute' 
},
header:{
flex:1,
alignItems:'center',
justifyContent:'center',
padding:20,
backgroundColor:'rgba(0,0,0,0.5)',
},
profilepicWrap:{
width:280,
height:280,
borderRadius:250,
borderColor:'rgba(0,0,0,0.4)',
borderWidth:16,
},
  profilepic:{
      flex:1,
      width:null,
      alignSelf:'stretch',
      borderRadius:100,
      borderColor:'#fff',
      borderWidth:4
  },
  name:{
      marginTop:20,
      fontSize:36,
      color:'#fff',
      fontWeight:'bold',
  },
  pos:{
      fontSize:24,
      color:'#0394c0',
      fontWeight:'300',
      fontStyle:'italic'
  } 
    });