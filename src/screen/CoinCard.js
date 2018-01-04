
import React , { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { images } from '../Utils/CoinIcons';



const CoinCard = ({ symbol, name, price_usd, percent_change_24h, percent_change_7d }) => {

 
    
    return (

        <View style={container}>
                    <View style={upperRow}>
                    <Image
                    style={styles.image}
                    source={{ uri: images[symbol] }}
                   
                /> 
                <Text style={coinSymbol}>{symbol}</Text>
                <Text style={seperator}>|</Text>
                    <Text style={coinName}>{name}</Text>
                    <Text style={coinPrice}>{price_usd}
                    <Text style={moneySymbol}> $ </Text>
                </Text>
                 </View>
                 <View style={statisticsContainer}>
                 <Text>24h:
                     <Text style={percent_change_24h < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_24h} % </Text>
                </Text>
                <Text>7d:
                    <Text style={percent_change_7d < 0 ? percentChangeMinus : percentChangePlus }> {percent_change_7d} % </Text>
                </Text>

                 </View> 

        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "#e5e5e5",
        borderBottomWidth: 3,
        padding: 20
    },
    coinSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 50,
        fontWeight: "bold",        
    },  seperator: {
        marginTop: 10,
    }, coinName: {
        marginTop: 10,
        marginLeft: 25,
        marginRight: 100    
    },
    coinPrice: {
        marginTop: 10,
        marginRight: 10,
        fontWeight: "bold", 
        marginLeft: "auto"
       
    },
    moneySymbol: {
        fontWeight: "bold",
    },
    statisticsContainer: {
        display: "flex",
        borderTopColor: "#FAFAFA",
        borderTopWidth: 2,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },
    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
    },
    image: {
        width: 35,
        height: 35,
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
})
const { container,upperRow, coinSymbol,seperator,
    coinName,coinPrice,moneySymbol,statisticsContainer,percentChangePlus,
    percentChangeMinus,image

} = styles;



export default CoinCard;
