import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

const RoundedIconButton =(props) => {
    const  {imageName, title, onPress} = props;
    return(
            <TouchableOpacity style={styles.container} onPress={onPress}>
                <Image source={imageName} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
        padding: 8,
        backgroundColor: Colors.white,
        shadowColor: "#000000",
        shadowOffset: {width: 0, height: 2,},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 50,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    image:{
        width: 15,
        height: 15,
        resizeMode: 'contain'
    },
    title:{
        marginLeft: 20,
        fontSize: 12,
        fontFamily: Fonts.primary,
        color: Colors.primary
    }
})
export default RoundedIconButton;



