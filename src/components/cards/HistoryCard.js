import React from 'react';
import {View, StyleSheet, Text, Image,} from 'react-native';
import RoundedIconButton from '../buttons/RoundedIconButton';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
function HistoryCard() {
    return(
        <View style={styles.container}>
            <View style={{ flex: 0.72}}>
                <Image source={require('../../images/VideoChatHistory/ChatImage.png')} style={styles.ImageContianer}/>
            </View>
            {/*<View style={styles.roundedImageContainer}>*/}
            {/*    <Image source={require('../../images/a0889086776da28f222a5c5d0802d3ea.jpg')} style={styles.roundedImage}/>*/}
            {/*</View>*/}
            <View style={styles.nameContainer}>
                <View>
                    <Text style={styles.name}>John Doe</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems:'center'}}>
                    <Image source={require('../../images/a0889086776da28f222a5c5d0802d3ea.jpg')} style={styles.countryImage}/>
                    <Text style={styles.country}>Pakistan</Text>
                </View>
                <View>
                    <Text style={styles.date}>02/18/2020 6:52 pm</Text>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <RoundedIconButton imageName={require('../../images/a0889086776da28f222a5c5d0802d3ea.jpg')} title={'Send a message'}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderRadius: 20,
        overflow: 'hidden',
    },
    ImageContianer:{
        height: '99%',
        width: '98%',
        marginLeft: '1%',
        marginTop: '1%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    roundedImage:{
        width: 30,
        height: 30,
        borderRadius:50,
    },
    roundedImageContainer:{
        top: 30,
        left: 20,
        position: 'absolute'
    },
    nameContainer:{
        flex: 0.11,
        justifyContent: 'space-around',
        marginLeft:15,
        marginTop: 5,
    },
    name:{
        color: Colors.orange,
        fontFamily: Fonts.primary,
        fontSize: 13
    },
    date:{
        color: Colors.orange,
        fontFamily: Fonts.primary,
        fontSize: 11
    },
    countryImage:{
        width: 15,
        height: 10
    },
    country:{
        marginLeft: 5,
        color: Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 11
    },
    buttonContainer:{
        flex:0.13,
        justifyContent:'center',
        alignItems:'center',
    }
})
export default HistoryCard;
