import React from 'react';
import {View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import RoundedAvatar from '../roundedAvatar/RoundedAvatar';

const FriendList = (props) =>{
    const {image, name, id, leftButton,leftPress, rightButton,rightPress} = props;
    console.log('id in prop is', id);
    return(
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <View style={{width: '30%'}}>
                    <RoundedAvatar image={image} size={'medium'}/>
                    {/*<Image style={styles.image} source={{uri: image}} />*/}
                </View>
                <View style={{width: '70%'}}>
                    <Text style={styles.heading} numberOfLines={1}>{name}</Text>
                </View>
            </View>
            <View style={styles.buttonMainContainer}>
                {(leftButton)?
                    <TouchableOpacity onPress={()=>leftPress(id)} style={styles.buttonContainer1}>
                        <Text style={styles.button}>{leftButton}</Text>
                    </TouchableOpacity>
                    : null }
                {(rightButton)?
                    <TouchableOpacity onPress={()=>rightPress(id)} style={styles.buttonContainer}>
                        <Text style={styles.button}>{rightButton}</Text>
                    </TouchableOpacity>
                    : null }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowContainer:{
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonMainContainer:{
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    heading:{
        fontFamily: Fonts.primary,
        color: Colors.white
    },
    buttonContainer1:{
        backgroundColor: Colors.pink,
        width: '45%',
        textAlign: 'center',
        paddingHorizontal:8,
        padding:4,
        borderRadius: 50,
        marginRight:5
    },
    buttonContainer:{
        backgroundColor: Colors.orange,
        width: '45%',
        textAlign: 'center',
        paddingHorizontal:8,
        padding:4,
        borderRadius: 50,
        marginRight:5
    },
    button:{
        color: Colors.white,
        fontFamily: Fonts.primarySemiBold,
        fontSize: 8,
        textAlign: 'center',
        padding: 2,
    }
})
export default FriendList
