import React, {Component} from 'react';
import { Button, Text, Icon, Footer, FooterTab } from "native-base";
import { TabNavigator } from "react-navigation";
import CryptoTracker from './CryptoTracker';
import MyWallet from './MyWallet';
import ThemeChange from './ThemeChange';
import { TouchableOpacity, StyleSheet } from 'react-native';
import AddCryptos from './AddCryptos';
import MyProfile from './MyProfile';


const MainScreenNavigator = TabNavigator(
    {
      CryptoTracker: { screen: CryptoTracker },
      MyWallet: { screen: MyWallet },
      ThemeChange:{screen: ThemeChange},
      AddCryptos:{screen: AddCryptos},
      MyProfile:{screen:MyProfile}
      
    },
    {
        tabBarPosition: "bottom",
        tabBarComponent: props =>{
            return(
                <Footer>
                    <FooterTab>
                          <TouchableOpacity   style={styles.addButton}
                             onPress={() => props.navigation.navigate("AddCryptos")}>
                            <Text style={styles.addButtonText}>+</Text>
                            </TouchableOpacity>  
                        <Button vertical 
                                    //style= {styles.tabButton}
                                      active={props.navigationState.index === 0}
                                      onPress={() => props.navigation.navigate("CryptoTracker")}>
                                        <Icon name="apps" />            
                        <Text>Currency</Text>
                        </Button>
                        <Button vertical
                        active={props.navigationState.index === 1}
                        onPress={() => props.navigation.navigate("MyWallet")}>
                        <Icon name="cart" /> 
                        <Text>MyWallet</Text>
                        </Button>
                        <Button vertical
                        active={props.navigationState.index === 2}
                        onPress={() => props.navigation.navigate("MyProfile")}>
                        <Icon name="person" />            
                        <Text>MyProfile</Text>
                        </Button>
                        <Button vertical
                        active={props.navigationState.index === 3}
                        onPress={() => props.navigation.navigate("ThemeChange")}>
                        <Icon name="settings" />            
                        <Text>Theme</Text>
                        </Button>
                        </FooterTab>
                        </Footer>

            );
        }
    }
);
export default MainScreenNavigator;

 const styles= StyleSheet.create({
    addButton:{
        position: 'absolute',
        zIndex:11,
        right:20,
        bottom: 90,
        backgroundColor: '#1565c0',
        width:90,
        height:90,
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center',
        elevation:8,
        alignItems: 'center',

    },
    addButtonText:{
        color:'#fff',
        fontSize: 24,
    },
   
})
