import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Colors from '../../common/Colors';
import FriendList from '../../components/listItems/FriendList';
import SearchBarInputField from '../../components/inputFields/SearchBarInputField';
import Env from '../../config/Env';

const DATA = [
    {
        id: '1',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '2',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',

    },
    {
        id: '3',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '4',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '5',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
];

class FriendRequest extends Component{
    friendList( item ) {
        return (
            <View>
                <FriendList
                    id = {item.id}
                    image={item.image}
                    name={item.name}
                    leftButton={'Accept'}
                    leftPress={(id) => this.unFriendUser(id)}
                    rightButton={'Denied'}
                    rightPress={()=> this.blockUser()}
                />
            </View>
        );
    }
    renderSeparator = () => <View style={{height: 1, width: "70%", marginLeft: '20%', backgroundColor: "#000", marginVertical: 5}}/>;

    render(){
        return(
            <View style={styles.mainContainer}>
                <View>
                    {/*<SearchBarInputField />*/}
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={DATA}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.friendList(item)}
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
        flex: 1,
        backgroundColor: Colors.primary,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        marginTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
export default FriendRequest;
