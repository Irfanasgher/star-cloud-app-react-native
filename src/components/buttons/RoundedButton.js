import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Fonts from '../../common/Fonts';

const RoundedButton = (props) => {
    const {title, backgroundColor,textColor, onPress} = props;
    return(
        <View>
            <TouchableOpacity
                style={{
                    marginTop:14,
                    backgroundColor: backgroundColor,
                    padding: 11,
                    borderRadius: 50,
                    alignItems: 'center',
                }}
                onPress={ () => onPress()}
            >
                <Text style={{color: textColor, fontFamily: Fonts.primarySemiBold}}> {title} </Text>
            </TouchableOpacity>
        </View>
    )
}
export default RoundedButton;
