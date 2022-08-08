import React, {Component} from 'react';
import {View,Text, StyleSheet, Image} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import RoundedIconButton from '../buttons/RoundedIconButton';

const UserCard = (props) =>{
    const {image, name, onPress, id} =props;
    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri: image}} />
            </View>
            <View style={{alignItems: 'center'}}>
                <Text style={styles.liveOnRadio}>{name}</Text>
                <RoundedIconButton onPress={()=> onPress(id)} title={'Add'} imageName={require('../../images/Profile/BlockUser.png')} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // flex: 1,
        // paddingLeft: 20,
    },
    image:{
        height: 160,
        width: 160,
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
export default UserCard;
