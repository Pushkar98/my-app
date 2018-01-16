import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Footer,
  Title,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";
import { TabNavigator } from "react-navigation";
import { StyleSheet, View } from "react-native";
import DetailScreenNavigator from "./cryptoDetailTab";
export default class liveDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Crypto Details</Text>
        </View>
        <DetailScreenNavigator />
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
  header1: {
    backgroundColor: "#00C0FF"
  },
  headerText: {
    color: "white",
    fontSize: 26,
    padding: 18,
    marginTop: 10,
    fontWeight: "bold"
  }
});
