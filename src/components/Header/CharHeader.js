import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import { Icon } from 'react-native-elements'

const ChatHeader = (props) =>{
    const {name} = props;
    return(
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View>
                    {/*<Image style={styles.image} source={require('../../images/Message/RightArrow.png')} />*/}
                    <Icon name="chevron-left" type={'font-awesome'} color={'white'} size={20} onPress={()=> navigation.goBack()}/>
                </View>
                <View>
                    <Text style={styles.heading}>{name}</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                <TouchableOpacity  onPress={() => alert('Unfriend')}>
                    <Image style={styles.image} source={require('../../images/Message/VideoIcon.png')} />
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => alert('Share')}>
                    <Image style={styles.audioImage} source={require('../../images/Message/AudioIcon.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingVertical: 10,
        zIndex: 111,
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    image:{
        height: 25,
        width: 25,
        resizeMode: 'contain',
        marginRight: 10
    },
    audioImage:{
        height: 20,
        width: 25,
        resizeMode: 'contain',
        marginRight: 10
    },
    heading:{
        marginLeft: 8,
        fontFamily: Fonts.primary,
        color: Colors.white
    },
    buttonContainer:{
        backgroundColor: Colors.gold,
        paddingHorizontal:8,
        padding:2,
        borderRadius: 50,
        marginRight:5
    },
    button:{
        color: Colors.white,
        fontSize: 10
    }
})
export default ChatHeader;
