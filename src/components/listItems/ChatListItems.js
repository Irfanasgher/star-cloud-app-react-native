import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import RoundedAvatar from '../roundedAvatar/RoundedAvatar';
import Env from '../../config/Env';
import moment from 'moment';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
const ChatListItems = (props) =>{
    const {name, title, image, time, onPress, chatId} = props;
    return(
        <View style={styles.container} >
            <TouchableOpacity onPress={()=> onPress(chatId)} style={{flex:1.5}}>
                <RoundedAvatar size={'medium'} image={Env.server_url+image}/>
                {/*<Image source={{uri: Env.server_url+image}} style={styles.mainImage}/>*/}
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> onPress(chatId)} style={{flex:4}} >
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode={'tail'}>{title}</Text>
            </TouchableOpacity>
            <View style={{flex: 1.5}}>
                <Text style={{color: Colors.gold}}>{moment(time).format('LT')}</Text>
                <View style={styles.imageContainer}>
                    <TouchableOpacity>
                        <Image source={require('../../images/Message/VideoIcon.png')} style={styles.image}/>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../images/Message/AudioIcon.png')} style={styles.image}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,flexDirection: 'row',
        justifyContent:'space-around',
        alignItems:'center'
    },
    name:{
        color: Colors.white,
        fontSize: 16,
        fontFamily: Fonts.primary
    },
    title:{
        color: Colors.white,
        fontSize: 14,
        fontFamily: Fonts.primary
    },
    imageContainer:{
        flexDirection: 'row',
        marginTop: 5
    },
    mainImage:{
        height: 50,
        width: 50,
        borderRadius: 50,
        marginTop: 10
    },
    image:{
        height: 18,
        width: 18,
        resizeMode: 'contain',
        marginLeft:10
    }
})
export default ChatListItems;
