import React, {Component} from 'react';
import {View} from 'react-native';
import VerticalBadgesList from '../../components/listItems/VerticalBadgesList';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';

class Badges extends Component{
    constructor(props) {
        super(props);
        this.state = {
            badges: []
        }
    }

   async componentDidMount(): void {
        let res = await StarAxios.get(Env.createUrl(Routes.allBadges));
       console.log('response for badges is', res);
       if(res.status === 200){
           this.setState({badges: res.data.badges});
       }
    }

    render(){
        return(
            <View >
                <VerticalBadgesList data={this.state.badges} onPress={(id)=> this.props.navigation.navigate('BadgeDetail', {badgeId: id})} />
            </View>
        )
    }
}

export default Badges;
