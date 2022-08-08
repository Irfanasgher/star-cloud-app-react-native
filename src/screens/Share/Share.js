import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Colors from '../../common/Colors';
import FriendList from '../../components/listItems/FriendList';
import SearchBarInputField from '../../components/inputFields/SearchBarInputField';


const DATA = [
    {
        id: '1',
        image:('https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'),
        name: 'Jimmy Nilson'
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




class Share extends Component{
    renderItem( item ) {
        return (
            <View style={{flex: 1}}>
                <FriendList
                    image={item.image}
                    name={item.name}
                    leftButton={'Share'}
                />
            </View>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "75%",
                    marginLeft: '20%',
                    backgroundColor: "#000",
                    marginVertical: 5
                }}
            />
        );
    };

    render(){
        return(
            <View style={styles.mainContainer}>
                <View>
                    <SearchBarInputField />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={DATA}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: '#F3F3F3',
        // paddingTop: 30
    },
    container:{
        backgroundColor: Colors.primary,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
export default Share;
