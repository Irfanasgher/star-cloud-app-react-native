import React, {Component} from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import SignUpForm from '../../components/auth/SignUpForm';
import Languages from '../../common/Languages';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
class SignUp extends React.Component{
    render(){
        return(
            <ImageBackground source={require('../../images/SignUp/SignUp.jpg')} style={{flex: 1, }}>
               <KeyboardAwareScrollView>
                   <View style={{marginTop: '10%'}}>
                       <Text style={styles.createAccount}>{Languages.en.createAccount}</Text>
                   </View>
                   <View>
                       <SignUpForm />
                   </View>
                   <View>
                        <Text style={styles.ternAndCondition}>{Languages.en.ternAndCondition}</Text>
                   </View>
               </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    createAccount:{
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
        fontFamily: Fonts.primary
    },
    ternAndCondition:{
        paddingHorizontal: 30,
        fontSize: 13,
        textAlign: 'center',
        color: Colors.white,
        marginTop: '5%'
    }
})
export default SignUp;
