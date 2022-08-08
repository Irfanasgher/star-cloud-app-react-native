import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import SendMessage from '../../components/Chat/SendMessage';
import ReceiveMessage from '../../components/Chat/ReceiveMessage';
import ChatHeader from '../../components/Header/CharHeader';
import InputFields from '../../components/inputFields/InputField';
import Colors from '../../common/Colors';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import Helpers from '../../utils/Helpers';
import {AppContext} from '../../context/AppContext';




class Chat extends Component{
    constructor(props) {
        super(props);
        this.state = {
            chat: [],
            user:{},
            message: null,
            partnerId: null,
            partnerName: null,
            wsChat: null,
            chatId: null,
        }
    }

    static contextType = AppContext;

    async componentDidMount(): void {
        let user = await Helpers.getUser();
        let wsChat = await  new WebSocket('ws://192.168.10.9:9091/chat');
         this.setState({wsChat});
        console.log('ws chat is here with me', wsChat);
        //await this.context.setContextState({ws});
        wsChat.onopen = function() {
            wsChat.send(JSON.stringify({
                userId: user.id,
                type: 'user'

            }))
        };
        wsChat.onmessage = (msg) => {
            let chat = JSON.parse(msg.data);
           alert(msg.data);
            // a message was received
            if(chat.chat_id === this.state.chatId){
                console.log('recieved msg.data is',chat);
                this.setState({chat: [...this.state.chat, chat]});
                // this.state.chat.push(chat);
                console.log('new array is after push', this.state.chat );
            }
            // let data = JSON.parse(msg.data);
        };
        const { chatId  } =  this.props.route.params;
        let res = await StarAxios.get(Env.createUrl(Routes.chat+chatId));
        console.log('response for chat is', res);
        this.setState({chatId});
        if(res.status === 200){
            this.setState({chat: res.data.chat.messages.reverse(), partnerId:res.data.chat.partnerId, partnerName:res.data.chat.partner  });
        }
         // let user = await Helpers.getUser();
        this.setState({user});
        this.refs.scrollView.scrollTo({x: 0, y: 500000, animated: false});
    }


    async sendMessage(){
        this.state.wsChat.send(JSON.stringify({
                chat_id: this.state.chatId,
                sender_id: this.state.user.id,
                receiver_id: this.state.partnerId,
                type: 'chat',
                message: this.state.message,
        }));

        let res = await StarAxios.post(Env.createUrl(Routes.sendMessage),{
            receiver_id : this.state.partnerId,
            message : this.state.message,
        });
        console.log('Res for send message is', res)
        if(res.status === 200){
            this.setState({message: null})
        }
        // this.componentDidMount()

    }


    renderMessages(){
        return this.state.chat.map( message => {
           // console.log('chat message is', message);
            if (message.sender_id === this.state.user.id){
                return <View key={message.id} style={{alignItems: 'flex-end'}}>
                            <SendMessage message={message.message} color={Colors.orange} backColor={'#F54B64'} textColor={Colors.white} borderRightRadius={0}/>
                        </View>
            } else {
                return <View key={message.id} style={{alignItems: 'flex-start'}}>
                        <SendMessage message={message.message} backColor={Colors.white} textColor={Colors.primary} borderLeftRadius={0}/>
                        </View>
            }
        })
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: Colors.primary, paddingTop: 8}}>
                <View style={{flex: 0.1}}>
                    <ChatHeader  name={this.state.partnerName}  />
                </View>
                <ScrollView style={{flex:0.75}} ref="scrollView">
                    {this.renderMessages()}
                </ScrollView>
                <View style={{flex:0.15}}>
                    <View style={{flex:1,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 30}}>
                        <View style={{flex: 0.85,}}>
                            <InputFields  placeholder={'Type here'} value={this.state.message} onChangeText={(value)=> this.setState({message: value})}/>
                        </View>
                        <TouchableOpacity style={{flex: 0.1}} onPress={()=> this.sendMessage()}>
                            <Image style={styles.image} source={require('../../images/Message/Send.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    image:{
        height: 30,
        width: 30,
        resizeMode: 'contain',
    },
})
export default Chat;
