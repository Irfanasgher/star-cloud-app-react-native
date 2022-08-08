import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,Image, StyleSheet} from 'react-native';
import RectangalIconButton from '../buttons/RectangalIconButton';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import RadioForm from 'react-native-simple-radio-button';


const gerders = [
    { value: 'Both'},
    { value: 'Female'},
    { value: 'Male'}
]

class GenderModal extends Component {

    render() {
        return (
            <View>
                <Modal
                    animationType={'slide'}
                    transparent={true}
                    visible={this.props.visible}
                    >
                    <View style={styles.container}>
                        <View style={styles.modalContainer}>
                            <View style={styles.header}>
                                <Image source={require('../../images/Modal/Gender.png')} style={styles.image}/>
                                <Text style={styles.heading}>Gender prefences</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <RadioForm
                                    style={styles.genderStyling}
                                    radio_props={gerders}
                                    buttonColor={Colors.primary}
                                    labelColor={Colors.primary}
                                    buttonInnerColor={Colors.primary}
                                    onPress={(value) => alert(value)}
                                    buttonSize={10}
                                    selectedButtonColor={Colors.primary}
                                    selectedLabelColor={Colors.primary}
                                />
                                <View>
                                    <View style={styles.modalBody}>
                                        <Image source={require('../../images/Common/maleIcon.png')} style={styles.modalImage}/>
                                        <Text style={styles.modalText}>Both</Text>
                                    </View>
                                    <View style={styles.modalBody}>
                                        <Image source={require('../../images/Common/FemaleIcon.png')} style={styles.modalImage}/>
                                        <Text style={styles.modalLeftText}>Female</Text>
                                    </View>
                                    <View style={styles.modalBody}>
                                        <Image source={require('../../images/Common/maleIcon.png')} style={styles.modalImage}/>
                                        <Text style={styles.modalText}>Male</Text>
                                    </View>
                                </View>

                            </View>
                            <TouchableHighlight
                                onPress={() => this.props.toggle()}>
                                <Text style={styles.ok}> OK </Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                {/*<TouchableHighlight*/}
                {/*    onPress={() => {*/}
                {/*        this.setModalVisible(true);*/}
                {/*    }}>*/}
                {/*    <Text style={styles.showModal}>Show Modal</Text>*/}
                {/*</TouchableHighlight>*/}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    modalContainer:{
        backgroundColor: '#F3F3F3',
        shadowColor: "#000000",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2.84,
        elevation: 5,
        borderRadius: 15,
        width: '90%',
        paddingBottom: 15,
        overflow: 'hidden',
    },
    header:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 12
    },
    heading:{
        color: Colors.white,
        fontFamily: Fonts.primary
    },
    genderStyling:{
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 30,
        height: 130
    },
    modalBody:{
        flexDirection: 'row',
        width: 100,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 20,
        marginLeft: 10
    },
    modalImage:{
        width: 30,
        height: 30,
        resizeMode: 'contain'
    },
    modalText:{
        marginTop: 7,
        color:Colors.primary,
        fontFamily: Fonts.primary
    },
    modalLeftText:{
        marginTop: 7,
        color:Colors.primary,
        fontFamily: Fonts.primary,
        marginLeft: 38
    },
    ok:{
        marginTop: 40,
        textAlign: 'center',
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingTop: 15,
        color: Colors.primary,
        fontFamily: Fonts.primary
    },
    showModal:{
        marginTop: 20,
        textAlign: 'center'
    },
    image:{
        height: 30,
        width: 30,
        // borderRadius: 50,
        marginRight: 10,
        resizeMode: 'contain'
    },
})
export default GenderModal;
