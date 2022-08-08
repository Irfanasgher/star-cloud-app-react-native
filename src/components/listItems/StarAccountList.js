import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import MainHeading from '../heading/MainHeading';
import StarAccountCard from '../cards/StarAccountCard';
import Colors from '../../common/Colors';
import Env from '../../config/Env';

 const renderItem = ( data, onCardPress ) => {
    let star=data.item.star;
    let image = Env.server_url+star.image;
    return (
        <TouchableOpacity key={star.id} style={{marginLeft: 20, height: 500, width: 250,}} onPress={()=> onCardPress(star.id)}>
            <StarAccountCard mainImage={image} roundedImage={image} name={star.userName} subName={star.userName}/>
        </TouchableOpacity>
    );
};

const StarAccountList = (props) =>{
    const {heading, data, onPress, onCardPress} = props;
    return(
        <View style={styles.container}>
            {(heading)?
            <MainHeading seeAll={onPress} name={'Star Accounts'} image={require('../../images/Header/StarAccountIcon.png')}/>
            : null }
            <FlatList
                data={data}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={(item)=>renderItem(item, onCardPress)}
                keyExtractor={item => item.id}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
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
export default StarAccountList;
