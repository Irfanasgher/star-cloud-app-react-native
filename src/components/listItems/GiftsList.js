import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import MainHeading from '../heading/MainHeading';
import Colors from '../../common/Colors';
import BadgeCard from '../cards/BadgeCard';
const DATA = [
    {
        id: '1',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '2',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '3',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '4',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '5',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '6',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    }
];

function BadgeCardFunction( item ) {
    // console.log('item is', item);
    return (
        <View style={{flex: 1, paddingLeft: 20}}>
            <BadgeCard mainImage={item.mainImage} heading={item.heading} price={item.counter}/>
        </View>
    );
}

const GiftsList = (props) =>{
        return(
            <View style={styles.container}>
                <MainHeading seeAll={props.onPress} name={'Gifts'}  image={require('../../images/Header/GiftIcon.png')}/>
                <FlatList
                    data={DATA}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => BadgeCardFunction(item)}
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
export default GiftsList;
