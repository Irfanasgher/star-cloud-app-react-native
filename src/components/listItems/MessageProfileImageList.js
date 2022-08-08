import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const MessageProfileImageList = (props) =>{
    const {image} = props;
    return(
        <View style={{flex:1}}>
            <Image source={{uri: image}} style={{height: 65, width: 55, resizeMode: 'contain'}}/>
        </View>
    )
}

export default MessageProfileImageList
