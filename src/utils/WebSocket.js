import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-root-toast';
import Helpers from './Helpers';

 let ws = ()=>  new WebSocket('ws://192.168.10.12:9090');

const webSocketStart = async () => {
    console.log('web socket in home is', ws);
    let user = await Helpers.getUser();
    ws.onopen = function() {
        ws.send(`${user.id}`)
    };

};

const send =  function (message) {

    ws.send(JSON.stringify(message))
};

const onOpen = async () => {
    let user = await Helpers.getUser();
    ws.onopen = function () {
        ws.send(`${user.id}`)
    };
}

const onMessage = () => {
    ws.onmessage = (msg) => {
        // a message was received
        alert(JSON.parse(msg.data));
        // let data = JSON.parse(msg.data);
    };
}

export default {
    webSocketStart,
    ws,
    send,
    onOpen,
    onMessage
}
