import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';

function SubscriptionCard() {
    return(
        <View style={styles.container}>
            <View style={styles.firstSection}>
                <Image source={require('../../images/BuyCoins/StarGroup.png')} style={styles.image}/>
                <Text style={styles.starCounter}>500</Text>
            </View>
            <View style={styles.secondSection}>
                <Text style={{color:Colors.white, fontSize: 14}}>€ 3.56</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop: 15,
        backgroundColor:'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        overflow: 'hidden',
        // shadowColor: "#000000",
        // shadowOffset: {width: 4, height: 4,},
        // shadowOpacity: 0.15,
        // shadowRadius: 3.84,
        // elevation: 8,
        height: 110,
        width: 90,
    },
    firstSection:{
        flex: 0.7,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain'
        // borderRadius: 50,
    },
    starCounter:{
        color:Colors.primary,
        fontSize: 12,
        // marginTop: 10
    },
    secondSection:{
        width: '100%',
        flex: 0.3,
        backgroundColor:'#1C234F',
        alignItems: 'center',
        justifyContent: 'center',

    }
})
export default SubscriptionCard;
