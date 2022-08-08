import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Fonts from '../../common/Fonts';
import Colors from '../../common/Colors';

const ListItem = (props) => {
    const { title, subTitle, imageName, chevron, onPress} = props;
    return(
       <TouchableOpacity onPress={onPress}>
           <View style={{backgroundColor: 'white', marginTop: 10, borderBottomWidth: 1, borderColor: 'gray' }}>
               <View style={styles.container}>
                   <View style={{flexDirection: 'row', alignItems:'center'}}>
                       <Image source={imageName} style={styles.image}/>
                       <Text style={{fontFamily: Fonts.primary, color: Colors.primary, marginLeft: 5}} >{title}</Text>
                       {/*<Text >Block Users</Text>*/}
                   </View>
                   <View style={{flexDirection: 'row', alignItems:'center'}}>
                       <Text style={{fontFamily: Fonts.primary, color: Colors.primary}} >{subTitle}</Text>
                       {(chevron) ?
                           <Icon name='chevron-right' style={{marginLeft:10, marginTop:4}}/>
                           : null }
                   </View>
               </View>
           </View>
       </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical:5,
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        // borderRadius: 50,
        // marginLeft: 20,
        // marginTop: 20
    }
})
export default ListItem;
