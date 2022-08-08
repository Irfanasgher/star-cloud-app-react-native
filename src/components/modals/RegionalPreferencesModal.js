import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Image, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

class RegionalPreferencesModal extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                        <View style={styles.modalContainer}>
                            <View style={styles.regionalContainer }>
                                <Image source={require('../../images/Modal/Regional.png')} style={styles.image}/>
                                <Text style={styles.regionalHeading}>Regional Preferences</Text>
                            </View>
                            <View style={styles.getHeadingContainer}>
                                <Text style={styles.getHeading}>
                                    Get <Text style={styles.unlimited}>Unlimited</Text>
                                </Text>
                                <Text style={styles.regionalHeadingPreferences}>Regional Preferences</Text>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={styles.ok}>OK</Text>
                                </TouchableHighlight>

                            </View>

                        </View>
                    </View>
                </Modal>

                <TouchableHighlight
                    onPress={() => {
                        this.setModalVisible(true);
                    }}>
                    <Text>Show Modal</Text>
                </TouchableHighlight>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{

    },
    modalContainer:{
        borderRadius: 15,
        width: '80%',
        overflow: 'hidden',
        paddingBottom: 30,
        borderWidth: 1
    },
    regionalContainer:{
        shadowColor: Colors.primary,
        shadowOffset: {width: 2, height: 4},
        shadowOpacity: 0.35,
        shadowRadius: 2.84,
        elevation: 25,
        alignItems: 'center',
        backgroundColor: Colors.primary,
        width: '100%',
        padding: 30
    },
    regionalHeading:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginTop: 10
    },
    image:{
        height: 50,
        width: 50,
        resizeMode: 'contain'
    },
    getHeadingContainer:{
        alignItems: 'center',
        padding: 30,
        marginTop: 20
    },
    getHeading:{
        color: Colors.primary,
        fontFamily: Fonts.primary
    },
    unlimited:{
        color: Colors.gold,
        fontFamily: Fonts.primary,
        fontSize: 30,
    },
    regionalHeadingPreferences:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        marginTop: 5
    },
    ok:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        marginTop: 30
    }
})
export default RegionalPreferencesModal;
