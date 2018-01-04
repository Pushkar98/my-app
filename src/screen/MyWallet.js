import React, { Component} from "react";
import { Container, Header, Content, Footer, Title,FooterTab, Button, Icon, Text} from 'native-base';
import { TabNavigator} from "react-navigation";
import {StyleSheet,View} from 'react-native';
export default class MyWallet extends Component{
    render(){
        return (
            <View style={styles.container}>
                     <View style={styles.header}>
                    <Text style={styles.headerText}>My Wallet</Text>
                    </View>
          </View>
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#1565c0',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 5,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 26,
        padding: 18,
        marginTop:10,
        fontWeight: "bold",        

    },
  
    
    })