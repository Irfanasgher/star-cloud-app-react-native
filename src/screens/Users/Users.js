import React, {Component} from 'react';
import {View} from 'react-native';
import VerticalUsersList from '../../components/listItems/VerticalUsersList';



class Users extends Component{
    render(){
        return(
            <View>
                <VerticalUsersList />
            </View>
        )
    }
}
export default Users;
