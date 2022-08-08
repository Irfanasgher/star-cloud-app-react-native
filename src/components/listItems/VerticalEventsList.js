import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import EventCard from '../cards/EventCard';
import Env from '../../config/Env';

const DATA = [
    {
        id: '1',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '2',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '3',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '4',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '5',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '6',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '7',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '8',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '9',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
    {
        id: '10',
        image:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQJaWMOvBiWXa72ZHLRPTppVZaBf_4oL6go7EW4S3KJY64WO0ag'),
        eventName: 'Live - on the radio',
        timeAndLocation: '10:30 | Freedom Trail'
    },
];

class VerticalEventsList extends Component{

    EventCardFunction( item ) {
        console.log('item is', item);
        let image = Env.server_url+item.image;
        return (
            <TouchableOpacity style={{flex: 1, alignItems:'center', marginTop: 20}} onPress={()=>this.props.onPress(item.id)}>
                <EventCard image={image} eventName={item.name} timeAndLocation={item.region}/>
            </TouchableOpacity>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => this.EventCardFunction(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#F3F3F3',

    }
})
export default VerticalEventsList;
