import React, {Component} from 'react';
import {View,Text,ImageBackground, Image, StyleSheet} from 'react-native';
import { Radio } from 'native-base';
import InputFields from '../../components/inputFields/InputField';
import RoundedButton from '../../components/buttons/RoundedButton';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
class Gender extends Component{
    render(){
        return(
            <ImageBackground source={require('../../images/Gender/Gender.png')} style={{flex: 1}} >
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <InputFields placeholder={'Christina Kennedy'}/>
                        <InputFields placeholder={'1995-11--05'}/>
                    </View>
                    <Text style={styles.chooseYourGender}>Choose your gender</Text>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: '12%'}}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../images/Common/FemaleIcon.png')} style={styles.image}/>
                            <Text style={styles.female}>Female</Text>
                            <Radio color={Colors.white} selectedColor={Colors.white} style={{marginTop:'8%'}}/>
                        </View>
                        <View style={{alignItems: 'center'}}>
                            <Image source={require('../../images/Gender/maleIcon.png')} style={styles.image}/>
                            <Text style={styles.male}>Male</Text>
                            <Radio selected={true} color={Colors.white} selectedColor={Colors.white} style={{marginTop:'8%'}} />
                        </View>
                    </View>
                    <Text style={styles.genderSelectionContent}>Gender selection cannot be reset. Please make sure its correct</Text>
                    <RoundedButton title={'Enjoy'} backgroundColor={Colors.white} textColor={Colors.primary}/>
                </View>
            </ImageBackground>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        padding: 30,
        paddingTop: '30%'
    },
    inputContainer:{
        marginTop: '25%'
    },
    chooseYourGender:{
        color: Colors.white,
        marginTop: '8%',
        fontFamily: Fonts.primary
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
    genderSelectionContent:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        fontSize: 12,
        paddingHorizontal: 35,
        paddingBottom: 10,
        marginTop: '10%',
        textAlign: 'center'
    }

})
export default Gender;
