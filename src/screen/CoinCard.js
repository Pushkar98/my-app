
import React , { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
//import { images } from '../Utils/CoinIcons';

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
})

const { container} = styles;

const CoinCard = ({ symbol, name, price_usd, percent_change_24h, percent_change_7d }) => {

 
    
    return (
        <View style={container}>

                <Text>{price_usd}</Text>
                <Text>{name}</Text>
      

        </View> 
    );
}



export default CoinCard;
