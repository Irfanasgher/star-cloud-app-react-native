import React from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import ConnectCard from '../../components/cards/ConnectCard';
import StarAxios from '../../config/StarAxios';
import Env from '../../config/Env';
import Routes from '../../config/Routes';

class StarAccountDetail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            star: {}
        }
    }

    async componentDidMount(): void {
        const { starId } =  this.props.route.params;
        console.log('Prarams from home is', this.props.route.params);
        let res = await StarAxios.get(Env.createUrl(Routes.star+starId));
        console.log('response for star is', res);
        if(res.status === 200){
            this.setState({star: res.data.star});
            console.log('star is', this.state.star);
        }
    }

    render(){
        let {star} =this.state
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground style={styles.imageBackground} source={{uri: Env.server_url+star.image}}>
                        <View style={styles.textContainer}>
                            <View>
                                <Text style={{color: Colors.orange, fontFamily: Fonts.primary, fontSize: 18}}>{star.userName}</Text>
                            </View>
                            <View>
                                <Text style={{color: Colors.white, fontFamily: Fonts.primary}}>10:30 | 02 March 2020</Text>
                            </View>
                        </View>
                        <View style={styles.detailContainer}>
                            <View>
                                <Text style={styles.event}>Star Details</Text>
                            </View>
                            <ScrollView style={{margin: 0}}>
                                <Text style={styles.detail}>Lorem ipsum dolor sit amet, lacinia scelerisque, numquam nunc vestibulum vulputate ad, ante parturient aliquet phasellus sapien phasellus. Mauris a aliquet quis et tellus, fringilla donec consectetuer varius lectus, molestie sollicitudin, sed et.</Text>
                            </ScrollView>
                        </View>
                    </ImageBackground>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardInnerContainer}>
                            <View style={{flex: 0.3}}>
                                <ConnectCard heading={'Connect'} backgroundColor={Colors.gold} />
                            </View>
                            <View style={{flex: 0.3}}>
                                <ConnectCard heading={'Coins'} backgroundColor={Colors.primary} price={star.noOfCoins} roundedImage={require('../../images/Common/Star.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F3F3F3',
        paddingTop: 5,
    },
    imageContainer:{
        flex: 1,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        overflow: 'hidden',
        // shadowColor: "#000000",
        // shadowOffset: {width: 4, height: 4},
        // shadowOpacity: 0.15,
        // shadowRadius: 3.84,
        // elevation: 8,
    },
    imageBackground:{
        flex: 1,
        justifyContent: 'flex-end'
    },
    textContainer:{
        flex: 0.15,
        paddingHorizontal: 10
    },
    detailContainer:{
        flex: 0.4,
        backgroundColor: Colors.primary,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 10
    },
    event:{
        color: Colors.orange,
        fontFamily: Fonts.primary
    },
    detail:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        textAlign: 'center',
        marginTop: 10
    },
    cardContainer:{
        flex: 0.3,
        overflow: 'hidden',
        backgroundColor: Colors.primary,
    },
    cardInnerContainer:{
        flex: 1,
        backgroundColor: Colors.white,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20
    }
})

export default StarAccountDetail;
