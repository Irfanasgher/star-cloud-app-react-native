import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBarInputField from '../../components/inputFields/SearchBarInputField';
import ShareWithFriendList from '../../components/listItems/ShareWithFriendList';
import Colors from '../../common/Colors';
import AddFriendList from '../../components/listItems/AddFriendList';


class AddFriend extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <SearchBarInputField />
                </View>
                <View style={styles.listContainer}>
                    <AddFriendList />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.gray
    },
    listContainer:{
        flex: 1,
        backgroundColor: Colors.primary,
        paddingHorizontal: 15,
        paddingTop: 20,
        marginHorizontal: 10,
        overflow: 'hidden',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
export default AddFriend;
