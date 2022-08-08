import React, {Component} from 'react';
import {View,Text,StyleSheet, } from 'react-native';
import BadgeCard from '../../components/cards/BadgeCard';
import Colors from '../../common/Colors';
import ConnectCard from '../../components/cards/ConnectCard';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';

class BadgeDetail extends Component{
    constructor(props) {
        super(props);
        this.state = {
            badge: {}
        }
    }

    async componentDidMount(): void {
        const { badgeId } =  this.props.route.params;
        let res = await StarAxios.get(Env.createUrl(Routes.badge+badgeId))
        console.log('response for badge is', res)
        if(res.status === 200){
            this.setState({ badge: res.data.badge})
        }
    }

    render(){
        let {badge} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.firstSection}>
                    <BadgeCard heading={badge.name} price={badge.price} mainImage={badge.icon} />
                </View>
                <View style={styles.secondSection}>
                    {/*<View style={styles.secondSection}>*/}
                        <View style={{flex: 0.3}}>
                            <ConnectCard backgroundColor={Colors.gold} heading={'Share'}/>
                        </View>
                        <View style={{flex: 0.3}}>
                            <ConnectCard backgroundColor={Colors.primary} heading={'Coins'} price={badge.price} roundedImage={require('../../images/Common/Star.png')}/>
                        </View>
                    {/*</View>*/}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
    },
    firstSection:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.7,
        backgroundColor: Colors.white,
    },
    secondSection:{
        backgroundColor: Colors.white,
        flexDirection: 'row',
        flex: 0.2,
        marginTop: 10,
        justifyContent: 'space-around',
        padding: 20,
    }
})
export default BadgeDetail;
