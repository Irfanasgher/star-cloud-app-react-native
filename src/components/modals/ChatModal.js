import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, Image, StyleSheet} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

class ChatModal extends Component {
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
                           <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                               <Image source={require('../../images/Modal/Delete.png')} style={styles.image}/>
                               <Text style={{color: Colors.primary, fontFamily: Fonts.primary}}>Want to delete?</Text>
                           </View>
                            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 100, marginTop: 20}}>
                                <Text style={{color: Colors.gold, fontFamily: Fonts.primary}}>Yes</Text>
                                <View style={styles.line}></View>
                                <TouchableHighlight
                                    onPress={() => {
                                        this.setModalVisible(!this.state.modalVisible);
                                    }}>
                                    <Text style={{color: 'red', fontFamily: Fonts.primary}}>No</Text>
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
        shadowColor: "#000000",
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.15,
        shadowRadius: 2.84,
        elevation: 5,
        borderRadius: 15,
        width: '90%',
        paddingVertical: 30,
    },
    image:{
        height: 30,
        width: 30,
        // borderRadius: 50,
        marginRight: 10,
        resizeMode: 'contain'
    },
    line:{
        height: 30,
        width: 2,
        backgroundColor: Colors.primary
    }
})
export default ChatModal;
