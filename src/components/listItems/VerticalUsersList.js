import React, {Component} from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import UserCard from '../cards/UserCard';

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
    {
        id: '6',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '7',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '8',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '9',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '10',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '11',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    },
    {
        id: '12',
        image:('https://i1.wp.com/www.docker.com/blog/wp-content/uploads/2019/10/Renee-M.jpg?fit=753%2C1024&ssl=1'),
        name: 'Charistina',
    }
];

class VerticalUsersList extends Component{

    renderItem( item ) {
        return (
            <View style={{flex: 1, alignItems:'center', paddingVertical: 20}}>
                <UserCard image={item.image} name={item.name}/>
            </View>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => this.renderItem(item)}
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
export default VerticalUsersList;
