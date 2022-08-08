import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ChatListItems from './ChatListItems';
import BadgeCard from '../cards/BadgeCard';

function ChatListItemsFunction( item, onPress ) {
    //console.log('chat item is', item);
    return (
        <View key={item.chatId}>
            <ChatListItems onPress={onPress} chatId={item.chatId} title={item.message} name={item.partner} time={item.createdAt} image={item.partnerImage}/>
        </View>
    );
}

const ChatList = (props) =>{
    const {onPress, data} = props;
    return(
        <FlatList
            data={data}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => ChatListItemsFunction(item, onPress)}
            keyExtractor={item => item.id}
        />
    )
}

export default ChatList;
