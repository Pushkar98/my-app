import React from "react";
import { AppRegistry, View, StatusBar,StyleSheet} from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";


export default class AddCryptos extends React.Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header>
                <Title>Cryptos</Title>
                    </Header>
                <Text> Crypto Currency will be added here </Text>
                </Container>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        //backgroundColor:'#455a64',
    },
    
    })