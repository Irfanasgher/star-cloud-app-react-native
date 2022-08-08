import React, {Component} from 'react';
import {View,Text, ImageBackground, StyleSheet} from 'react-native';
import Languages from '../../common/Languages';
import InputFields from '../../components/inputFields/InputField';
import RoundedButton from '../../components/buttons/RoundedButton';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import {AppContext} from '../../context/AppContext';
import Helpers from '../../utils/Helpers';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


class ForgotPassword extends Component{
    constructor(props) {
        super(props);
        this.state={
            email: null,
            token: null,
            newPassword: null,
            renderTokenUI: false,
        }
    }
    static contextType = AppContext;

    async componentDidMount(){
    }

    async forgotPassword(){
        if(!this.state.email) { Helpers.showToastMessage(`Email Cannot Be Empty`); return}

        let res = await StarAxios.post(Env.createUrl(Routes.forgotPassword),{
            email: this.state.email,
        });
        // console.log('response for email is', res);
        if(res.status === 200){
           this.setState({renderTokenUI: true, email: null})
        }
    }
    async resetPassword(){
        if(!this.state.token) { Helpers.showToastMessage(`Code Cannot Be Empty`); return}
        if(!this.state.newPassword) { Helpers.showToastMessage(`New Password Cannot Be Empty`); return}

        let res = await StarAxios.post(Env.createUrl(Routes.resetPassword),{
            token: this.state.token,
            password: this.state.newPassword,
        });
        console.log('response for reset password is', res);
        if(res.status === 200){
            this.setState({toke: null, newPassword: null})
            this.props.navigation.navigate('Login')
        }
    }

    render(){
        return(
            <ImageBackground source={require('../../images/ForgotPassword/Forget-Password.jpg')} style={{flex: 1, paddingHorizontal:30}}>
              <KeyboardAwareScrollView>
                  <View style={{ marginTop: '35%'}}>
                      {(this.state.renderTokenUI)? null
                      : <View>
                              <Text style={styles.forgotPassword}>{Languages.en.forgot}</Text>
                              <Text style={styles.passwordViaEmail}>{Languages.en.passwordViaEmail}</Text>
                              <View style={{marginTop: '28%'}}>
                                  <InputFields placeholder={'Enter Your Registered Email'} onChangeText={(value)=> this.setState({email: value})}/>
                              </View>
                              <View style={{marginTop: '10%'}}>
                                  <RoundedButton title={'Send Email'}
                                                 backgroundColor={Colors.white}
                                                 textColor={Colors.primary}
                                                 onPress={()=> this.forgotPassword()}
                                  />
                              </View>
                          </View>}
                      {(this.state.renderTokenUI)
                          ? <View>
                              <Text style={styles.forgotPassword}>Reset Password</Text>
                              <View>
                                  <InputFields placeholder={'Enter Token'} onChangeText={(value)=> this.setState({token: value})}/>
                              </View>
                              <View>
                                  <InputFields placeholder={'Enter New Password'} secureTextEntry={true} onChangeText={(value)=> this.setState({newPassword: value})}/>
                              </View>
                              <View style={{marginTop: '10%'}}>
                                  <RoundedButton title={'Change Password'}
                                                 backgroundColor={Colors.white}
                                                 textColor={Colors.primary}
                                                 onPress={()=> this.resetPassword()}
                                  />
                              </View>
                          </View>
                          : null}
                  </View>
              </KeyboardAwareScrollView>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    forgotPassword:{
        color: Colors.white,
        textAlign: 'center',
        fontFamily: Fonts.primary,
        fontSize: 32,
    },
    passwordViaEmail:{
        color: Colors.white,
        textAlign: 'center',
        fontSize: 13,
        marginTop: '9%'
    }
})
export default ForgotPassword
