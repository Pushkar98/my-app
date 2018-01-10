import React, { Component} from "react";
import { Container, Header, Content, Footer, Title,FooterTab, Button, Icon, Text} from 'native-base';
import { TabNavigator} from "react-navigation";
import {StyleSheet,View,ScrollView} from 'react-native';
import WalletHeader from './WalletHeader';
import AssetItem from './AssetItems';
export default class WalletAssets extends Component{
    render(){
        return (
            <View style={styles.container}>
               <WalletHeader />
               <View
          style={[styles.titleWrapper, { backgroundColor:'#1565c0' }]}
        >
          <View style={styles.titleItem}>
            <Text style={styles.title}>Name</Text>
          </View>
          <View style={styles.titleItem}>
            <Text style={styles.title}>Holdings</Text>
          </View>
          <View style={styles.titleItem}>
            <Text style={styles.title}>Cost</Text>
          </View>
          <View style={styles.titleItem}>
            <Text style={styles.title}>Value</Text>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.list} style={styles.scroll}>
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />
          <AssetItem  />

          
        </ScrollView>
      </View>

                  
        )
    }
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: '#1565c0',
        alignItems: 'center',
        justifyContent:'center',
        borderBottomWidth: 5,
        borderBottomColor: '#ddd'
    },
    headerText: {
        color: 'white',
        fontSize: 26,
        padding: 18,
        marginTop:10,
        fontWeight: "bold",        

    },
    root: {
        flex: 1,
      },
      title: {
        color: '#B4B4B4',
      },
      titleWrapper: {
        height: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginTop: 5,
      },
      titleItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      list: {
        paddingBottom: 5,
      },
      scroll: {
        marginTop: 5,
      }
    });
  
    
    
