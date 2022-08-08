import React from 'react';
import {View, Image, ImageBackground, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

class Splash extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            timePassed: false,
            timePassed1: false
        };
    }

    componentDidMount() {
        setTimeout(()=>{this.setState({timePassed: true})}, 800);
        setTimeout(()=>{this.setState({timePassed1: true})}, 400);
    }
    render(){
        return(
            <ImageBackground source={require('../../images/Splash/Splash.png')} style={styles.container}>
                {(this.state.timePassed)?
                    <View>
                        <Image source={require('../../images/Splash/Logo.png')} style={styles.logo}/>
                    </View>
                    : null }
                {(this.state.timePassed1)?
                    <View>
                        <Image source={require('../../images/Splash/Stars.png')} style={styles.stars}/>
                    </View>
                    : null }

            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
    },
    logo:{
        position: 'absolute',
        marginTop: '50%',
        marginLeft: '22%',
        width: 200,
        resizeMode: 'contain',
    },
    stars: {
        // position: 'absolute',
        marginLeft: '3%',
        marginTop: '110%',
        width: 250,
        height: 240,

        resizeMode: 'contain',
        // borderWidth: 3,
        // borderColor: 'red'
    }
})
export default Splash;
