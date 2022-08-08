import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ChatListItems from './ChatListItems';
import RoundedAvatar from '../roundedAvatar/RoundedAvatar';
import Colors from '../../common/Colors';
import BadgeCard from '../cards/BadgeCard';

const DATA = [
    {
        id: '1',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '2',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '3',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan3'
    },
    {
        id: '4',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '5',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '6',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '7',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '8',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '9',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '10',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '11',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan'
    },
    {
        id: '12',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Slaman Khan12'

    }
];

function RoundedAvatarFunction( item ) {
    return (
        <View key={item.id} style={{flex: 1, paddingLeft: 11}}>
            <RoundedAvatar image={item.image} size={'medium'} isBadge={true} name={item.name}/>
        </View>
    );
}

const OnlineUsersList = (props) =>{
    return(
        <View style={{paddingLeft: 10 }}>
        <FlatList
            data={DATA}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => RoundedAvatarFunction(item)}
            keyExtractor={item => item.id}
        />
        </View>
    )
}

export default OnlineUsersList;
