import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import BadgeCard from '../cards/BadgeCard';
import Colors from '../../common/Colors';
import Env from '../../config/Env';

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
    }


];

class MyGiftsList extends React.Component{
     BadgeCardFunction( item ) {
        let gift = item.badge;
         console.log(' gift item is', gift);

         return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <BadgeCard mainImage={gift.icon} heading={gift.name} price={gift.price}/>
            </View>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    renderItem={({ item }) => this.BadgeCardFunction(item)}
                    keyExtractor={item => item.id}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.white,
        paddingBottom: 20
    }
})
export default MyGiftsList;
