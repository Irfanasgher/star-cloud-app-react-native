import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native';
import Colors from '../../common/Colors';
import FriendList from '../../components/listItems/FriendList';
import SearchBarInputField from '../../components/inputFields/SearchBarInputField';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import StarAxios from '../../config/StarAxios';
import Helpers from '../../utils/Helpers';



class Friends extends Component{
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        }
    }

    async componentDidMount(): void {
        let res = await StarAxios.get(Env.createUrl(Routes.friends));
        console.log('res for friends', res);
        if(res.status === 200){
            this.setState({friends: res.data.userDetails.friends})
        }
    }

    unFriendUser = async (id) => {
        await  Alert.alert(
            'Friend',
            'Are you sure you want to unfriend this person',
            [
                {
                    text: 'cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: {
                        color: Colors.primary,
                    },
                },
                {text: 'yes', onPress: async () => {
                        let res = await StarAxios.post(Env.createUrl(Routes.unFriend),{
                            user_id: id
                        });
                        if(res.status === 200){
                            Helpers.showToastMessage('Un Friend Successfully');
                            this.componentDidMount()
                        }
                    }
                }
            ],
            {cancelable: true},
        );

    }

    async blockUser(id){
        await  Alert.alert(
            'Block',
            'Are you sure you want to Block this person',
            [
                {
                    text: 'cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: {
                        color: Colors.primary,
                    },
                },
                {text: 'yes', onPress: async () => {
                        console.log('id for block user is', id);
                        let res = await StarAxios.post(Env.createUrl(Routes.block),{
                            blocked_to: id
                        });
                        console.log('res for block is', res);
                        if(res.status === 200){
                            Helpers.showToastMessage('User has been blocked');
                            this.componentDidMount()
                        }
                    }
                }
            ],
            {cancelable: true},
        );
    }

    friendList( item ) {
       console.log('item is', item);
        return (
            <View>
                <FriendList
                    id = {item.id}
                    image={Env.server_url+item.image}
                    name={item.userName}
                    leftButton={'unfriend'}
                    leftPress={(id) => this.unFriendUser(id)}
                    rightButton={'Block'}
                    rightPress={(id)=> this.blockUser(id)}
                />
            </View>
        );
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "70%",
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
                        data={this.state.friends}
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
export default Friends;
