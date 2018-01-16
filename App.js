import React, { Component } from "react";
import { View, Text } from "react-native";
import Expo from "expo";
import MainScreenNavigator from "./src/screen/index.js";
import { Provider } from "react-redux";
import Store from "./src/Store.js";
/* import * as firebase from "firebase";
import DB_CONFIG from "./config";
firebase.initializeApp(DB_CONFIG); */

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Expo.Font.loadAsync({});
    this.setState({ isReady: true });
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Provider store={Store}>
        <MainScreenNavigator />
      </Provider>
    );
  }
}
