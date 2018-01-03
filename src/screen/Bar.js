import React, { Component} from "react";
import {AppRegistry,StyleSheet,View,Text} from 'react-native';


export default class Bar extends Component{
    render(){
        return (
            <View style={styles.bar}>
            <View style={[styles.barItem, styles.barseparator ]}>
            <Text style={styles.barTop}>$2.3Bn</Text>
            <Text style={styles.barBottom}> Total Assets</Text>
            </View>
            <View style={styles.barItem}>
            <Text style={styles.barTop}>$300 million</Text>
            <Text style={styles.barBottom}>Investment</Text>
            </View>
                </View>

        )
    }
}
const styles= StyleSheet.create({
    bar:{
        borderTopColor: '#fff',
        borderTopWidth:4,
        backgroundColor: '#ec2e4a',
        flexDirection:'row',

    },
    barseparator:{
        borderRightWidth:  2
    }
,
barTop:{
    color:'#fff',
    fontSize:16,
    fontWeight:'bold',
    fontStyle:'italic'
},
barBottom:{
    color:'#000',
    fontSize:14,
    fontWeight:'bold'
}
    
    });