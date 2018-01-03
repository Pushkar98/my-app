import React, { Component} from "react";
import { Container, Header, Content, Footer, Title,FooterTab, Button, Icon, Text} from 'native-base';
import { TabNavigator} from "react-navigation";
import {StyleSheet} from 'react-native';
export default class MyWallet extends Component{
    render(){
        return (
            <Container style={styles.container}>
                <Header>
                <Title>MyWallet</Title>
                    </Header>
                <Text>
                    Wallet will display here
                    </Text>
                </Container>

        )
    }
}
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
    },
    
    })