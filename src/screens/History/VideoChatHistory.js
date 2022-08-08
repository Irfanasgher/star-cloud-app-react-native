import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import HistoryCard from '../../components/cards/HistoryCard';

class VideoChatHistory extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 0.75, width: '80%', justifyContent: 'space-between'}}>
                    <HistoryCard />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F3F3',
    }
})
export default VideoChatHistory;
