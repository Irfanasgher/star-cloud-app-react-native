import React, {Component} from 'react';
import {View,Text, StyleSheet, FlatList} from 'react-native';
import RoundedAvatar from '../../components/roundedAvatar/RoundedAvatar';
import Colors from '../../common/Colors';
import ChatList from '../../components/listItems/ChatList';
import Fonts from '../../common/Fonts';
import OnlineUsersList from '../../components/listItems/OnlineUserList';
import SearchBarInputField from '../../components/inputFields/SearchBarInputField';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';



class Messages extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chats: []
        }
    }

    async componentDidMount(): void {
        let res = await StarAxios.get(Env.createUrl(Routes.chats))
        console.log('res for chats is', res);
        if(res.status === 200){
            this.setState({chats: res.data.chats});
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{flex: 0.15}}>
                    <SearchBarInputField/>
                </View>
                {/*<Text style={styles.mainHeading}>Message</Text>*/}
                <View style={styles.badgeContainer}>
                    <View>
                        <OnlineUsersList/>
                    </View>
                    <View style={{marginTop: 10, paddingHorizontal: 15}}>
                        <ChatList data={this.state.chats} onPress={(chatId)=> this.props.navigation.navigate('Chat', {chatId})}/>
                    </View>

                </View>
                {/*<View style={{backgroundColor: Colors.primary, marginHorizontal: 10, padding:5}}>*/}

                {/*</View>*/}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F3F3F3',
        flex: 1
    },
    mainHeading:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        paddingHorizontal: 30,
        fontSize: 18,
        marginVertical: '5%'
    },
    badgeContainer:{
        flex: 0.85,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        marginHorizontal:10,
        paddingTop: 10,
        // paddingHorizontal: 20,
    }
});
export default Messages;
