import React from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import { AppRegistry, View, StatusBar,StyleSheet,TextInput,TouchableOpacity} from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form,  Input as FormItem } from "native-base";
const Item = Picker.Item;
export default class AddCryptos extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined
        };
      }
      onValueChange2() {
        this.setState({
          selected2: value
        });
      }
    render(){
        return(
            <View style={styles.container}>
                     <View style={styles.header}>
                    <Text style={styles.headerText}>Add Handlings</Text>
                </View>
                <View style={styles.staticContainer}>
                    <Text style={styles.Text1}>Select a CryptoCurrency:</Text>
                
                <Form>
                  <Picker
                    mode="dropdown"
                    placeholder=">Choose a Crypto"
                    selectedValue={this.state.selected2}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
                    <Item label="BITCOIN" value="key0" />
                     <Item label="Ripple" value="key1" />
                    <Item label="Ethereum" value="key2" />
                    <Item label="Bitcoin-Cash" value="key3" />
                    <Item label="Cardano" value="key4" /> 
                    <Item label="Nem" value="key5" />
                     <Item label="Stellar" value="key6" />
                    <Item label="Litecoin" value="key7" />
                    <Item label="Iota" value="key8" />
                    <Item label="Tran" value="key9" />
                  </Picker>
                </Form>
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