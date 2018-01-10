import React ,{ PureCompnent }from "react";
import { Linking,Switch,Text,TouchableOpacity, View, StatusBar,StyleSheet} from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button,} from "native-base";
import { connect } from 'react-redux';

import type { State, ThemeColorsData } from '../../types';



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