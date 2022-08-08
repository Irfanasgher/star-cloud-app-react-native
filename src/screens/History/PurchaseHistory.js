import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

class PurchaseHistory extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../../images/History/History.png')} style={styles.image}/>
                <Text style={styles.mainHeading}>No purchase record</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F3F3',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 230,
        width: 230,
        resizeMode: 'contain'
    },
    mainHeading:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        // marginTop: 10
    }
})
export default PurchaseHistory;
