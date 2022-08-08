import React, {Component, useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AuthOptions from '../screens/auth/AuthOptions';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import Home from '../screens/Home/Home';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../common/Colors';
import Fonts from '../common/Fonts';
import Icon from 'react-native-vector-icons/FontAwesome';
import Stream from '../screens/Stream/Stream';
import Profile from '../screens/Profile/Profile';
import Notification from '../screens/Notification/Notification';
import Messages from '../screens/Messages/Messages';
import StarAccount from '../screens/StarAccounts/StarAccount';
import Badges from '../screens/Badges/Badges';
import Gifts from '../screens/Gifts/Gifts';
import ForgotPassword from '../screens/auth/ForgotPassword';
import BuyCoins from '../screens/BuyCoins/BuyCoins';
import MyBadges from '../screens/Badges/MyBadges';
import MyGifts from '../screens/Gifts/MyGifts';
import BadgeDetail from '../screens/Badges/BadgeDetail';
import StarAccountDetail from '../screens/StarAccounts/StarAccountDetail';
import Chat from '../screens/Chat/Chat';
import Events from '../screens/Events/Events';
import EventDetail from '../screens/Events/EventDetail';
import EventParticipant from '../screens/Events/EventParticipant';
import Friends from '../screens/Friends/Friends';
import Users from '../screens/Users/Users';
import BlockUser from '../screens/Users/BlockUser';
import FriendRequest from '../screens/Friends/FriendRequest';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


export const HomeNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Home'} component={Home} options={{
                title: 'Home',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>

            {/*All Screens Related To Events*/}
            <Stack.Screen name={'Events'} component={Events} options={{
                title: 'Events',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'EventDetail'} component={EventDetail} options={{
                title: 'Event',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'EventParticipants'} component={EventParticipant} options={{
                title: 'Event Participants',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'starAccount'} component={StarAccount} options={{
                title: 'Stars',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'StarAccountDetail'} component={StarAccountDetail} options={{
                title: 'Star',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'Badges'} component={Badges} options={{
                title: 'Badges',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'BadgeDetail'} component={BadgeDetail} options={{
                title: 'Badge',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'Gifts'} component={Gifts} options={{
                title: 'Gifts',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'BadgeDetails'} component={BadgeDetail} options={{
                title: 'Badge',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'Users'} component={Users} options={{
                title: 'Users',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
        </Stack.Navigator>
    );
};
export const StreamNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Video'} component={Stream} options={{
                title: 'Video chat',
                headerShown: false,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
        </Stack.Navigator>
    );
};
export const MessagesNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Messages'} component={Messages} options={{
                title: 'Messages',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'Chat'} component={Chat} options={{
                title: 'Chat',
                headerShown: false,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
        </Stack.Navigator>
    );
};
export const NotificationNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Notifications'} component={Notification} options={{
                title: 'Notifications',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
        </Stack.Navigator>
    );
};
export const ProfileNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Profile'} component={Profile} options={{
                title: 'Profile',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'BuyCoins'} component={BuyCoins} options={{
                title: 'Buy Coins',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'MyBadges'} component={MyBadges} options={{
                title: 'My Badges',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'MyGifts'} component={MyGifts} options={{
                title: 'My Gifts',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'Friends'} component={Friends} options={{
                title: 'My Friends',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'FriendRequest'} component={FriendRequest} options={{
                title: 'Friend Request',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'BlockUser'} component={BlockUser} options={{
                title: 'Block Users',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>
            <Stack.Screen name={'Auth'} component={InitialNavigators} options={{
                title: 'Auth',
                headerShown: true,
                header: ({scene, previous, navigation}) => Header(scene, previous, navigation),
            }}/>

        </Stack.Navigator>
    );
};

const TabNavigator = ()=> {
    return (
        <Tab.Navigator lazy={true}  screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') iconName = focused ? require('../images/TabBar/HomeBlueIcon.png') : require('../images/TabBar/HomeIcon.png');
                else if (route.name === 'Video') iconName = focused ? require('../images/TabBar/VideoChatBlueIcon.png') : require('../images/TabBar/VideoChatIcon.png');
                else if (route.name === 'Messages') iconName = focused ? require('../images/TabBar/MessageBlueIcon.png') : require('../images/TabBar/MessageIcon.png');
                else if (route.name === 'Notifications') iconName = focused ? require('../images/TabBar/NotificationIconBlue.png') : require('../images/TabBar/NotificationIcon.png');
                else if (route.name === 'Profile') iconName = focused ? require('../images/TabBar/ProfileBlueIcon.png') : require('../images/TabBar/ProfileIcon.png');

                // You can return any component that you like here!
                return <Image source={iconName} style={{width: 20, height: 20}} />;
            },
        })}
                       tabBarOptions={{
                           activeTintColor: Colors.primary,
                           inactiveTintColor: 'gray',
                           keyboardHidesTabBar: true,
                           //activeBackgroundColor: 'transparent',
                           //inactiveBackgroundColor: 'transparent',
                           //showLabel: false,
                           // labelStyle: {
                           //   backgroundColor: 'transparent'
                           // },
                           // tabStyle: {
                           //     backgroundColor: 'transparent'
                           // },
                           // style: {
                           //     backgroundColor: 'transparent'
                           // }
                       }}>
            <Tab.Screen name="Home" component={HomeNavigator} />
            <Tab.Screen name="Video" component={StreamNavigator} options={{
                title: 'Video chat',
            }}
            />
            <Tab.Screen name="Messages" component={MessagesNavigator} />
            <Tab.Screen name="Notifications" component={NotificationNavigator} />
            <Tab.Screen name="Profile" component={ProfileNavigator} />
        </Tab.Navigator>
    );
};

export const InitialNavigators =  (token) => {
    return (
        (token===null)
            ? <Stack.Navigator>
                <Stack.Screen name="Auth" component={AuthOptions} options={{
                    title: '',
                    headerShown: false,
                }} />
                <Stack.Screen name={'Login'} component={Login} options={{
                    title: '',
                    headerShown: false,
                }} />
                <Stack.Screen name={'ForgotPassword'} component={ForgotPassword} options={{
                    title: '',
                    headerShown: false,
                }} />
                <Stack.Screen name={'SignUp'} component={SignUp} options={{
                    title: '',
                    headerShown: false,
                }} />
                <Stack.Screen name={'Home'} component={TabNavigator} options={{
                    title: '',
                    headerShown: false,
                }} />
            </Stack.Navigator>
            :   <Stack.Navigator>
                <Stack.Screen name={'Home'} component={TabNavigator} options={{
                    title: 'Home',
                    headerShown: false,
                    header: ({ scene, previous, navigation }) => Header(scene, previous, navigation )
                }} />
            </Stack.Navigator>
    )
};

function Header( scene , previous, navigation ){
    const { options } = scene.descriptor;
    let centerIcon = null;
    let rightIcon = null;
    let onPress = null;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;
    if (title==='Badges')  centerIcon = require('../images/Header/BadgeIcon.png');
    else if (title === 'Gifts')  centerIcon = require('../images/Header/GiftIcon.png');
    else if (title === 'Stars')  centerIcon = require('../images/Header/StarAccountIcon.png');
    else if (title === 'Buy Coins') rightIcon = require('../images/Header/BuyCoinIcon.png');
    else if (title === 'My Friends'){ rightIcon = require('../images/Header/users.png');
                                        onPress = ()=> navigation.navigate('FriendRequest');}
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: Colors.primary, height: 50}}>
            <View style={{width: '20%', alignItems: 'center', justifyContent: 'center'}}>
                {previous? <Icon name={'chevron-left'} color={'white'} size={20} onPress={()=> navigation.goBack()}/> : null}
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center',width: '60%', justifyContent: 'center'}}>
                {(centerIcon !== null)
                    ? <View>
                        <Image style={{height: 20, width: 20}} source={centerIcon} />
                    </View>
                    : null}
                <View>
                    <Text style={{color: Colors.white, fontFamily: Fonts.primary, marginLeft: 10}}>{title}</Text>
                </View>
            </View>
            <View style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}>
                { rightIcon !== null ? <TouchableOpacity onPress={ ()=> onPress()}><Image style={{height: 30, width: 25, resizeMode: 'contain'}} source={rightIcon} /></TouchableOpacity> : null}
            </View>
        </View>
    )
}



