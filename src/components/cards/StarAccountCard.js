import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import StreamHeader from '../streamHeader/StreamHeader';
import Colors from '../../common/Colors';

const StarAccountCard = (props) =>{
    const {mainImage, roundedImage, name, subName, padding} = props;
    return(
        <View style={styles.container}>
            <View style={{flex: 0.86}}>
                <Image style={styles.image} source={{uri: mainImage}} />
            </View>
            <View style={{marginTop: 15, marginLeft: 10, flex: 0.14}}>
                <StreamHeader name={name} nameColor={Colors.primary} subTitle={'United States'} titleColor={Colors.primary} image={roundedImage}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop: 5,
    },
    image:{
        height: '100%',
        width: '100%',
        borderRadius: 10,
    },

})
export default StarAccountCard;
