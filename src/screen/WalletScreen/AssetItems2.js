import React, { PureComponent } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "../../Utils/Constants";
import AddCryptos from "../AddCryptos";
class AssetItem1 extends PureComponent<Props, {}> {
  state = {};
  render() {
    return (
      <View style={[styles.root, { backgroundColor: "#1565c0" }]}>
        <View style={styles.wrapper}>
          <View style={styles.itemWrapper}>
            <Text style={{ color: "#ffffff" }}>ETH</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={{ color: "#ffffff" }}>1</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={{ color: "#ffffff" }}>$ 1291.83</Text>
          </View>
          <View style={styles.itemWrapper}>
            <Text style={{ color: "#ffffff" }}>$ 1291.83</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default AssetItem1;
const styles = StyleSheet.create({
  root: {
    height: 50,
    width: "100%",
    marginTop: 5
    // padding: 5
  },
  wrapper: {
    flex: 1,
    flexDirection: "row"
  },
  imgWrapper: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  metaWrapper: {
    flex: 1,
    paddingHorizontal: 5,
    flexDirection: "row"
  },
  metaItem: {
    flex: 1
  },
  metaWrapperBottom: {
    flex: 1
  },
  title: {
    color: "#B4B4B4"
  },
  titleWrapper: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around"
  },
  itemWrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
