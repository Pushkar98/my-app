import React , { Component } from "react";
import { AppRegistry, View, StatusBar,StyleSheet,TouchableOpacity,ScrollView} from "react-native";
import { Container, Header, Content, Footer, Title,FooterTab, Button, Icon, Text} from 'native-base';
import { connect} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import FetchCoinData from './../Actions/FetchCoinData';
import CoinCard from './CoinCard';

class CryptoTracker extends Component {

    componentDidMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {

        const { crypto } = this.props;
        console.log('Jai Bhim');
        console.log(this.props);

        return crypto.data.map((coin) => 
            <CoinCard 
                key={coin.name}
                name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
                navigation={this.props.navigation}
            />
        ) 
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
                        textStyle={{color: '#253145'}}
                        animation="fade"
                    />
                </View>
            )
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

        )
        

    }
}

const styles = {
    contentContainer: { 
        paddingBottom: 100,
        paddingTop: 55
    },
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
}

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps, { FetchCoinData })( CryptoTracker );