import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import {Left, List, ListItem, Right} from 'native-base';
const DATA = [
    {
        id:1,
        heading: 'Simon Mignolet kkjfksajf mkjfksdjdf kfjkdjg bjksfja kajfkda ',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:2,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:3,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:4,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:5,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:6,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:7,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:8,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:9,
        heading: 'Simon Mignolet',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    },
    {
        id:10,
        heading: 'Simon Mignolet12',
        image: 'https://i.pinimg.com/originals/58/ed/a8/58eda88c4af9004b3886bf3ea03ddf3d.jpg'
    }
]
class AddFriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            changeButton: false
        }
    }
    typeSelected = () => {
        this.setState({
            changeButton: !this.state.changeButton
        });
    }
    renderList(item) {
        return (
            <View style={styles.container}>
                <View style={{flex: 0.15}}>
                    <Image
                        source={{uri: item.image}}
                        style={styles.leftImage}/>
                </View>
                <View style={{flex: 0.60}}>
                    <Text style={styles.heading} numberOfLines={1} ellipsizeMode={'tail'}>{item.heading}</Text>
                </View>
                <TouchableOpacity onPress={this.typeSelected} style={{flex: 0.25, alignItems: 'flex-end'}}>
                    {(this.state.changeButton)
                        ? <View style={styles.sentButton}>
                            <Text style={styles.buttonText}>Sent</Text>
                        </View>
                        : <View style={styles.addButton}>
                            <Text style={styles.buttonText}>Add</Text>
                        </View>
                    }
                </TouchableOpacity>
            </View>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "80%",
                    marginLeft: '19%',
                    backgroundColor: Colors.black,
                    marginVertical: 10,
                }}
            />
        );
    };


    render() {
        return (
            <View style={{backgroundColor: Colors.primary, paddingBottom: 35}}>
                <View>
                    <Text style={styles.requestHeading}>Friend Request</Text>
                </View>
                <FlatList
                    data={DATA}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    renderItem={({item}) => this.renderList(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
    },
    requestHeading:{
        color: Colors.gold,
        fontFamily: Fonts.primary,
        paddingBottom: 5,
    },
    heading:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginLeft: 10,
        width: '88%'
    },
    leftImage:{
        height: 50,
        width: 50,
        borderRadius: 50
    },
    sentButton:{
        backgroundColor: Colors.gold,
        padding: 8,
        paddingHorizontal: 20,
        borderRadius: 50,
    },
    addButton:{
        backgroundColor: Colors.black,
        padding: 8,
        paddingHorizontal: 20,
        borderRadius: 50

    },
    buttonText:{
        fontFamily: Fonts.primary,
        color: Colors.white,
    }
})
export default AddFriendList;
