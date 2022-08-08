import React, {Component} from 'react';
import Helpers from '../utils/Helpers';



const AppContext = React.createContext();


class AppContextProvider extends Component{
    state = {
        user: {},
        notifications: [],
        ws: null
    };

    // async componentDidMount(): void {
    //     let user = await Helpers.getUser();
    //     let ws = await  new WebSocket('ws://192.168.10.12:9090');
    //     await this.setState({ws});
    //     ws.onopen = function() {
    //         ws.send(`${user.id}`)
    //     };
    //    ws.onmessage = (msg) => {
    //         // a message was received
    //         alert(JSON.parse(msg.data));
    //         // let data = JSON.parse(msg.data);
    //     };
    //
    // }


    render(){
        console.log('context ws us', this.state.ws);
        return (
            <AppContext.Provider value={{
                state: this.state,
                setContextState: async (newState)=>{
                    await this.setState(newState)
                },
            }}>
                {this.props.children}
            </AppContext.Provider>
        )
    }
}

export {AppContextProvider, AppContext};
