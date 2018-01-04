import React from "react";
import { AppRegistry, View, StatusBar,StyleSheet} from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text } from "native-base";


export default class ThemeChange extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                     <View style={styles.header}>
                    <Text style={styles.headerText}>Theme Settings</Text>
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