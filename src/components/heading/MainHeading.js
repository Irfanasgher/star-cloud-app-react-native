import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

const MainHeading = (props) =>{
    const {name, image, seeAll} = props;
    return(
        <View style={styles.eventContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image style={styles.image} source={image} />
                <Text style={styles.events}>{name}</Text>
            </View>
            <Text style={styles.seeAll} onPress={seeAll}>See all</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    eventContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 40,
        paddingRight: 40,
        marginBottom: 10
    },
    image:{
        height: 25,
        width: 25,
        marginRight: 10,
        resizeMode: 'contain'
    },
    events:{
        color: Colors.primary,
        fontFamily: Fonts.primary
    },
    seeAll:{
        color: Colors.gold,
        fontFamily: Fonts.primary
    }
})

export default MainHeading;
