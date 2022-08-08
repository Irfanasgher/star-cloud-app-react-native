import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert, StyleSheet} from 'react-native';
import RectangalIconButton from '../buttons/RectangalIconButton';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';

class HistoryCardModal extends Component {
    // state = {
    //     modalVisible: false,
    // };
    //
    // setModalVisible(visible) {
    //     this.setState({modalVisible: visible});
    // }

    render() {
        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.props.visible}
                    >
                    <View style={styles.container}>
                        <View style={styles.modalContainer}>
                            <RectangalIconButton  title={'Add as a friend'} image={require('../../images/Modal/AddFriend.png')}/>
                            <RectangalIconButton  title={'Report'} image={require('../../images/Modal/Report.png')} />
                            <RectangalIconButton  title={'Block user'} image={require('../../images/Modal/Block.png')} />

                            <TouchableHighlight
                                onPress={() => {this.props.toggle()}}
                            >
                                <Text style={styles.ok}>Ok</Text>
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
        width: '90%',
        paddingTop: 30,
        paddingBottom: 15,
    },
    ok:{
        textAlign: 'center',
        borderTopWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        paddingTop: 15,
        color: Colors.primary,
        fontFamily: Fonts.primary
    }
})
export default HistoryCardModal;
