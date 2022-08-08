import React from 'react';
import {View, FlatList, StyleSheet, Image, Text} from 'react-native';
import MainHeading from '../heading/MainHeading';
import Colors from '../../common/Colors';
import BadgeCard from '../cards/BadgeCard';
import Fonts from '../../common/Fonts';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
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
    },
    {
        id: '7',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '8',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '9',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '10',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '11',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    },
    {
        id: '12',
        mainImage: 'https://thumbs.dreamstime.com/b/pink-round-button-gift-161281235.jpg',
        roundedImage:('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRlpQHC5MgwJDV4BK9RJRNhPZYzBVaByDUhOj1GGTy02H-c3Ofv'),
        heading: 'Lorem Ipsum',
        counter: '30'
    }
];


class VerticalGiftsList extends React.Component{

    BadgeCardFunction( item ) {
      //  console.log('item is', item);
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <BadgeCard mainImage={item.mainImage} heading={item.heading} price={item.counter}/>
            </View>
        );
    }
    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 12,
                    width: "100%",
                    backgroundColor: "#F3F3F3",
                    marginTop: 10,
                    // shadowColor: "#000000",
                    // shadowOffset: {width: 4, height: 4,},
                    // shadowOpacity: 0.15,
                    // shadowRadius: 3.84,
                    // elevation: 8,
                }}
            />
        );
    };
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={DATA}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    // renderItem={({ item }) => <BadgeCard mainImage={item.mainImage} roundedImage={item.roundedImage} heading={item.heading} counter={item.counter}/>}
                    renderItem={({ item }) => this.BadgeCardFunction(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        marginTop: 20,

    }
})
export default VerticalGiftsList;
