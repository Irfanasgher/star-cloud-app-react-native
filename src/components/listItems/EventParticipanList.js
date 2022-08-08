import React from 'react';
import {View, FlatList, StyleSheet, Image, Text} from 'react-native';
import MainHeading from '../heading/MainHeading';
import Colors from '../../common/Colors';
import BadgeCard from '../cards/BadgeCard';
import Fonts from '../../common/Fonts';
import EventParticipantCard from '../cards/EventParticipantCard';
import Env from '../../config/Env';

function BadgeCardFunction( item ) {
    console.log(' participant item item is', item);
    return (
        <View style={{flex: 1, alignItems: 'center'}}>
            <EventParticipantCard image={Env.server_url+item.image} participantName={item.firstName} eventName={item.eventName} timeAndLocation={item.timeAndLocation}  />
        </View>
    );
}
class EventParticipantList extends React.Component{
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 12,
                    width: "100%",
                    backgroundColor: "#F3F3F3",
                    marginTop: 10,
                    // shadowColor: "#000000",
                    // shadowOffset: {width: 4, height: 4,},
                    // shadowOpacity: 0.15,
                    // shadowRadius: 3.84,
                    // elevation: 8,
                }}
            />
        );
    };
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => BadgeCardFunction(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        marginTop: 20,

    }
})
export default EventParticipantList;
