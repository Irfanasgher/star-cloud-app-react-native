import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert,Image, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import RadioForm from 'react-native-simple-radio-button';


const gerders = [
    { value: 'Balanced', label: 'Balanced'},
    { value: 'Swizerland', label: 'Swizerland'},
    { value: 'Global', label: 'Global'},
    { value: 'Thailand', label: 'Thailand'},
    { value: 'Indonesia', label: 'Indonesia'},
    { value: 'Pakistan', label: 'Pakistan'},
    { value: 'USA', label: 'USA'},
]

class CountryModal extends Component {
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
                            <View style={styles.firstSection}>
                                <Image source={require('../../images/Common/location.png')} style={styles.image}/>
                                <Text style={styles.firstSectionHeading}>Regional Preferences</Text>
                            </View>
                            <View style={{flexDirection: 'row',}}>
                                <RadioForm
                                    style={styles.radioForm}
                                    radio_props={gerders}
                                    buttonColor={Colors.primary}
                                    labelColor={Colors.primary}
                                    buttonInnerColor={Colors.primary}
                                    onPress={(value) => alert(value)}
                                    buttonSize={8}
                                    selectedButtonColor={Colors.primary}
                                    selectedLabelColor={Colors.primary}
                                    labelStyle={{marginLeft: 45, textAlign: 'center'}}
                                />
                                <View>
                                    <View style={styles.freeTextContainer}>
                                        <Text style={styles.free}>Free</Text>
                                    </View>
                                    <View style={styles.freeTextContainer}>
                                        <Text style={styles.free}>Free</Text>
                                    </View>
                                </View>
                            </View>
                            <TouchableHighlight
                                onPress={() => {this.props.toggle()}}>
                                <Text style={styles.ok}>OK</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>

                {/*<TouchableHighlight*/}
                {/*    onPress={() => {*/}
                {/*        this.setModalVisible(true);*/}
                {/*    }}>*/}
                {/*    <Text style={{marginTop: 20, textAlign: 'center'}}>Show Modal</Text>*/}
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
        width: '80%',
        paddingBottom: 15,
        overflow: 'hidden',
    },
    firstSection:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.primary,
        padding: 12
    },
    firstSectionHeading:{
        color: Colors.white,
        fontFamily: Fonts.primary
    },
    image:{
        height: 30,
        width: 25,
        marginRight: 10,
        resizeMode: 'contain'
    },
    radioForm:{
        justifyContent: 'space-between',
        marginTop: 30,
        marginLeft: 30,
        height: 200
    },
    freeTextContainer:{
        flexDirection: 'row',
        width: 150,
        justifyContent:'space-between',
        alignItems:'center',
        marginTop: 25,
        marginLeft: 30
    },
    free:{
        marginTop: 7,
        color:Colors.gold,
        fontFamily: Fonts.primary
    },
    ok:{
        textAlign: 'center',
        borderTopWidth: 1,
        borderColor: 'gray',
        paddingTop: 15,
        color: Colors.primary,
        fontFamily: Fonts.primary
    }
})
export default CountryModal;
