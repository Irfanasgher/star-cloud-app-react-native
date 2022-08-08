import React, {Component} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import Colors from '../../common/Colors';

const ReceiveMessage = (props) => {
    const {message} = props;
    return(
        <View style={styles.container}>
            <Text>{message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        width: '80%',
        margin: 10,
        padding: 20,
        borderTopLeftRadius: 0,
        borderRadius: 15,
        shadowColor: "#000000",
        shadowOffset: {width: 4, height: 4,},
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 8,
        position: 'relative',
    }
})
export default ReceiveMessage;
