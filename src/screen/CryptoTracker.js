import React, { Component } from "react";
import {
  AppRegistry,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
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
import { connect } from "react-redux";
import Spinner from "react-native-loading-spinner-overlay";

import FetchCoinData from "./../Actions/FetchCoinData";
import FetchCoinDetails from "./../Actions/FetchCoinDetails";
import CoinCard from "./CoinCard";
import CryptoDetails from "./CryptoDetails";
//import liveDetails from "./liveDetails";

class CryptoTracker extends Component {
  componentDidMount() {
    this.props.FetchCoinData();
  }

  navigate(id) {
    this.props.FetchCoinDetails(id);
    if (FetchCoinDetails(id).isFetching) {
      return (
        <View>
          <Spinner
            visible={FetchCoinDetails(id).isFetching}
            textContent={"Loading..."}
            textStyle={{ color: "#253145" }}
            animation="fade"
          />
          <CryptoDetails
            key={FetchCoinDetails(id).name}
            name={FetchCoinDetails(id).name}
            total_supply={FetchCoinDetails(id).total_supply}
          />
        </View>
      );
    }
    this.props.navigation.navigate("CryptoDetails");
  }

  renderCoinCards() {
    const { crypto } = this.props;
    return crypto.data.map(coin => (
      <CoinCard
        key={coin.name}
        id={coin.id}
        name={coin.name}
        symbol={coin.symbol}
        price_usd={coin.price_usd}
        percent_change_24h={coin.percent_change_24h}
        percent_change_7d={coin.percent_change_7d}
        navigation={this.props.navigation}
        onPress={() => this.navigate(coin.id)}
      />
    ));
  }

  render() {
    const { crypto } = this.props;
    console.log(crypto);

    if (crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{ color: "#253145" }}
            animation="fade"
          />
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>CryptoCurrency</Text>
        </View>
        <ScrollView style={styles.contentContainer}>
          {this.renderCoinCards()}
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  contentContainer: {
    paddingBottom: 100,
    paddingTop: 55
  },
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
  }
};

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  };
}

export default connect(mapStateToProps, { FetchCoinData, FetchCoinDetails })(
  CryptoTracker
);
