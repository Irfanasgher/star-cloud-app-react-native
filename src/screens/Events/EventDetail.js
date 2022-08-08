import React from 'react';
import {View, Text, StyleSheet, ImageBackground, Image, FlatList, ScrollView} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import EventCard from '../../components/cards/EventCard';
import ConnectCard from '../../components/cards/ConnectCard';
import RoundedAvatar from '../../components/roundedAvatar/RoundedAvatar';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import Helpers from '../../utils/Helpers';

class EventDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            event: {},
            participants:[]
        }
    }

   async componentDidMount(): void {
        const { eventId } =  this.props.route.params;
        let res = await StarAxios.get(Env.createUrl(Routes.event+eventId));
        console.log('response for event is is', res);
        if(res.status === 200){
            this.setState({event: res.data.event, participants: res.data.participants});
        }
    }

   async participate(id){
        let res = await StarAxios.post(Env.createUrl(Routes.participate),{
            event_id : id
        });
       console.log('participate in event res', res);
        if(res.status === 200){
            Helpers.showToastMessage('Participation Successful')
        }
    }

    RoundedAvatarFunction( item ) {
        console.log('participant is', item);
        return (
            <View style={{ paddingLeft: 7,}}>
                <RoundedAvatar image={Env.server_url+item.image} size={'small'} />
            </View>
        );
    }

    render(){
        let {event} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer1}>
                    <ImageBackground style={styles.imageBackground} source={{uri: Env.server_url+event.image}} blurRadius={2}>
                        <View style={styles.radioContainer}>
                            <View>
                                <Text style={styles.radioHeading}>{event.name}</Text>
                            </View>
                            <View>
                                <Text style={styles.freedonTrail}>10:30 | Freedom Trail</Text>
                            </View>
                            {/*<View style={styles.locationContainer}>*/}
                                <View style={styles.imageContainer}>
                                    <View>
                                        <Image style={styles.image} source={require('../../images/EventDetail/Location.png')} />
                                    </View>
                                    <View>
                                        <Text style={styles.imageHeading}>{event.region}</Text>
                                    </View>
                                </View>
                                <View style={styles.imageContainer}>
                                    <View>
                                        <Image style={styles.image} source={require('../../images/EventDetail/Timer.png')} />
                                    </View>
                                    <View>
                                        <Text style={styles.imageHeading}>{event.startDate}</Text>
                                    </View>
                                </View>
                            {/*</View>*/}
                            <View>
                                <Text style={styles.participant}>Participants</Text>
                            </View>
                        </View>
                        <View style={{flex: 0.15}}>
                            <FlatList
                                data={this.state.participants}
                                contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => this.RoundedAvatarFunction(item)}
                                keyExtractor={item => item.id}
                            />
                        </View>
                        <View style={styles.detailContainer}>
                            <View>
                                <Text style={styles.event}>Event Detail</Text>
                            </View>
                            <ScrollView>
                                <Text style={styles.detail}>{event.description}</Text>
                            </ScrollView>
                        </View>
                    </ImageBackground>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardInnerContainer}>
                            <View style={{flex: 0.3}}>
                                <ConnectCard onPress={()=> this.participate(event.id)} heading={'Join Event'} backgroundColor={Colors.gold} />
                            </View>
                            <View style={{flex: 0.3}}>
                                <ConnectCard onPress={()=> this.props.navigation.navigate('EventParticipants', {eventId: event.id})} heading={'Participants'} backgroundColor={Colors.pink} />
                            </View>
                            <View style={{flex: 0.3}}>
                                <ConnectCard  backgroundColor={Colors.primary} price={event.price} roundedImage={require('../../images/Common/Star.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingTop: 5,
    },
    imageContainer1:{
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        overflow: 'hidden'
    },
    imageBackground:{
        flex:1,
        justifyContent: 'flex-end'
    },
    detailContainer:{
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // backgroundColor: Colors.primary,
        // paddingHorizontal: 30,
        // paddingTop: 20,
        // paddingBottom: 50,
        // position: 'absolute',
        // height: 200,
        // bottom: 0,
        flex: 0.4,
        backgroundColor: Colors.primary,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10

    },
    radioContainer:{
        flex: 0.35,
        paddingHorizontal: 30,
        justifyContent: 'space-around',
    },
    radioHeading:{
        color: Colors.orange,
        fontFamily: Fonts.primary,
        fontSize: 18
    },
    freedonTrail:{
        color: Colors.white,
        fontFamily: Fonts.primary
    },
    locationContainer:{
        marginTop: 15
    },
    imageContainer:{
        flexDirection: 'row',
        // marginTop: 5
    },
    image:{
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 10
    },
    imageHeading:{
        fontFamily: Fonts.primary,
        color: Colors.white
    },
    participant:{
        fontFamily: Fonts.primary,
        color: Colors.white,
        // marginTop: 5
    },
    event:{
        color: Colors.orange,
        fontFamily: Fonts.primary
    },
    detail:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        textAlign: 'center',
        // marginTop: 10
    },
    cardContainer:{
        flex: 0.3,
        overflow: 'hidden',
        backgroundColor: Colors.primary,
    },
    cardInnerContainer:{
        flex: 1,
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    }
})

export default EventDetail;
