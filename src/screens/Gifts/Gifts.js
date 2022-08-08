import React, {Component} from 'react';
import {View} from 'react-native';
import VerticalGiftsList from '../../components/listItems/VerticalGiftsList';

class Gifts extends Component{

    render(){
        return(
            <View >
                <VerticalGiftsList />
            </View>
        )
    }
}

export default Gifts;
