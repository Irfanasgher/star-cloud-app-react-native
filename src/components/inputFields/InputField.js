import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Fonts from '../../common/Fonts';

const InputFields =(props)=> {
    const {placeholder, onChangeText, value, secureTextEntry, keyboardType, numberOfLines, returnKeyType, disable, editable} =props;

    return(
        <View>
            <TextInput
                style={styles.inputStyle}
                onChangeText={onChangeText}
                placeholder={placeholder}
                value={value}
                placeholderTextColor={'white'}
                textAlign={'center'}
                clearTextOnFocus={true}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                numberOfLines={numberOfLines}
                returnKeyType={returnKeyType}
                disable={disable}
                editable={editable}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputStyle: {
        padding: 7,
        borderWidth: 0,
        borderRadius: 50,
        color: 'white',
        // marginTop:14,
        backgroundColor: 'rgba(255,255,255, 0.3)',
        fontFamily: Fonts.primary
    }
})
export default InputFields;
