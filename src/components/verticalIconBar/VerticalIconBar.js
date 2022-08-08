import React, {Component} from 'react';
import {Image, View, StyleSheet, TouchableOpacity} from 'react-native';
import GenderModal from '../modals/GenderModal';
import CountryModal from '../modals/CountryModal';
import HistoryCardModal from '../modals/HistoryCardModal';
class VerticalIconBar extends Component{
    constructor(props) {
        super(props);
        this.state={
            genderModalVisible: false,
            countryModalVisible: false,
            historyModalVisible: false
        }
    }

    toggleGenderModal(){
        this.setState({genderModalVisible: !this.state.genderModalVisible})
    }
    toggleCountryModal(){
        this.setState({countryModalVisible: !this.state.countryModalVisible})
    }
    toggleHistoryModal(){
        this.setState({historyModalVisible: !this.state.historyModalVisible})
    }
    render(){
    return(
        <View style={styles.container}>
            <View style={{width: 100}}>
                <TouchableOpacity onPress={ () =>alert('Works')} style={{alignItems: 'flex-start', margin: 5}} >
                    <Image source={require('../../images/StreamHeader/SpeakerImage.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>alert('Works')} style={{alignItems: 'flex-start', margin: 5}}>
                    <Image source={require('../../images/StreamHeader/Camera.png')} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View style={{width: 100}}>
                <TouchableOpacity onPress={ () => this.toggleGenderModal()} style={{alignItems: 'flex-start', margin: 5}}>
                    <Image source={require('../../images/StreamHeader/genderImage.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>this.toggleHistoryModal()} style={{alignItems: 'flex-start', margin: 5}}>
                    <Image source={require('../../images/StreamHeader/historyImage.png')} style={styles.image}/>
                </TouchableOpacity>
            </View>
            <View style={{width: 100}}>
                <TouchableOpacity onPress={ () =>alert('Works')} style={{alignItems: 'flex-start', margin: 5}}>
                    <Image source={require('../../images/StreamHeader/ShoppingBag.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>this.toggleCountryModal()} style={{alignItems: 'flex-start', margin: 5}}>
                    <Image source={require('../../images/StreamHeader/location.png')} style={styles.image}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={ () =>alert('Works')} style={{alignItems: 'flex-start', margin: 5}}>
                    <Image source={require('../../images/StreamHeader/Regional.png')} style={styles.image}/>
                </TouchableOpacity>
                <GenderModal visible={this.state.genderModalVisible} toggle={()=> this.toggleGenderModal()} />
                <CountryModal visible={this.state.countryModalVisible} toggle={() =>this.toggleCountryModal()} />
                <HistoryCardModal visible={this.state.historyModalVisible} toggle={() => this.toggleHistoryModal()} />
            </View>

        </View>
    )}
}
const styles = StyleSheet.create({
    container:{
        height: '100%',
        justifyContent: 'space-between',
    },
    image:{
        resizeMode:'contain',
        marginTop: 10,
        height: 30,
        width: 30,

    }
})
export default VerticalIconBar;
