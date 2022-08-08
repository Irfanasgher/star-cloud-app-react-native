import React, {Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

const EventCard = (props) =>{
    const {image, eventName, timeAndLocation} =props;
    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri: image}} />
            </View>
           <View style={{alignItems: 'center'}}>
               <Text style={styles.liveOnRadio}>{eventName}</Text>
               <Text style={styles.trail}>{timeAndLocation}</Text>
           </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        // paddingLeft: 20,
    },
    image:{
        height: 130,
        width: 130,
        borderRadius: 10,
    },
    liveOnRadio:{
        color: Colors.gold,
        fontFamily: Fonts.primary,
        marginTop: 10
    },
    trail:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 13
    }
})
export default EventCard;
