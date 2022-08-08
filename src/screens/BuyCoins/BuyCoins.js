import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Image} from 'react-native';
import RoundedAvatar from '../../components/roundedAvatar/RoundedAvatar';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import SubscriptionCard from '../../components/subscriptionCard/SubscriptionCard';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';
import Helpers from '../../utils/Helpers';

const DATA = [
    {
        id: '1',
        mainImage: 'https://cdn4.iconfinder.com/data/icons/badges-9/66/50-512.png',
        counter: '500',
        euro: '€ 3.56'
    },
    {
        id: '2',
        mainImage: 'https://cdn4.iconfinder.com/data/icons/badges-9/66/50-512.png',
        counter: '500',
        euro: '€ 3.56'
    },
    {
        id: '3',
        mainImage: 'https://cdn4.iconfinder.com/data/icons/badges-9/66/50-512.png',
        counter: '500',
        euro: '€ 3.56'
    },
    {
        id: '4',
        mainImage: 'https://cdn4.iconfinder.com/data/icons/badges-9/66/50-512.png',
        counter: '500',
        euro: '€ 3.56'
    },
    {
        id: '5',
        mainImage: 'https://cdn4.iconfinder.com/data/icons/badges-9/66/50-512.png',
        counter: '500',
        euro: '€ 3.56'
    },
    {
        id: '6',
        mainImage: 'https://cdn4.iconfinder.com/data/icons/badges-9/66/50-512.png',
        counter: '500',
        euro: '€ 3.56'
    },
];



class BuyCoins extends Component{

    SubscriptionCardFunction( item ) {
        console.log('item is', item);
        return (
            <TouchableOpacity style={{flex: 1, alignItems: 'center'}} onPress={()=> this.buyCoins()}>
                <SubscriptionCard image={require('../../images/BuyCoins/StarGroup.png')} counter={item.counter} euro={item.euro}/>
            </TouchableOpacity>
        );
    }

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 20,
                    width: "100%",
                    backgroundColor: "#F3F3F3",
                    // marginTop: 10,
                }}
            />
        );
    };

  async buyCoins(){
      let res = await StarAxios.post(Env.createUrl(Routes.coins));
       console.log('response for coins is', res);
       if(res.status === 200){
           Helpers.showToastMessage('1000 Coins Added')
       }
  }

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    {/*<RoundedAvatar size={'xlarge'} image={'https://filmfare.wwmindia.com/content/2020/feb/salman21582115476.jpg'}/>*/}
                    <View>
                        <Image style={styles.image} source={require('../../images/BuyCoins/BuyCoin.png')} />
                    </View>

                    <Text style={styles.mainHeading}>
                        You have
                        <Text style={styles.innerHeading}> 24 </Text>
                        coins
                    </Text>
                </View>
                <View style={styles.subscriptionContainer}>
                    <FlatList
                        data={DATA}
                        horizontal={false}
                        numColumns={3}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => this.SubscriptionCardFunction(item)}
                        keyExtractor={item => item.id}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        marginTop: '5%',
        flex: 1,
        alignItems: 'center',
    },
    image:{
      height: 170,
      width: 170
    },
    mainHeading:{
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: Fonts.primary,
        // marginTop: '6%',
        fontSize: 16
    },
    innerHeading:{
        color:Colors.gold,
        fontSize: 24,
        fontFamily: Fonts.primaryBold
    },
    subscriptionContainer:{
        flexDirection:'row',
        paddingHorizontal: 20,
        marginTop: 20
    }
})
export default BuyCoins;
