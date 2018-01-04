import React, { Component} from "react";
import { TabNavigator} from "react-navigation";
import {StyleSheet,View,Text, AppRegistry} from 'react-native';
import Header from './Header';
import Bar from './Bar';
import PhotoGrid from './PhotoGrid';

export default class MyProfile extends Component{
    render(){
        return (
            <View style={styles.container}>
               <Header/>
               <Bar/>
               </View>

        )
    }
}
const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#000'
    },
    
    });
