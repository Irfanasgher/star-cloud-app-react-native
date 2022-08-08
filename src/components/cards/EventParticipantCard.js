import React, {Component} from 'react';
import {View,Text, StyleSheet, Image, ImageBackground, ProgressBarAndroid} from 'react-native';
import { Rating, AirbnbRating } from 'react-native-elements';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

const EventParticipantCard = (props) =>{
    const {image, participantName, eventName, timeAndLocation } =props;
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground style={styles.imageBackground} source={{uri: image}}>
                    <View style={styles.statImageContainer}>
                        <AirbnbRating
                            count={5}
                            showRating={false}
                            defaultRating={3}
                            size={12}
                        />
                    </View>
                </ImageBackground>
            </View>
            <View>
                <Text style={styles.participantName}>{participantName}</Text>
            </View>
            {/*<View>*/}
            {/*    <Text style={styles.liveOnRadio}>Live - on the Radio</Text>*/}
            {/*</View>*/}
            {/*<View>*/}
            {/*    <Text style={styles.trail}>10:30 | Freedom Trail</Text>*/}
            {/*</View>*/}
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        margin: 20,
        alignItems: 'center'
    },
    imageContainer:{
        height: 120,
        width: 120,
        borderRadius: 20,
        overflow: 'hidden'
    },
    imageBackground:{
        height: 120,
        width: 120,
    },
    statImageContainer:{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'space-between',
        backgroundColor: Colors.primary,
    },
    starImages:{
      height: 15,
      width: 15,
      borderRadius: 50
    },
    participantName:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 16,
        marginTop: 10
    },
    liveOnRadio:{
        color: Colors.gold,
        fontFamily: Fonts.primary,
        fontSize: 11,
    },
    trail:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 11,
    }
})
export default EventParticipantCard;
