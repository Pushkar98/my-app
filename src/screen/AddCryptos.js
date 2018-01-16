import React, { Component } from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from "react-native-vector-icons/Entypo";
import Spinner from "react-native-loading-spinner-overlay";

import {
  AppRegistry,
  View,
  StatusBar,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  Input as FormItem
} from "native-base";
/* import { DB_CONFIG } from "../../config";
import * as firebase from "firebase"; */
type Props = {
  navigation: Navigation
};
export default class AddCryptos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptoArray: [],
      cryptoText: "",
      cryptoNo: "",
      cryptoCost: "",
      timePassed: false
    };
  }

  _onSubmitPress = () => {
    this.props.navigation.navigate("MyWallet");
  };
  ShowAlertWithDelay = () => {
    setTimeout(function() {
      //this.addNote();
      alert("Crypto Added!");
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
    }, 3500);
  };
  addNote() {
    if (this.state.cryptoText) {
      var d = new Date();
      this.state.cryptoArray.push({
        date: d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(),
        cryptoText: this.state.cryptoText
      });
      this.setState({ cryptoArray: this.state.cryptoArray });
      this.setState({ cryptoText: "" });
      this.setState({ cryptoNo: "" });
      this.setState({ cryptoCost: "" });
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Add Handlings</Text>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>Add a CryptoCurrency:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Add Crypto"
            placeholderTextColor="#D3D3D3"
            onChangeText={cryptoText => this.setState({ cryptoText })}
            value={this.state.cryptoText}
          />
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>No Of Holdings:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="0"
            placeholderTextColor="#D3D3D3"
            onChangeText={cryptoCost => this.setState({ cryptoCost })}
            value={this.state.cryptoCost}
          />
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>Total Cost:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="0"
            placeholderTextColor="#D3D3D3"
            onChangeText={cryptoNo => this.setState({ cryptoNo })}
            value={this.state.cryptoNo}
          />
        </View>
        <View style={styles.staticContainer1}>
          <Button
            info
            style={{
              alignSelf: "center",
              marginBottom: Dimensions.get("window").height / 40 + 15
            }}
            onPress={this.ShowAlertWithDelay}
          >
            <Text>Add Cryptos</Text>
          </Button>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#FF0000" }]}
          >
            <Text style={styles.addButtonText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onSubmitPress}
            style={[styles.button, { backgroundColor: "#008000" }]}
          >
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#1565c0",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 5,
    borderBottomColor: "#ddd"
  },
  headerText: {
    color: "white",
    fontSize: 26,
    padding: 18,
    marginTop: 10,
    fontWeight: "bold"
  },
  Text1: {
    color: "#1565c0",
    fontSize: 20,
    padding: 15,
    marginTop: 2,
    fontWeight: "bold"
  },
  subContainer: {
    backgroundColor: "#1565c0",
    padding: 0
  },
  staticContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    justifyContent: "space-around",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3
  },
  staticContainer1: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 5,
    padding: 0,
    justifyContent: "space-around",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 0
  },
  textInput: {
    fontSize: 16
  },
  buttonWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  button: {
    height: 80,
    width: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20
  },
  itemWrapper: {
    height: 80,
    justifyContent: "space-around",
    marginTop: 10
  },
  input: {
    flex: 1,
    alignSelf: "stretch",
    paddingHorizontal: 5
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 24
  }
});
