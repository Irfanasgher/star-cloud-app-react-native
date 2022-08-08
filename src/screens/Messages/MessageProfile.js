import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, FlatList} from 'react-native';
import Colors from '../../common/Colors';
import Fonts from '../../common/Fonts';
import MessageProfileImageList from '../../components/listItems/MessageProfileImageList';


const DATA = [
    {
        id: '1',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '2',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '3',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '4',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '5',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '6',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',

    },
    {
        id: '7',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '8',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '9',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',

    },
    {
        id: '10',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '11',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',
    },
    {
        id: '12',
        mainImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTyjgjsMoQKKmFiHWlrSdw0r6d8RfTftivaA62i9xDWWTdGWlIE',

    }
];


class MessageProfile extends Component{

    RenderImageFunction( item ) {
        return (
            <View style={{flex:1}}>
                <MessageProfileImageList image={item.mainImage}/>
            </View>
        );
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <ImageBackground source={require('../../images/Call/Call.png')} style={{flex: 1}} borderBottomRightRadius={30} borderBottomLeftRadius={30}/>
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={styles.about}>About me</Text>
                </View>
                <View style={styles.paragraphContainer}>
                    <Text style={styles.paragraph}>Lorem Ipsum dolor sit amet, consetetur sadipscing elitr, sad diam nonumy eirmod</Text>
                </View>
                <View style={styles.aboutContainer}>
                    <Text style={styles.about}>Media,link and docs</Text>
                </View>
                <View style={styles.rowImageContainer}>
                    <FlatList
                        data={DATA}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => this.RenderImageFunction(item)}
                        keyExtractor={item => item.id}
                    />
                    {/*<View style={styles.rowImage}>*/}
                    {/*    <ImageBackground source={require('../images/Call/Call.png')} style={{flex: 1}} />*/}
                    {/*</View>*/}
                    {/*<View style={styles.rowImage}>*/}
                    {/*    <ImageBackground source={require('../images/Call/Call.png')} style={{flex: 1}} />*/}
                    {/*</View>*/}
                    {/*<View style={styles.rowImage}>*/}
                    {/*    <ImageBackground source={require('../images/Call/Call.png')} style={{flex: 1}} />*/}
                    {/*</View>*/}
                    {/*<View style={styles.rowImage}>*/}
                    {/*    <ImageBackground source={require('../images/Call/Call.png')} style={{flex: 1}} />*/}
                    {/*</View>*/}
                    {/*<View style={styles.rowImage}>*/}
                    {/*    <ImageBackground source={require('../images/Call/Call.png')} style={{flex: 1}} />*/}
                    {/*</View>*/}
                </View>
                <View style={styles.buttonFirstContainer}>
                    <View style={styles.buttonSecondContainer}>
                        <TouchableOpacity style={styles.pinkButton} onPress={() => alert('Touched')}>
                            <View>
                                <Image style={styles.buttonImage} source={require('../../images/MessageProfile/Report.png')} />
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Block</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonThirdContainer}>
                        <TouchableOpacity style={styles.goldButton} onPress={ () => alert('Touched')}>
                            <View>
                                <Image style={styles.buttonImage} source={require('../../images/MessageProfile/Report.png')} />
                            </View>
                            <View>
                                <Text style={styles.buttonText}>Report</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: Colors.primary
    },
    imageContainer:{
        flex: 0.4
    },
    aboutContainer:{
        flex: 0.07,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingBottom: 6
    },
    about:{
        color: Colors.white,
        fontFamily: Fonts.primary
    },
    paragraphContainer:{
        flex: 0.1,
        backgroundColor: Colors.white,
        justifyContent: 'center',
        paddingHorizontal: 30
    },
    paragraph:{
        color: Colors.primary,
        fontFamily: Fonts.primary,
        textAlign: 'center'
    },
    rowImageContainer:{
        flex: 0.13,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 20
    },
    rowImage:{
        flex: 0.18
    },
    buttonFirstContainer:{
        flex: 0.3,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonSecondContainer:{
        flex: 0.4,
        justifyContent: 'center'
    },
    buttonThirdContainer:{
        flex: 0.5,
        justifyContent:'center'
    },
    pinkButton:{
        flexDirection: 'row',
        backgroundColor: Colors.pink,
        padding: 15,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-end'
    },
    goldButton:{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.gold,
        padding: 15,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10
    },
    buttonImage:{
        height: 20,
        width: 20
    },
    buttonText:{
        color: Colors.white,
        fontFamily: Fonts.primary,
        marginLeft: 5
    }
})
export default MessageProfile;
