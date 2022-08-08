import React from 'react';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import MainHeading from '../heading/MainHeading';
import StarAccountCard from '../cards/StarAccountCard';
import Colors from '../../common/Colors';
import BadgeCard from '../cards/BadgeCard';
import Env from '../../config/Env';


function BadgeCardFunction( item , onCardPress) {
    // console.log('badge item is', item);
    return (
        <TouchableOpacity key={item.id} style={{flex: 1, paddingLeft: 20}} onPress={()=> onCardPress(item.id)}>
            <BadgeCard mainImage={item.image} heading={item.name} price={item.price}/>
        </TouchableOpacity>
    );
}


const BadgesList = (props) =>{
    const {data,onPress, onCardPress } = props;
        return(
            <View style={styles.container}>
                <MainHeading seeAll={onPress} name={'Badges'} image={require('../../images/Header/BadgeIcon.png')}/>
                <FlatList
                    data={data}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => BadgeCardFunction(item, onCardPress)}
                    keyExtractor={item => item.id}
                />

            </View>
        )
    };
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        paddingVertical: 5,
        marginTop: 20,
        shadowColor: "#000000",
        shadowOffset: {width: 4, height: 4,},
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 8,
    }
})
export default BadgesList;
