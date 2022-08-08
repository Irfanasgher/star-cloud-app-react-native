import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

const RectangalIconButton =(props) => {
    const  {title, image} = props;
    return(
        <TouchableOpacity style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <Text style={styles.heading} >{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        marginTop:10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10
    },
    image:{
        width: 30,
        height: 30,
        resizeMode: 'contain',
        flex: 0.1
    },
    heading:{
        justifyContent: 'center',
        fontSize: 14,
        flex: 0.9,
        textAlign: 'center',
        color: Colors.primary,
        fontFamily: Fonts.primary
    }
})
export default RectangalIconButton;



