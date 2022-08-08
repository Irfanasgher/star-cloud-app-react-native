import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import RoundedAvatar from '../roundedAvatar/RoundedAvatar';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import Env from '../../config/Env';

const BadgeCard = (props) =>{
    const {mainImage, roundedImage, price, heading} = props;
    // console.log('Image is', Env.server_url+mainImage);
    return(
        <View style={styles.container}>
            <View>
                <Image style={styles.image} source={{uri:Env.server_url+ mainImage}} />
            </View>
            <View>
                <Text style={styles.heading}>{heading}</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Image style={styles.iconImage} source={require('../../images/Common/Star.png')} />
                <Text style={styles.counter}>{price}</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        // flex: 1,
        alignItems: 'center',
        // marginTop: 20

    },
    image:{
        height: 120,
        width: 120,
        borderRadius: 50,
        resizeMode: 'contain'
    },
    heading:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        marginTop: 10,
        fontSize: 16
    },
    iconImage:{
        height: 20,
        width: 20,
        borderRadius: 50,
        marginRight: 5
    },
    counter:{
        color: Colors.gold,
        fontFamily: Fonts.primary
    }
})
export default BadgeCard;
