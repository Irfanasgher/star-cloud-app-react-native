import React from 'react';
import {View, Text, StyleSheet, ImageBackground } from 'react-native';
import Colors from '../../common/Colors';


const SendMessage = (props) => {
    const {message, backColor, borderLeftRadius, borderRightRadius, textColor} = props;
    return(
        <View style={{
            backgroundColor: backColor,
            width: '80%',
            margin: 10,
            padding: 20,
            borderTopRightRadius: borderRightRadius,
            borderTopLeftRadius: borderLeftRadius,
            borderRadius: 15,
            position: 'relative'
        }}>
            <Text style={{color: textColor}}>{message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F54B64',
        width: '80%',
        margin: 10,
        padding: 20,
        borderTopRightRadius: 0,
        borderRadius: 15,
        position: 'relative'
    }
})


// const SendMessage = (props) => {
//     return(
//         <ImageBackground source={require('../../images/Chat/Background.png')} style={{flex: 1}} borderRadius={22} borderTopRightRadius={0}>
//             <View>
//                 <Text style={{padding: 20, color: Colors.white}}>Jimmy Nilson send you friend request, Jimmy Nilson send you friend request, this is a simple receive message component</Text>
//             </View>
//         </ImageBackground>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,
//         alignItems: 'flex-end',
//         borderWidth: 2,
//         width: '90%',
//         overflow: 'hidden',
//         borderTopRightRadius: 0,
//         borderRadius: 15,
//
//     }
// })
export default SendMessage;
