import React from "react";
import { AppRegistry, View, StatusBar,StyleSheet,TouchableOpacity} from "react-native";
import { Container, Body, Content, Header, Left, Right, Icon, Title, Input, Item, Label, Button, Text,Footer,FooterTab } from "native-base";
import { connect} from 'react-redux';
  class CryptoTracker extends React.Component{

    render(){
        console.log('Jai Hind');
        return(
            
            <Container style={styles.container}>
             <Header>
            <Title>Currencies</Title>
                </Header>
                    <View>
                <Text>
                 Currency will be displayed here
                    </Text>
                    </View>
                  
                </Container>
        )
    }
}
function mapStateToProps(state) {
    return {
        crypto: state.crypto
    }
}

export default connect(mapStateToProps)(CryptoTracker)

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
    },
    
    })

