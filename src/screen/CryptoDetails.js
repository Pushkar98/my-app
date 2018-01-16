import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { connect } from "react-redux";
import type { ThemeColorsData } from "../../types";

const CryptoDetails = ({ symbol, name, total_supply }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>CryptoDetails</Text>
      </View>
      <View style={[styles.root, { backgroundColor: "#1565c0" }]}>
        <Text style={styles.headerText1}> Ethereum INR Details:</Text>
      </View>
      <View style={styles.staticContainer}>
        <Text style={styles.Text1}>Rank: 2</Text>
      </View>
      <View style={styles.staticContainer}>
        <Text style={styles.Text1}>Available Supply :6994193.0</Text>
      </View>
      <View style={styles.staticContainer}>
        <Text style={styles.Text1}>Total Supply :96994193.0</Text>
      </View>
      <View style={styles.staticContainer}>
        <Text style={styles.Text1}>Market Cap(INR) :976953240120</Text>
      </View>
      <View style={styles.staticContainer}>
        <Text style={styles.Text1}>ETH to INR :82241.554575</Text>
      </View>
    </View>
  );
};

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

export default CryptoDetails;
