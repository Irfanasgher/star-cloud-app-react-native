import React, {Component} from 'react';
import { StyleSheet, ScrollView} from 'react-native';
import StarAccountList from '../../components/listItems/StarAccountList';
import Colors from '../../common/Colors';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';

class StarAccount extends Component{
    constructor(props) {
        super(props);
        this.state = {
            stars: []
        }
    }

    async componentDidMount(): void {
        let res = await StarAxios.get(Env.createUrl(Routes.allStars));
        console.log('response for star is', res);
        if(res.status === 200){
            this.setState({stars: res.data.stars});
        }
    }
    render(){
        return(
                <ScrollView>
                    <StarAccountList data={this.state.stars} onCardPress={(id)=>this.props.navigation.navigate('StarAccountDetail', { starId: id })} />
                </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#F3F3F3',
    }
})
export default StarAccount;
