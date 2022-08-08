import React, {Component} from 'react';
import {View, Text, Image, StyleSheet,} from 'react-native';


const BottomThumbUp = (props) =>{
    const {image} = props;
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer} >
                <Image
                    source={image}
                    style={styles.image}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        overflow: 'hidden',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '30%',

    },
    imageContainer:{
        borderTopLeftRadius: 80,
        borderTopRightRadius: 80,
        paddingHorizontal: 13,
        paddingTop: 7,
        paddingBottom: 5,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    image:{
        height: 40,
        width: 60,
        resizeMode: 'contain'
    }
})
export default BottomThumbUp;
