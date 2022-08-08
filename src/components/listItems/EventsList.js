import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MainHeading from '../heading/MainHeading';
import EventCard from '../cards/EventCard';
import Colors from '../../common/Colors';
import BadgeCard from '../cards/BadgeCard';
import Env from '../../config/Env';


function EventCardFunction( item, onCardPress) {
    // console.log('Event item is', item);
    let image= Env.server_url+item.image;
    return (
        <TouchableOpacity key={item.id} style={{flex: 1, paddingLeft: 20}} onPress={()=> onCardPress(item.id)}>
            <EventCard image={image} eventName={item.name} timeAndLocation={item.region}/>
        </TouchableOpacity>
    );
}


const EventsList = (props) =>{
    const {data, onPress, onCardPress} = props;
    return(
        <View style={styles.container}>
            <MainHeading seeAll={onPress} name={'Events'} image={require('../../images/Header/EventIcon.png')}/>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => EventCardFunction(item, onCardPress)}
                keyExtractor={item => item.id}
            />

        </View>

    )
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        paddingVertical: 5,
        marginTop: 20,
        shadowColor: "#000000",
        shadowOffset: {width: 4, height: 4,},
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 8,
    }
})
export default EventsList;
