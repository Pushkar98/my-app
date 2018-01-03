import React from "react";
import { AppRegistry, View, StatusBar,StyleSheet} from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";


export default class ThemeChange extends React.Component{
    render(){
        return(
            <Container style={styles.container}>
                <Header>
                <Title>ThemeChange</Title>
                    </Header>
                <Text>A Toggle Button will change the Theme </Text>
                </Container>
        )
    }
}
const styles= StyleSheet.create({
    container:{
        alignItems:'center',
    },
    
    })