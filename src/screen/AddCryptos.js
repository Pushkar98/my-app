import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppRegistry, View, StatusBar,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form,  Input as FormItem } from "native-base";
import { DB_CONFIG } from '../config';


type Props = {
  navigation: Navigation};
export default class AddCryptos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };
      }
     
      _onSubmitPress = () => {
        this.props.navigation.navigate('MyWallet');
      }
    
    render(){
        return(
            <View style={styles.container}>
                     <View style={styles.header}>
                    <Text style={styles.headerText}>Add Handlings</Text>
                </View>
                <View style={styles.staticContainer}>
                    <Text style={styles.Text1}>Select a CryptoCurrency:</Text>
                    <TextInput style={styles.textInput} 
                    placeholder='>0'
                    placeholderTextColor='#D3D3D3'
                    />
                </View>
                <View style={styles.staticContainer}>
                    <Text style={styles.Text1}>No of Stocks:</Text>
                    <TextInput style={styles.textInput} 
                    placeholder='>0'
                    placeholderTextColor='#D3D3D3'
                    />
                   </View>
                   <View style={styles.staticContainer}>
                    <Text style={styles.Text1}>Total Amount To Pay:</Text>
                    <TextInput style={styles.textInput} 
                    placeholder='$0'
                    placeholderTextColor='#D3D3D3'
                    />
                   </View>
                   <View style={styles.staticContainer}>
                    <Text style={styles.Text1}>Date Of Purchase:</Text>
                    <TextInput style={styles.textInput} 
                    placeholder='04 January 2017'
                    placeholderTextColor='#D3D3D3'
                    />
                   </View>
                   
                   <View style={styles.buttonWrapper}>
                   <TouchableOpacity
                     style={[styles.button, { backgroundColor: '#FF0000'	}]}
                   >
                   <Icon name="close" />
                    <Text style={styles.addButtonText}></Text> 
                   </TouchableOpacity>
                   <TouchableOpacity
                   onPress={this._onSubmitPress}
                     style={[styles.button, { backgroundColor: '#008000' }]}
                   >
                   <Icon name="add" />
                   </TouchableOpacity>
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
 Text1: {
    color: '#1565c0',
    fontSize: 20,
    padding: 15,
    marginTop:2,
    fontWeight: "bold",        
},
subContainer:{
    backgroundColor: '#1565c0',
    padding:0

},
 staticContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    justifyContent: "space-around",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3,
},
textInput:{
    fontSize:16
},
buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  itemWrapper: {
    height: 80,
    justifyContent: 'space-around',
    marginTop: 10,
  },
  input: {
    flex: 1,
    alignSelf: 'stretch',
    paddingHorizontal: 5,
  },

  
    
    })