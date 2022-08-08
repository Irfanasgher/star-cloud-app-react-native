
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MainHeading from '../heading/MainHeading';
import Colors from '../../common/Colors';
import UserCard from '../cards/UserCard';
import Env from '../../config/Env';
import StarAxios from '../../config/StarAxios';
import Routes from '../../config/Routes';
import Helpers from '../../utils/Helpers';
import {AppContext} from '../../context/AppContext';




class UsersList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    static contextType = AppContext;

   async sendFriendRequest(id){
       console.log('i am in send request user id is', id);
        let res = await StarAxios.post(Env.createUrl(Routes.sendRequest),{
            receiver_id: id
        })
       console.log('res for send request uis', res);
        if(res.status === 200){
            Helpers.showToastMessage('Friend Request Sent Successfully')
            this.context.state.ws.send(JSON.stringify({
                sender_id: this.context.state.user.id,
                sender_name: this.context.state.user.firstName,
                receiver_id: id,
                type: 'notification',
            }));
        }

    }

    renderItem( item) {
        // console.log('user is here', item);
        return (
            <View key={item.id} style={{flex:1,paddingLeft: 20, paddingBottom: 5}} >
                <UserCard onPress={(id)=> this.sendFriendRequest(id)} id={item.id} image={Env.server_url+item.image} name={`${item.firstName} ${item.lastName}`} />
            </View>
        );
    }
  render() {
      const {data,onPress, onCardPress } = this.props;
    return(
        <View style={styles.container}>
            <MainHeading seeAll={onPress} name={'Users'} image={require('../../images/Header/EventIcon.png')}/>
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => this.renderItem(item)}
                keyExtractor={item => item.id}
            />
        </View>

    )
}
};
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        paddingVertical: 5,
        marginTop: 20,
        shadowColor: "#000000",
        shadowOffset: {width: 4, height: 4,},
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 8,
    }
})
export default UsersList;
