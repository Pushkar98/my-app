import React, { Component } from "react";
import { Platform,StyleSheet,View } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
export default class SelectCryptos extends Component {
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
  render() {
    return (
      <View>
         <Text style={styles.headerText}>Select a Currency:</Text>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Cryptos List"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </View>
    );
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