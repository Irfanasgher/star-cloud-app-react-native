import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native';
import StreamHeader from '../../components/streamHeader/StreamHeader';
import Colors from '../../common/Colors';

class Call extends Component{
    render(){
        return(
            <ImageBackground source={require('../../images/Call/Call.png')} style={{flex: 1}} >
                <View style={styles.container}>
                    <StreamHeader
                        image={'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}
                        name={'Cheristina Kannedy'}
                        subTitle={'Send a message'}
                        titleColor={Colors.gold}
                        backgroundImage={require('../../images/Call/btn_follow.png')}
                    />
                    <View style={styles.imageContainer}>
                        <TouchableOpacity onPress={ () => alert('Works')}>
                            <Image source={{uri: 'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => alert('Works')}>
                            <Image source={{uri: 'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}} style={styles.image}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ () => alert('Works')}>
                            <Image source={{uri: 'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}} style={styles.image}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '25%',
        padding: 30,
        backgroundColor: Colors.primary,
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30
    },
    imageContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 70,
        paddingTop: 15
    },
    image: {
        height: 35,
        width: 35,
        borderRadius: 50,
    }
})
export default Call;
