import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, Alert} from 'react-native';
import Colors from '../../common/Colors';
import VerticalEventsList from '../../components/listItems/VerticalEventsList';
import Fonts from '../../common/Fonts';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import moment from 'moment';
import BadgeCard from '../../components/cards/BadgeCard';

const DATA = [
    {
        id:1,
        weekday: 1
    },
    {
        id:2,
        weekday: 2
    },
    {
        id:3,
        weekday: 3
    },
    {
        id:4,
        weekday: 4
    },
    {
        id:5,
        weekday: 5
    },
    {
        id:6,
        weekday: 6
    },
    {
        id:7,
        weekday: 7
    }
]

class Events extends Component{
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            date:[],
            // selectedId:[]
        }
    }

    typeSelected(id, day) {
        // Alert.alert(value);

        this.setState({
            selectedId: id,
            date: moment().weekday(day).format('D'),
        });
    }

    async componentDidMount(): void {
        let res = await StarAxios.get(Env.createUrl(Routes.allEvents));
        console.log('res for all events is', res);
        if(res.status === 200){
            this.setState({events: res.data.events})
        }
    }

    renderList(item){
        // console.log('badge item is', item);

        return (
            <View style={{marginLeft: 20}}>
            <TouchableOpacity style={{
                alignItems: 'center',
                borderWidth: 2,
                paddingVertical: 10,
                width:45,
                borderColor: this.state.selectedId === item.id ? Colors.orange : Colors.primary,
                borderRadius: 20
            }}
            onPress={() => this.typeSelected(item.id, item.weekday)}
                // date: moment().weekday(item.weekday).format('D'),
            >
                <View>
                    <Text style={styles.heading}>{moment().weekday(item.weekday).format('D')}</Text>
                </View>
                <View>
                    <Text style={styles.heading}>{moment().weekday(item.weekday).format('ddd')}</Text>
                </View>
                <View style={{
                    height: 7,
                    width: 7,
                    backgroundColor: this.state.selectedId === item.id ? Colors.orange : Colors.primary,
                    borderRadius:50,
                    marginTop: 6
                }}>

                </View>
            </TouchableOpacity>
            </View>
        );
    }

    render(){

        return(
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <FlatList
                        data={DATA}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.renderList(item)}
                        keyExtractor={item => item.id}
                    />

                </View>
                <View style={styles.listContainer}>
                        <Text>{this.state.date}</Text>
                    {/*<VerticalEventsList data={this.state.events} onPress={(id)=> this.props.navigation.navigate('EventDetail', {eventId: id})}/>*/}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 8
    },
    mainContainer:{
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    dateContainer:{
        alignItems: 'center',
        borderWidth: 2,
        paddingVertical: 10,
        padding: 6,
        borderColor: Colors.orange,
        borderRadius: 20
    },
    heading:{
        color: Colors.white,
        fontFamily: Fonts.primary
    },
    listContainer:{
        flex: 0.8,
        backgroundColor: Colors.white,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingHorizontal: 30,
        paddingTop: 30
    }
})
export default Events;


//
// import React, {Component} from 'react';
// import {View, Text, StyleSheet} from 'react-native';
// import moment from 'moment';
//
// export default class App extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }
//
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Current Date: {moment().add(3, 'days').calendar()} </Text>
//             </View>
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
// });
