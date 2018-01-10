import React , { Component}  from 'react';
import { StyleSheet, View ,Text} from 'react-native';
import type { ThemeColorsData } from '../../types';

import { colors } from '../../Utils/Constants';

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    height: 60,
    marginTop: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  tableEl: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default class WalletHeader extends Component{
  render(){
      return (
  <View style={[styles.root, { backgroundColor:'#1565c0' }]}>
    <View style={styles.tableEl}>
      <Text style={{ color:'#B4B4B4' }}>
        Total Investment
      </Text>
     
    </View>
    <View style={styles.tableEl}>
      <Text style={{ color:'#B4B4B4' }}>Gain $</Text>
      
    </View>
    <View style={styles.tableEl}>
      <Text style={{ color:'#B4B4B4' }}>Gain %</Text>
     
    </View>
  </View>
);
}
}


