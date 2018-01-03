import React, { Component} from "react";
import {StyleSheet,View,Image,Dimensions,ScrollView} from 'react-native';
export default class photoGrid extends Component{
    render(){
        return (
            <ScrollView>
                <View style={styles.photoGrid}>
                    <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'http://res.cloudinary.com/duamhi29u/image/upload/v1514898444/bitcoin_eqld4v-min_kwijuv.png'}}/>
                        </View>
                         <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png'}}/>
                        </View>
                        <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png'}}/>
                        </View>
                        <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512427497/bch_crmnz5.png'}}/>
                        </View>
                        <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512427497/ltc_fjbqjf.png'}}/>
                        </View>  
                        <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609484/dash_oltvqi.png'}}/>
                        </View>
                        <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/nem_imprip.png'}}/>
                        </View>
                        <View style={styles.photoWrap}>
                        <Image style={styles.photo} source={{uri:'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/bitconnect_oj1bo5.png'}}/>
                        </View> 
                    </View>
                </ScrollView>


        );
    }
}
const styles= StyleSheet.create({
    photoGrid:{
        flexDirection:'row',
        flexWrap:'wrap',
        
    },
    photoWrap:{
        margin:2,
        height:120,
        width:(Dimensions.get('window').width/4)*1,
 },
 photo:{
     flex:1,
     width:null,
     alignSelf:'stretch'
 }
    });