import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import type { ThemeColorsData } from "../../types";

class CryptoDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CryptoDetails</Text>
        </View>
        <View style={[styles.root, { backgroundColor: "#1565c0" }]}>
          <Text style={styles.headerText1}> Ripple (XRP) Details:</Text>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>Market Rank :3</Text>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>Available Supply :38739142811.0</Text>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>Total Supply :99993093880.0</Text>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>Market Cap(USD) :76528789.0</Text>
        </View>
        <View style={styles.staticContainer}>
          <Text style={styles.Text1}>ETH to USD :1.9754</Text>
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
  header1: {
    backgroundColor: "#00C0FF"
  },
  headerText: {
    color: "white",
    fontSize: 26,
    padding: 18,
    marginTop: 10,
    fontWeight: "bold"
  },
  headerText1: {
    color: "white",
    fontSize: 20,
    padding: 18,
    marginTop: 10,
    fontWeight: "bold"
  },

  root: {
    flexDirection: "row",
    height: 60,
    marginTop: 5,
    paddingHorizontal: 10,
    width: "100%"
  },
  Text1: {
    color: "#1565c0",
    fontSize: 20,
    padding: 15,
    marginTop: 2,
    fontWeight: "bold"
  },

  staticContainer: {
    display: "flex",
    borderTopColor: "#FAFAFA",
    borderTopWidth: 2,
    padding: 10,
    justifyContent: "space-around",
    borderBottomColor: "#e5e5e5",
    borderBottomWidth: 3
  }
});
function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps)(CryptoDetails);
