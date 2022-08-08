import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import LoginForm from '../../components/auth/LoginForm';
import Fonts from '../../common/Fonts';
import Languages from '../../common/Languages';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Colors from '../../common/Colors';


class Login extends React.Component{
    render(){
        console.log('Navigation Prop in Screen', this.props.navigation);

        return(
                <ImageBackground source={require('../../images/Login/Login.jpg')} style={{flex: 1}}>
                   <KeyboardAwareScrollView>
                       <Text style={styles.welcome}>{Languages.en.welcome}</Text>
                       <Text style={styles.login}>{Languages.en.loginAccount}</Text>
                       <LoginForm goToHome={()=> this.props.navigation.navigate('Home')} />
                       <TouchableOpacity onPress={()=> this.props.navigation.navigate('ForgotPassword')}>
                           <Text style={styles.forgot}>{Languages.en.forgotPassword}</Text>
                       </TouchableOpacity>
                   </KeyboardAwareScrollView>
                </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    welcome:{
        color: Colors.white,
        fontSize: 36,
        textAlign: 'center',
        marginTop: '30%',
        fontFamily: Fonts.primary
    },
    login:{
        color: Colors.white,
        fontSize: 20,
        textAlign: 'center',
        marginTop: '3%',
        fontFamily: Fonts.primary
    },
    forgot:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        textAlign: 'center',
        marginTop: '10%'

    }
})
export default Login
