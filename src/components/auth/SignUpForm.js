import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputField from '../inputFields/InputField';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';
import Languages from '../../common/Languages';
import RoundedButton from '../buttons/RoundedButton';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import Helpers from '../../utils/Helpers';
import StarAxios from '../../config/StarAxios';
import {Radio} from "native-base";
import RadioForm from 'react-native-simple-radio-button';

const gerders = [
    { value: 'Female'},
    { value: 'Male'}

]

class SignUpForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            email: '',
            phone: '',
            dob: '',
            password: '',
            gender: 'male',
            errors: [],
        }
    }
    componentDidMount(){

    }

    renderErrors(){
        if( this.state.errors){
            return this.state.errors.map((error, index) => {
                return (
                    <View style={styles.errorContainer}>
                        <Text key={index} style={styles.errorStyle}> *{error.message.replace(/_/g, ' ')}</Text>
                    </View>
                )
            })
        }
    }

    async signUp(){
        console.log('I am in sign up');
        if(!this.state.userName) { Helpers.showToastMessage(`User Name Cannot Be Empty`); return}
        if(!this.state.email) { Helpers.showToastMessage(`Email Cannot Be Empty`); return }
        if(!this.state.phone) { Helpers.showToastMessage(`Phone Cannot Be Empty`); return }
        if(!this.state.dob) { Helpers.showToastMessage(`Date of Birth Cannot Be Empty`); return }
        if(!this.state.password) { Helpers.showToastMessage(`Password Cannot Be Empty`); return }

        let res = await StarAxios.post(Env.createUrl(Routes.register),{
            user_name: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            phone_number: this.state.phone,
            date_of_birth: this.state.dob,
            gender: this.state.gender,
            type: 'normal_user'
        });
        console.log('res', res);
        if(res.status===200){

        }else{
            this.setState({errors: res.e.response.data.details})
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <View style={{marginTop: 10}}>
                        <InputField placeholder={Languages.en.userName} onChangeText={(value)=> this.setState({userName: value})}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <InputField placeholder={Languages.en.email} onChangeText={(value)=> this.setState({email: value})}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <InputField placeholder={Languages.en.phone} onChangeText={(value)=> this.setState({phone: value})} keyboardType={'numeric'}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <InputField placeholder={Languages.en.dateOfBirth} onChangeText={(value)=> this.setState({dob: value})}/>
                    </View>
                    <View style={{marginTop: 10}}>
                        <InputField placeholder={Languages.en.password} onChangeText={(value)=> this.setState({password: value})}/>
                    </View>

                </View>
                <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: '12%', paddingHorizontal: 30}}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../images/Common/FemaleIcon.png')} style={styles.image}/>
                        <Text style={styles.female}>Female</Text>
                        {/*<Radio color={Colors.white} selectedColor={Colors.white} style={{marginTop:'8%'}}/>*/}
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../images/Common/maleIcon.png')} style={styles.image}/>
                        <Text style={styles.male}>Male</Text>
                        {/*<Radio selected={true} color={Colors.white} selectedColor={Colors.white} style={{marginTop:'8%',}} />*/}
                    </View>
                </View>
                    <RadioForm
                        style={{width: '100%', justifyContent: 'space-between', paddingHorizontal: 45, marginTop: '3%'}}
                        radio_props={gerders}
                        buttonColor={Colors.white}
                        labelColor={Colors.white}
                        buttonInnerColor={Colors.white}
                        onPress={(value) => alert(value)}
                        buttonSize={10}
                        formHorizontal={true}
                        selectedButtonColor={Colors.white}
                    />
                {(this.state.errors.length > 0)? this.renderErrors(): null}
                <View style={styles.button}>
                    <RoundedButton onPress={()=> this.signUp()} title={Languages.en.signUp} backgroundColor={Colors.primary} textColor={Colors.white}/>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
      paddingHorizontal: 30
    },
    inputContainer:{
        marginTop: '1%',
        justifyContent: 'space-between'

    },
    button:{
        marginTop: 20,
        // position: 'relative',
        // top: 180,
    },
    image:{
        resizeMode: 'contain',
        height: 60,
        width: 60
    },
    female:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginTop: '10%'
    },
    male:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginTop: '10%',
        marginLeft: '-10%'
    },
    errorContainer:{
        marginTop: 10
    },
    errorStyle:{
        color: 'tomato',
        fontFamily: Fonts.primary,
        fontSize: 12
    }
})

export default SignUpForm;
