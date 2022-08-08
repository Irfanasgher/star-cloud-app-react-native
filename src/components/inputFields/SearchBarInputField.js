import React from 'react';
import {View,Text,StyleSheet, TextInput} from 'react-native';
import Colors from '../../common/Colors';
import { SearchBar } from 'react-native-elements';
class SearchBarInputField extends React.Component{
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    render(){
        const { search } = this.state;

    return(

        <View style={styles.container}>
            <SearchBar
            placeholder="Search"
            placeholderTextColor={Colors.primary}
            onChangeText={this.updateSearch}
            value={search}
            textAlign={'center'}
            containerStyle={{backgroundColor: '#F3F3F3', borderBottomWidth: 0, borderTopWidth: 0, marginTop: '3%', marginBottom: '3%'}}
            inputStyle={{color: Colors.primary, fontSize: 14}}
            inputContainerStyle={{backgroundColor: Colors.white, height: 40, marginHorizontal: 25, borderRadius: 10,}}
            searchIcon={{size: 23}}
            />
        </View>
    )}
}
const styles = StyleSheet.create({
    container:{

    }
})
export default SearchBarInputField;
