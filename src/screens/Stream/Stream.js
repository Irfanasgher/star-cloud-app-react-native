import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground} from 'react-native';
import Colors from '../../common/Colors';
import StreamHeader from '../../components/streamHeader/StreamHeader';
import VerticalIconBar from '../../components/verticalIconBar/VerticalIconBar';
import BottomThumbUp from '../../components/thumbs/BottomThumbUp';

class Stream extends React.Component{
    state = {
        showThumb: false,
        imageChange: true
    };
    ShowThumbWithDelay(){
        this.setState({showThumb: true, imageChange: false});
        setTimeout(()=>{this.setState({showThumb: false, imageChange: true})}, 800);
      }
    render(){
        return(
            <ImageBackground source={require('../../images/StreamHeader/actor.png')} style={{flex: 1}}>
                {(this.state.showThumb)?
                    <View style={{position: 'absolute', top: 170, left: 100}}>
                        <Image style={{height: 200, width: 200, resizeMode: 'contain'}} source={require('../../images/StreamHeader/thumbsup.png')} />
                    </View>
                    : null}
                <View style={styles.streamHeader}>
                    <StreamHeader
                        image={'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}
                        name={'Cheristina Kannedy'}
                        nameColor={Colors.white}
                        subTitle={'Send a message'}
                        titleColor={Colors.white}
                        titleImage={'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}
                        sidebarImage={require('../../images/StreamHeader/AddUser.png')}

                    />
                </View>
                <View style={styles.verticalIcon}>
                    <View style={{marginTop: 10}}>
                        <VerticalIconBar/>
                    </View>
                </View>
                <TouchableOpacity style={styles.imageContainer}>
                    <Image source={require('../../images/StreamHeader/HandImage.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.backgroundWhiteContainer}>
                    <View style={styles.backgroundWhiteImage}>
                    </View>
                    <Text style={{color: Colors.white, textAlign:'center'}}>05:00:06</Text>
                </TouchableOpacity>
                <View style={{position: 'absolute', width: '100%',alignItems: 'center', bottom: 0}} >
                    <TouchableOpacity onPress={()=>this.ShowThumbWithDelay()}>
                        {(this.state.imageChange) ?
                            <BottomThumbUp image={require('../../images/StreamHeader/thumbsup.png')}/>
                            : <BottomThumbUp image={require('../../images/StreamHeader/thumb.png')}/>
                        }
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.orange,
        flex: 1,
    },
    streamHeader: {
        position: 'absolute',
        top: '3%',
        paddingHorizontal: '5%',
        width: '100%',
    },
    verticalIcon:{
        position: 'absolute',
        top: '10%',
        paddingHorizontal: '10%',
        height: '80%'
    },
    imageContainer: {
        position: 'absolute',
        right: '5%',
        top: '45%',
    },
    image:{
        resizeMode:'contain',
        height: 50,
        width: 50,
    },
    backgroundWhiteContainer:{
        position: 'absolute',
        height: '25%',
        width: '30%',
        bottom: '2.5%',
        right: '3%'
    },
    backgroundWhiteImage: {
        backgroundColor: Colors.white,
        borderRadius: 5,
        height: '90%',
        width: '100%',
    }
})
export default Stream;
