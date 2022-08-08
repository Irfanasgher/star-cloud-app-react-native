import React, {Component} from 'react';
import {View} from 'react-native';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import EventParticipantList from '../../components/listItems/EventParticipanList';

class EventParticipant extends Component{
    constructor(props) {
        super(props);
        this.state = {
            participants: []
        }
    }
    async componentDidMount(): void {
        const { eventId } =  this.props.route.params;
        //console.log('event id is', eventId);
        let res = await StarAxios.get(Env.createUrl(Routes.participants+eventId));
        console.log('res for participants is', res);
        if(res.status === 200){
            this.setState({participants: res.data.participants})
        }
    }

    render(){
        return(
            <View>
                <EventParticipantList data={this.state.participants} />
            </View>
        )
    }
}
export default EventParticipant;
