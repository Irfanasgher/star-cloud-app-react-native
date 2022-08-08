import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MyBadgesList from '../../components/listItems/MyBadgesList';
import ShareBadgesList from '../../components/listItems/ShareBadgesList';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';

class MyBadges extends Component{
    constructor(props) {
        super(props);
        this.state = {
            badges: []
        }
    }

    async componentDidMount(): void {
        console.log('I am Mounting');
        let res = await StarAxios.get(Env.createUrl(Routes.myBadges));
        console.log('res for badges is', res);
        if(res.status === 200){
            this.setState({badges: res.data.badges})
        }

    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> My Badges</Text>
                </View>
                <View>
                    <MyBadgesList data={this.state.badges} />
                </View>
                <View style={{backgroundColor: Colors.white, marginTop: 8}}>
                    <Text style={styles.heading}>Share Badges</Text>
                </View>
                <View>
                    <ShareBadgesList />
                </View>

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F3F3F3'
    },
    headingContainer:{
        backgroundColor: Colors.white,
    },
    heading:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        textAlign: 'center',
        paddingTop: 30,
    }
})
export default MyBadges;
