import React, {Component} from 'react';
import {View, StyleSheet, } from 'react-native';
import InputField from '../inputFields/InputField';
import Colors from '../../common/Colors';
import Languages from '../../common/Languages';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import Helpers from '../../utils/Helpers';
import {AppContext} from '../../context/AppContext';
import RoundedButton from '../buttons/RoundedButton';


class LoginForm  extends Component{
    constructor(props) {
        super(props);
        this.state={
            email: '',
            password: ''
        }
    }
    static contextType = AppContext;

    async login(){
        let isEmpty = false;
        if(!this.state.email) { Helpers.showToastMessage(`Email Cannot Be Empty`); isEmpty=true;}
        if(!this.state.password) { Helpers.showToastMessage(`Password Cannot Be Empty`); isEmpty=true;}
        if(isEmpty){
            await this.props.loader();
            return
        }
        let res = await StarAxios.post(Env.createUrl(Routes.login),{
            email: this.state.email,
            password: this.state.password
        });
        console.log('response for login is', res);
        if(res.status === 200){
            await Helpers.login(res.data.token, res.data.user);
            // console.log(res.data.token, res.data.user);
            Helpers.showToastMessage('Login Successful');
            this.props.goToHome()
        }
    }

    render(){
        return(
            <View>
                <View style={styles.input}>
                    <View  style={{marginTop: 10}}>
                         <InputField placeholder={Languages.en.email} onChangeText={(value)=> this.setState({email: value})}/>
                    </View>
                    <View  style={{marginTop: 10}}>
                    <InputField placeholder={Languages.en.password} onChangeText={(value)=> this.setState({password: value})} secureTextEntry={true}/>
                    </View>
                </View>
                <View style={styles.button}>
                    <RoundedButton onPress={()=> this.login()} title={Languages.en.login} backgroundColor={Colors.white} textColor={Colors.primary}/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    input:{
        paddingHorizontal: 30,
        marginTop: '12%'
    },
    button:{
        paddingHorizontal: 30,
        marginTop: '14%'
    }
})
export default LoginForm
