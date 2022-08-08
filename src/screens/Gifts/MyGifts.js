import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import MyGiftsList from '../../components/listItems/MyGiftsList';
import ShareGiftsList from '../../components/listItems/ShareGiftsList';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';

class MyGifts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            gifts: []
        }
    }

    async componentDidMount(): void {
        console.log('I am Mounting');
        let res = await StarAxios.get(Env.createUrl(Routes.myGifts));
        console.log('res for gifts is', res);
        if(res.status === 200){
            this.setState({gifts: res.data.gifts})
        }

    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}> My Gifts</Text>
                </View>
                <View>
                    <MyGiftsList data={this.state.gifts} />
                </View>
                <View style={{backgroundColor: Colors.white, marginTop: 8}}>
                    <Text style={styles.heading}>Share Gifts</Text>
                </View>
                <View>
                    <ShareGiftsList />
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
export default MyGifts;
