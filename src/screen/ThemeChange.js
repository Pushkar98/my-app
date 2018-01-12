import React, { PureCompnent } from "react";
import {
  Linking,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet
} from "react-native";
import {
  Container,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Input,
  Item,
  Label,
  Button
} from "native-base";
import { connect } from "react-redux";

import type { State, ThemeColorsData } from "../../types";

export default class ThemeChange extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Theme Settings</Text>
        </View>
        <View style={[styles.root, { backgroundColor: "#ffffff" }]}>
          <View style={[styles.card, { backgroundColor: "#1565c0" }]}>
            <View style={styles.cardNameWrapper}>
              <Text style={[styles.cardText, { color: "#ffffff" }]}>
                THEME CHANGE
              </Text>
            </View>
            <View style={styles.sliderWrapper}>
              <Switch />
            </View>
          </View>
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
  root: {
    flex: 1
  },
  card: {
    flexDirection: "row",
    height: 50,
    marginTop: 5,
    paddingHorizontal: 10,
    width: "100%"
  },
  cardNameWrapper: {
    flex: 1,
    justifyContent: "center"
  },
  cardText: {
    fontSize: 16,
    fontWeight: "600"
  },
  sliderWrapper: {
    alignItems: "flex-end",
    flex: 0.4,
    justifyContent: "center"
  }
});
