import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Colors from '../../common/Colors';
import StreamHeader from '../../components/streamHeader/StreamHeader';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import moment from 'moment';
import {AppContext} from '../../context/AppContext';

class Notification extends Component{
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    }
    static contextType = AppContext;

    async componentDidMount(): void {
        let res = await StarAxios.get(Env.createUrl(Routes.notifications));
        console.log('notification res is', res);
        if(res.status === 200){
          await  this.context.setContextState({notifications: res.data.notifications})
        }
    }


    renderItem( item ) {
        console.log('item is', item);
        return (
            <View style={{flex: 1}}>
                <StreamHeader
                    image={Env.server_url+item.notifyBy.image}
                    name={item.data}
                    nameColor={Colors.white}
                    subTitle={moment(item.createdAt, 'YYYYMMDD').fromNow()}
                    titleColor={Colors.gold}
                    isLine={true}
                />
            </View>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "75%",
                    marginLeft: '20%',
                    backgroundColor: "#000",
                    marginVertical: 5
                }}
            />
        );
    };

    render(){
        return(
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    <FlatList
                        data={this.context.state.notifications}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.renderItem(item)}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        paddingTop: 30
    },
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    }
})
export default Notification;







