import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import EventsList from '../../components/listItems/EventsList';
import StarAccountList from '../../components/listItems/StarAccountList';
import BadgesList from '../../components/listItems/BadgesList';
import GiftsList from '../../components/listItems/GiftsList';
import Helpers from '../../utils/Helpers';
import {AppContext} from '../../context/AppContext';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import UsersList from '../../components/listItems/UsersList';


//  let ws = new WebSocket(`ws://192.168.10.12:9090`);
// console.log('websocket is ', ws);


class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
            stars: [],
            events: [],
            badges: [],
            users: [],
            token: null
        }
    }


    static contextType = AppContext;
    async componentDidMount(): void {
        let user = await Helpers.getUser();
        let wsHome = await  new WebSocket('ws://192.168.10.9:9090');
        console.log('ws homew is', wsHome);
        await this.context.setContextState({ws: wsHome});
        wsHome.onopen = function() {
            wsHome.send(JSON.stringify({
                type: 'online',
                user: user
            }))
        };
        wsHome.onmessage = async (msg) => {
            // a message was received
            alert(JSON.parse(msg.data));
            let data = JSON.parse(msg.data);
            console.log('pusher data with notification is', data);
            if (data.type === 'notification') {
                console.log('data.type is', data.type);
                let res = await StarAxios.get(Env.createUrl(Routes.notifications));
                console.log('notification res is', res);
                if(res.status === 200){
                    await  this.context.setContextState({notifications: res.data.notifications})
                    console.log('context notification is', this.context.state.notifications);
                }
            }
        };
        await this.context.setContextState({user});
        let res = await StarAxios.get(Env.createUrl(Routes.home));
        console.log('respnse for home is', res);
        if(res.status === 200){
            this.setState({
                stars: res.data.stars,
                events: res.data.events,
                badges: res.data.badges,
                users: res.data.users,
            })
        }

    }

    render(){
        return(
            <ScrollView style={styles.container}>
                <View>
                    <EventsList data={this.state.events}
                                onPress={() => this.props.navigation.navigate('Events')} heading={true}
                                onCardPress={(id => this.props.navigation.navigate('EventDetail', {eventId: id}))}
                    />
                </View>
                <View>
                    <StarAccountList data={this.state.stars}
                                     onPress={() => this.props.navigation.navigate('starAccount')} heading={true}
                                     onCardPress={(id => this.props.navigation.navigate('StarAccountDetail', {starId: id}))}
                    />
                </View>
                <View>
                    <BadgesList data={this.state.badges}
                                onPress={() => this.props.navigation.navigate('Badges')}
                                onCardPress={(id => this.props.navigation.navigate('BadgeDetail', {badgeId: id}))}
                    />
                </View>
                {/*<View>*/}
                {/*    <GiftsList onPress={() => this.props.navigation.navigate('Gifts')} />*/}
                {/*</View>*/}
                <View>
                    <UsersList data={this.state.users} onPress={() => this.props.navigation.navigate('Users')}/>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F3F3F3',
    }
})
export default Home;
