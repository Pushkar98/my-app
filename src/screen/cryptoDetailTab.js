import React from "react";
import { TabNavigator, TabBarTop } from "react-navigation";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import CryptoDetails from "./CryptoDetails";
import colors from "../Utils/Constants";
const ICON_SIZE = 30;

const DetailScreenNavigator = TabNavigator(
  {
    WalletAssets: {
      screen: CryptoDetails,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <Entypo color={tintColor} name="list" size={ICON_SIZE} />
        )
      })
    },
    WalletPie: {
      screen: CryptoDetails,
      navigationOptions: () => ({
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            color={tintColor}
            name="chart-pie"
            size={ICON_SIZE}
          />
        )
      })
    }
  },
  {
    lazy: true,
    animationEnabled: true,
    swipeEnabled: true,
    /* tabBarComponent:{
      backgroundColor: '#00C0FF',
      borderTopColor: '#00C0FF',
      height: 50,
    }, */
    tabBarPosition: "top",
    tabBarColor: "#00C0FF",
    tabBarOptions: {
      indicatorStyle: {
        backgroundColor: "#00C0FF"
      },
      activeTintColor: "#00C0FF",
      inactiveTintColor: "#00C0FF",
      pressColor: "#00C0FF",
      showIcon: true,
      showLabel: false
    }
  }
);
export default DetailScreenNavigator;
