import React, {Component} from 'react';
import {Text, ImageBackground, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Languages from '../../common/Languages';
import RoundedButton from '../../components/buttons/RoundedButton';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
class AuthOptions extends React.Component{
    render(){
        return(
            <ImageBackground source={require('../../images/AuthOptions/AuthOptions.jpg')} style={{flex: 1}}>
                <View style={styles.container}>
                    <Text style={styles.find}>{Languages.en.findFriends}</Text>
                    <Text style={styles.user}>{Languages.en.milionsOfUsers}</Text>
                    <View style={styles.buttons}>
                        <RoundedButton title={Languages.en.login} backgroundColor={Colors.white}
                                       textColor={Colors.primary}
                                       onPress={()=> this.props.navigation.navigate('Login')}
                        />
                        <RoundedButton title={Languages.en.signUp} backgroundColor={Colors.primary}
                                       textColor={Colors.white}
                                       onPress={()=> this.props.navigation.navigate('SignUp')}
                        />
                    </View>
                    <Text style={styles.or}>{Languages.en.or}</Text>
                    <Text style={styles.loginWith}>{Languages.en.loginWith}</Text>
                    <View style={styles.icons}>
                        <Icon name="facebook" color={'white'} size={20} s/>
                        <Icon name="google-plus" color={'white'} size={20} style={{marginLeft: '10%'}}/>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        paddingHorizontal: 30,
        marginTop: '50%'
    },
    find:{
        textAlign: 'center',
        color: Colors.white,
        fontFamily: Fonts.primary,
        fontSize: 35
    },
    user: {
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginTop: '6%'
    },
    buttons:{
        marginTop: '20%'
    },
    or:{
        textAlign: 'center',
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginTop: '7%'
    },
    loginWith:{
        textAlign: 'center',
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginTop: '2%'
    },
    icons:{
        flexDirection: 'row',
        justifyContent: 'center',
        // alignItems: 'center',
        marginTop: '10%'
    }
})
export default AuthOptions;
