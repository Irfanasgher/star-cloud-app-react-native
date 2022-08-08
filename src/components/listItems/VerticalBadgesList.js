import React, {Component} from 'react';
import {View, FlatList, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import BadgeCard from '../cards/BadgeCard';




class VerticalBadgesList extends Component{

     BadgeCardFunction( item, onPress ) {
         console.log('item for badge is', item);
        return (
            <TouchableOpacity onPress={()=>onPress(item.id)} style={{flex: 1, alignItems: 'center'}} key={item.id}>
                <BadgeCard mainImage={item.icon} heading={item.name} price={item.price}/>
            </TouchableOpacity>
        );
    }
    // renderSeparator = () => {
    //     return (
    //         <View
    //             style={{
    //                 height: 12,
    //                 width: "100%",
    //                 backgroundColor: "red",
    //                 marginTop: 10,
    //             }}
    //         />
    //     );
    // };
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    horizontal={false}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    // renderItem={({ item }) => <BadgeCard mainImage={item.mainImage} roundedImage={item.roundedImage} heading={item.heading} counter={item.counter}/>}
                    renderItem={({ item }) => this.BadgeCardFunction(item, this.props.onPress)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={this.renderSeparator}
                />


            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#F3F3F3',

    }
})
export default VerticalBadgesList;
