import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import Colors from '../../common/Colors';
import RoundedAvatar from '../../components/roundedAvatar/RoundedAvatar';
import Fonts from '../../common/Fonts';
import RoundedIconButton from '../../components/buttons/RoundedIconButton';
import ListItem from '../../components/listItems/ListItems';
import BadgeCard from '../../components/cards/BadgeCard';
import iterableToArray from '@babel/runtime/helpers/esm/iterableToArray';
import Helpers from '../../utils/Helpers';
import {AppContext} from '../../context/AppContext';
import Env from '../../config/Env';
import StarAxios from '../../config/StarAxios';
import Routes from '../../config/Routes';


class Profile extends Component{

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    static contextType = AppContext;


    async componentDidMount(): void {
        let res = await StarAxios.post(Env.createUrl(Routes.profile))
        console.log('profile is', res);
        if(res.status === 200){
           await Helpers.setUser(res.data.user)
            this.setState({user: res.data.user});
            await this.context.setContextState({user: res.data.user})
        }
    }

    static contextType = AppContext;
    render(){
        const {user} = this.context.state;
        console.log('usr.refion.name', user.region);
        return(
            <ScrollView style={{flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.avatarContainer}>
                        <View>
                            <RoundedAvatar size={'xlarge'} image={Env.server_url+user.image}/>
                        </View>
                        <View style={styles.rowContainer}>
                            <Text style={styles.mainHeading}>{`${user.firstName} ${user.lastName}`}</Text>
                            {/*<Image*/}
                            {/*    style={styles.rightSideImages}*/}
                            {/*    source={require('../../images/Profile/userName.png')}*/}
                            {/*/>*/}
                        </View>
                        <View>
                            {(user.region)
                            ?<View style={styles.rowContainer}>
                                    <Image
                                        style={styles.leftSideImage}
                                        source={{uri: Env.server_url+user.region.flag}}
                                    />
                                    <Text style={styles.country}>{user.region.name}</Text>
                                </View>
                            : null}
                            <View style={styles.rowContainer}>
                                <Image
                                    style={styles.femaleIconImage}
                                    source={(user.gender === 'male')? require('../../images/Common/maleIcon.png'): require('../../images/Common/FemaleIcon.png')}
                                />
                                <Text style={styles.code}>{user.userName}</Text>
                                {/*<Image*/}
                                {/*    style={styles.rightSideImages}*/}
                                {/*    source={require('../../images/Profile/mainId.png')}*/}
                                {/*/>*/}
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <RoundedIconButton title={user.coins} imageName={require('../../images/Profile/Group.png')}/>
                            </View>
                            <View style={styles.button}>
                                <RoundedIconButton title={'0'} imageName={require('../../images/Profile/like.png')}/>
                            </View>
                        </View>
                    </View>

                    <View style={styles.listContainer}>
                        <ListItem onPress={()=> this.props.navigation.navigate('BuyCoins')} title={'Buy Coin'} subTitle={user.coins+' Coins'} chevron={true} imageName={require('../../images/Profile/BuyCoins.png')}/>
                        <ListItem onPress={()=> this.props.navigation.navigate('MyBadges')} title={'Badges'} chevron={true} imageName={require('../../images/Profile/Badges.png')}/>
                        <ListItem onPress={()=> this.props.navigation.navigate('MyGifts')} title={'Gifts'} chevron={true} imageName={require('../../images/Profile/Gifts.png')}/>
                        <ListItem onPress={()=> this.props.navigation.navigate('Friends')} title={'Friends'} chevron={true} imageName={require('../../images/Profile/BlockUser.png')}/>
                        <ListItem onPress={()=> this.props.navigation.navigate('BlockUser')} title={'Block Users'} chevron={true} imageName={require('../../images/Profile/BlockUser.png')}/>
                        <ListItem onPress={()=> this.props.navigation.navigate('BuyCoins')} title={'FAQ'} chevron={true} imageName={require('../../images/Profile/FAQ.png')}/>
                        <ListItem onPress={async ()=> {
                                await Helpers.logout();
                            }}
                                  title={'Sign Out'}
                                  imageName={require('../../images/Profile/SignOut.png')}
                        />
                    </View>
                </View>

            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        flex: 1
    },
    avatarContainer:{
        justifyContent:'center',
        alignItems: 'center',
        flex: 0.45,
        margin: 15
    },
    rowContainer:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    mainHeading:{
        color:Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 16
    },
    rightSideImages:{
        width: 15,
        height: 15,
        marginLeft: '2%'
    },
    leftSideImage:{
        width: 15,
        height: 12,
        marginRight: '3%'
    },
    femaleIconImage:{
        width: 10,
        height: 20,
        resizeMode: 'contain',
        marginRight: '2%'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button:{
        width: '50%',
        paddingHorizontal:30
    },
    listContainer:{
        paddingHorizontal: 30,
        flex: 0.55,
        margin: 10
    },
    country:{
        color:Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 10
    },
    code:{
        color:Colors.primary,
        fontFamily: Fonts.primary,
        fontSize: 8
    }
})
export default Profile;
